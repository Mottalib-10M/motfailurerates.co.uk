"""Rebuilds src/data/mot.json and src/data/mot-lite.json from the DVSA anonymised MOT files.

Usage: python3 data/build-mot.py <work-dir>
<work-dir> holds the outputs of the two passes described in data/LISEZMOI-DONNEES.txt:
  agg2.txt        M|make|model|fuel|first_use_year|tests|initial_fails|sum_mileage
                  B|mileage_band_10k|age_by_year|tests|fails   R|postcode_area|age_by_year|tests|fails
  agg.txt         make|fuel|model|age_completed|tests|F|PRS|sum_mileage
  items-agg.json  failure items joined to failed tests (categories by model and by age, top items)
  lookup/         DVSA lookup.zip (item_detail.csv, item_group.csv)
Tests counted: class 4, normal test (NT), result P, F or PRS, calendar year 2023. Fail = F or PRS (initial fail).
"""
import sys, json, collections, csv, os
W = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')
TEST_YEAR = 2023
nat = collections.defaultdict(lambda: [0, 0]); fuel = collections.defaultdict(lambda: collections.defaultdict(lambda: [0, 0]))
band = collections.defaultdict(lambda: collections.defaultdict(lambda: [0, 0])); area = collections.defaultdict(lambda: collections.defaultdict(lambda: [0, 0]))
model = collections.defaultdict(lambda: {'y': collections.defaultdict(lambda: [0, 0]), 'fuel': collections.defaultdict(lambda: [0, 0]), 'n': 0, 'f': 0, 'mi': 0})
make = collections.defaultdict(lambda: {'y': collections.defaultdict(lambda: [0, 0]), 'n': 0, 'f': 0})
def ageband(a):
    return '3-5' if a <= 5 else '6-9' if a <= 9 else '10-14' if a <= 14 else '15-19' if a <= 19 else '20+'
for line in open(os.path.join(W, 'agg2.txt')):
    p = line.rstrip('\n').split('|')
    if p[0] == 'M':
        mk, md, fu, fy, n, f, mi = p[1], p[2], p[3], int(p[4]), int(p[5]), int(p[6]), int(p[7] or 0)
        if fy > TEST_YEAR - 2: continue  # vehicles under 2 years: taxis and early tests, not the normal 3-year rule
        nat[fy][0] += n; nat[fy][1] += f
        fc = fu if fu in ('PE', 'DI', 'HY', 'EL') else 'OT'
        fuel[fc][fy][0] += n; fuel[fc][fy][1] += f
        m = model[(mk, md)]; m['y'][fy][0] += n; m['y'][fy][1] += f; m['fuel'][fc][0] += n; m['fuel'][fc][1] += f; m['n'] += n; m['f'] += f; m['mi'] += mi
        k = make[mk]; k['y'][fy][0] += n; k['y'][fy][1] += f; k['n'] += n; k['f'] += f
    elif p[0] == 'B':
        b, ry, n, f = int(p[1]), int(p[2]), int(p[3]), int(p[4])
        if ry < 3: continue
        band[b][ageband(ry)][0] += n; band[b][ageband(ry)][1] += f
    elif p[0] == 'R':
        a, ry, n, f = p[1], int(p[2]), int(p[3]), int(p[4])
        if ry < 3 or not a: continue
        area[a][ageband(ry)][0] += n; area[a][ageband(ry)][1] += f; area[a]['all'][0] += n; area[a]['all'][1] += f
# failed tests by completed age (denominator of the category shares by age)
failed_by_age = collections.Counter(); tests_by_age = collections.Counter()
for line in open(os.path.join(W, 'agg.txt')):
    p = line.rstrip('\n').split('|'); a = int(p[3]); tests_by_age[a] += int(p[4]); failed_by_age[a] += int(p[5]) + int(p[6])
it = json.load(open(os.path.join(W, 'items-agg.json')))
secname = {int(k): v for k, v in it['secname'].items()}
CATS = [20000, 20003, 20106, 20185, 20234, 20391, 20518, 20601, 20685, 20725]  # filled from data below
cats_present = collections.Counter()
for mm, c, v in it['cat_model']: cats_present[c] += v
CATS = [c for c, v in cats_present.most_common() if c in secname and c >= 20000 and v >= 10000]
CAT_PLAIN = {'Road Wheels': 'Road wheels', 'Seat belts and supplementary restraint systems': 'Seat belts and airbags'}  # testeurs naïfs 2026-11-14
cat_label = {c: CAT_PLAIN.get(secname[c], secname[c]) for c in CATS}
det = {}
with open(os.path.join(W, 'lookup', 'item_detail.csv')) as fh:
    for r in csv.DictReader(fh, delimiter='|', quoting=csv.QUOTE_NONE):
        if r['test_class_id'] == '4': det[int(r['rfr_id'])] = (r['rfr_desc'], r['rfr_insp_manual_desc'], int(r['test_item_set_section_id'] or 0), r['rfr_deficiency_category'], int(r['test_item_id'] or 0))
comp = {}
with open(os.path.join(W, 'lookup', 'item_group.csv')) as fh:
    for r in csv.DictReader(fh, delimiter='|', quoting=csv.QUOTE_NONE):
        if r['test_class_id'] == '4': comp[int(r['test_item_id'])] = r['item_name']
cat_model = collections.defaultdict(dict)
for mm, c, v in it['cat_model']:
    if c in cat_label: cat_model[mm][c] = v
cat_age = collections.defaultdict(dict)
for a, c, v in it['cat_age']:
    if c in cat_label: cat_age[a][c] = v
rfr_model = collections.defaultdict(list)
for mm, r, v in it['rfr_model']: rfr_model[mm].append((v, r))
def word(w):
    if any(ch.isdigit() for ch in w) and len(w) <= 4: return w
    return '-'.join(x if (len(x) <= 3 and x.isalpha() and x not in ('KA', 'UP', 'ROC', 'MAX', 'ONE', 'KIA', 'MCC')) else x.capitalize() for x in w.split('-'))
def title(s):
    return ' '.join(word(w) for w in s.split(' '))
LABEL = {('VOLKSWAGEN', 'FOX'): 'Fox', ('TOYOTA', 'IQ'): 'iQ', ('NISSAN', 'NV200'): 'NV200', ('SEAT', 'LEON'): 'Leon', ('HYUNDAI', 'I10'): 'i10', ('HYUNDAI', 'I20'): 'i20', ('HYUNDAI', 'I30'): 'i30', ('HYUNDAI', 'IX35'): 'ix35', ('FORD', 'KA'): 'Ka', ('MERCEDES-BENZ', 'C'): 'C-Class', ('MERCEDES-BENZ', 'E'): 'E-Class', ('MERCEDES-BENZ', 'A'): 'A', ('VOLKSWAGEN', 'UP'): 'Up', ('BMW', 'I3'): 'i3', ('HYUNDAI', 'I40'): 'i40', ('HYUNDAI', 'IX20'): 'ix20', ('VOLKSWAGEN', 'EOS'): 'Eos', ('SEAT', 'MII'): 'Mii', ('KIA', 'RIO'): 'Rio', ('HYUNDAI', 'SANTA FE'): 'Santa Fe', ('MITSUBISHI', 'L200 DOUBLE CAB'): 'L200 Double Cab', ('MINI', 'MINI (R60)'): 'Mini (R60)'}
def yrs(d, mn=100):
    return {str(y): v for y, v in sorted(d.items()) if v[0] >= mn}
models = []
for (mk, md), m in model.items():
    if m['n'] < 10000 or len(md.split()) > 3: continue
    mm = f'{mk}|{md}'
    failed = m['f']
    cm = cat_model.get(mm, {})
    top = sorted(rfr_model.get(mm, []), reverse=True)[:8]
    models.append({'make': mk, 'model': md, 'label': LABEL.get((mk, md), title(md)), 'makeLabel': title(mk), 'n': m['n'], 'f': m['f'], 'mi': round(m['mi'] / m['n']),
                   'y': yrs(m['y']), 'fuel': {k: v for k, v in m['fuel'].items() if v[0] >= 500},
                   'cats': {str(c): round(cm.get(c, 0) / failed, 4) for c in CATS} if failed else {},
                   'top': [[r, v] for v, r in top if r in det]})
models.sort(key=lambda x: -x['n'])
makes = [{'make': mk, 'label': title(mk), 'n': k['n'], 'f': k['f'], 'y': yrs(k['y'], 300)} for mk, k in make.items() if k['n'] >= 50000]
makes.sort(key=lambda x: -x['n'])
items = {str(r): {'n': comp.get(det[r][4], ''), 'd': det[r][0].strip(), 'm': det[r][1].strip(), 'c': det[r][2], 'k': det[r][3]} for r in set([r for r, _ in it['rfr_nat'][:120]] + [r for r, _ in it['rfr_danger'][:40]] + [r for m in models for r, _ in m['top']]) if r in det}
out = {
    'meta': {'testYear': TEST_YEAR, 'tests': sum(v[0] for v in nat.values()), 'fails': sum(v[1] for v in nat.values()),
             'allTests': sum(tests_by_age.values()), 'allFails': sum(failed_by_age.values()), 'published': '2024-02-29', 'read': '2026-11-13'},
    'national': yrs(nat, 1),
    'fuel': {k: yrs(v) for k, v in fuel.items()},
    'mileage': {str(b): dict(v) for b, v in sorted(band.items())},
    'areas': {a: dict(v) for a, v in sorted(area.items()) if v['all'][0] >= 20000},
    'cats': {str(c): cat_label[c] for c in CATS},
    'catAge': {str(a): {'failed': failed_by_age[a], 'tests': tests_by_age[a], **{str(c): v for c, v in cat_age[a].items()}} for a in range(2, 31) if a in cat_age},
    'rfrNat': it['rfr_nat'][:120], 'rfrDanger': it['rfr_danger'][:40], 'items': items,
    'models': models, 'makes': makes,
}
json.dump(out, open(os.path.join(OUT, 'mot.json'), 'w'), separators=(',', ':'))
lite = {'testYear': TEST_YEAR, 'national': out['national'], 'cats': out['cats'],
        'models': [[m['makeLabel'], m['label'], {y: v for y, v in m['y'].items()}, [[int(c), s] for c, s in sorted(m['cats'].items(), key=lambda x: -x[1])[:3]]] for m in models]}
json.dump(lite, open(os.path.join(OUT, 'mot-lite.json'), 'w'), separators=(',', ':'))
print('models', len(models), 'makes', len(makes), 'areas', len(out['areas']), 'cats', CATS, 'bytes', os.path.getsize(os.path.join(OUT, 'mot.json')), os.path.getsize(os.path.join(OUT, 'mot-lite.json')))
