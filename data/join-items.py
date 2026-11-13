"""Joint test_item 2023 (DVSA anonymised MOT) × tests échoués (failed.txt) → agrégats par modèle/âge/catégorie."""
import sys, subprocess, numpy as np, pandas as pd, json, collections
S='/private/tmp/claude-501/-Users-mottalib/6ca46ef2-6451-47e9-854f-6be4fd62d8d0/scratchpad'
f=pd.read_csv(f'{S}/ukmot/failed.txt',sep='|',header=None,names=['id','make','model','age'],dtype={'id':'int64','make':str,'model':str,'age':'int16'},keep_default_na=False,quoting=3)
f['mm']=f['make']+'|'+f['model']
codes,uniq=pd.factorize(f['mm'])
order=np.argsort(f['id'].values)
ids=f['id'].values[order]; key=codes[order].astype('int32'); age=f['age'].values[order]
print('failed tests',len(ids),'models',len(uniq),file=sys.stderr)
del f
det=pd.read_csv(f'{S}/lookup/item_detail.csv',sep='|',dtype=str,keep_default_na=False,quoting=3)
det=det[det.test_class_id=='4']
sec=dict(zip(det.rfr_id.astype(int),det.test_item_set_section_id.astype(int)))
grp=pd.read_csv(f'{S}/lookup/item_group.csv',sep='|',dtype=str,keep_default_na=False,quoting=3)
grp=grp[(grp.test_class_id=='4')&(grp.parent_id=='0')]
secname=dict(zip(grp.test_item_id.astype(int),grp.item_name))
p=subprocess.Popen(['unzip','-p',f'{S}/item2023.zip'],stdout=subprocess.PIPE)
cat_model=collections.Counter(); cat_age=collections.Counter(); rfr_nat=collections.Counter(); rfr_model=collections.Counter(); rfr_danger=collections.Counter(); cat_tests_nat=collections.Counter()
n=0
for ch in pd.read_csv(p.stdout,sep='|',usecols=['test_id','rfr_id','rfr_type_code','dangerous_mark'],dtype={'test_id':'int64','rfr_id':'int64','rfr_type_code':str,'dangerous_mark':str},keep_default_na=False,chunksize=5_000_000,quoting=3):
    ch=ch[ch.rfr_type_code.isin(['F','P'])]
    pos=np.searchsorted(ids,ch.test_id.values); pos[pos>=len(ids)]=0
    ok=ids[pos]==ch.test_id.values
    ch=ch[ok]; pos=pos[ok]
    ch=ch.assign(k=key[pos],a=age[pos],c=ch.rfr_id.map(sec).fillna(-1).astype(int))
    n+=len(ch)
    for r,v in ch.groupby('rfr_id').size().items(): rfr_nat[r]+=v
    for r,v in ch[ch.dangerous_mark=='D'].groupby('rfr_id').size().items(): rfr_danger[r]+=v
    for (k,r),v in ch.groupby(['k','rfr_id']).size().items(): rfr_model[(k,r)]+=v
    d=ch.drop_duplicates(['test_id','c'])
    for (k,c),v in d.groupby(['k','c']).size().items(): cat_model[(k,c)]+=v
    for (a,c),v in d.groupby(['a','c']).size().items(): cat_age[(a,c)]+=v
    print('rows',n,file=sys.stderr)
out={'secname':{int(k):v for k,v in secname.items()},
 'cat_model':[[uniq[k],int(c),int(v)] for (k,c),v in cat_model.items()],
 'cat_age':[[int(a),int(c),int(v)] for (a,c),v in cat_age.items()],
 'rfr_nat':[[int(r),int(v)] for r,v in rfr_nat.most_common(400)],
 'rfr_danger':[[int(r),int(v)] for r,v in rfr_danger.most_common(100)],
 'rfr_model':[[uniq[k],int(r),int(v)] for (k,r),v in rfr_model.items() if v>=30]}
json.dump(out,open(f'{S}/ukmot/items-agg.json','w'))
print('done',n,file=sys.stderr)
