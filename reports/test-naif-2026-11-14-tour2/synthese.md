# Synthèse des testeurs naïfs du 2026-11-14, tour 2 (corrections du 3e tour) : motfailurerates.co.uk

Notes reçues : 7/8/8, 7/8/8, 7/7/8 (la clarté bloque). Une ligne par difficulté, avec le nombre de testeurs qui l'ont relevée.
Rien de ce qui a été corrigé au 1er tour (`reports/test-naif-2026-11-14/synthese.md`) n'est défait : « first attempt »
garde son sens, le tableau par âge reste replié, les aides BMW / Mercedes / Mini restent sous le menu Model.

| # | Difficulté | Testeurs | Décision |
|---|---|---|---|
| 1 | Le gros chiffre est le taux de l'âge en 2023 (21,4 %) alors que la voiture a 11 ans aujourd'hui ; le taux qui la concerne (36,4 %) est en petit | 3 | **corrigé.** Défaut de calcul de la réponse, pas de libellé : le chiffre principal (`data-principal`) est maintenant le taux des voitures du même modèle qui avaient, dans les données 2023, l'âge que la voiture a aujourd'hui (Focus 2015 → 11 ans → Focus immatriculées en 2012 : 36,4 %), avec repli nommé sur toutes les voitures si le modèle a moins de 100 tests à cet âge. Le taux de l'année d'immatriculation reste en dessous, plus petit, titré « Your own year, 2015: at 8, the age it was in 2023 ». Aucun chiffre nouveau : tout vient de mot-lite.json (DVSA 2023). Les deux lignes sont en gras dans le tableau. Test `tests/coherence-tour3.test.ts` : le chiffre principal de l'accueil = taux Focus 2012. |
| 2 | Trois unités pour la même comparaison (« percentage points », « 12% more failures », ratio 0,80, « ratios under 0.70 », « rank 30 of 148 ») | 3 | **corrigé.** Une seule unité partout : deux pourcentages de tests ratés côte à côte, « 21.4% failed, against 24.5% for all cars the same age ». Moteur : `sameAgeRate()` = taux du modèle ÷ indice d'âge, donc les deux pourcentages classent toujours dans l'ordre des listes. Helpers `vs()` / `at()` ; `ratio`, `pts`, `vsAge` et les rangs « N of M » supprimés (≈ 130 phrases réécrites dans 36 pages, accueil, classement, méthode). Colonnes « All cars the same age failed » au lieu de « Against cars the same age ». Verdict commun (`src/lib/compare.ts`, écart < 0,5 point = « About average »). Test : aucun « ratio », « percentage points », « N% more/fewer failures », « rank N of M » dans dist. |
| 3 | Focus 2015 « better than average » mais liste « Ford Focus … 3% more failures » sans dire « all registration years together » | 3 | **corrigé.** Les listes disent « all registration years together » et la légende de l'accueil le montre sur la Focus : 2015 à 21,4 % contre 24,5 %, toutes années à 32,0 % contre 31,1 %. |
| 4 | Classements qui semblent contredire les taux (T-Roc 9,2 % derrière Q2 9,4 % ; GLC derrière SLK ; Q2 sous A8) | 3 | **corrigé.** Chaque liste affiche le taux de référence (« All cars the same age failed ») et sa légende dit « ranked against cars the same age, not by the percentage alone », avec un exemple tiré des données de la marque. Page Method §6 réécrite sans ratio. |
| 5 | « That is the first MOT, at three years, only for 2020 cars. » obscur | 3 | **corrigé.** Phrase supprimée ; la phrase-réponse dit : « out of every 100 MOT tests of these cars in 2023, how many failed at the first attempt, before any repair ». |
| 6 | « National rate since » peu clair | 2 | **corrigé.** « Latest national rate, all cars: 26.8% failed at the first attempt between April and June 2026 » (tableau DVSA/MOT/01 déjà cité). |
| 7 | « 7 free checks before your MOT » trop bas (13e écran) | 3 | **corrigé.** Bouton « 7 free checks before your MOT → » dans chaque bloc résultat et lien dans le menu (ordinateur et mobile), vers l'ancre `#seven-checks` de l'accueil (marge sous la barre fixe). |
| 8 | Coquilles « a A3 / a A4 » | 3 | **corrigé.** Fonction `an()` (lettre épelée : an A3, an X5, an MX-5 ; a Focus, a One), utilisée dans le calculateur et le titre « What fails an A3 at the MOT ». Test sur dist. |
| 9 | « Mini Mini » | 3 | **corrigé** (avis du 1er tour revu : 3 testeurs cette fois). Le nom n'est plus répété quand le modèle DVSA commence par la marque (`nameOf`) : « Mini », « Mini (R60) », partout (calculateur, listes, textes). |
| 10 | « I3 » et autres capitales DVSA | 2 | **corrigé.** Libellés : i3, i40, ix20, Eos, Mii, Rio, Santa Fe, L200 Double Cab, Mini (R60) (mot.json, mot-lite.json et table LABEL de data/build-mot.py). |
| 11 | « class 4 » non expliqué | 3 | **corrigé.** Expliqué à chaque apparition (« the same MOT as cars (class 4, the test class for cars and vans up to 3,000 kg) ») ou remplacé par « cars and light vans (class 4) ». |
| 12 | « Last column » sur mobile (tableaux en fiches) | 1 | **corrigé** (texte faux sur l'écran du testeur) : les légendes nomment la colonne (« All cars the same age failed », « A first check at home »). Test sur dist. |
| 13 | « Your car is 11 now… (registered 2012) » confus | 1 | **corrigé** par le n° 1 : « of Focus cars aged 11 (registered in 2012) failed… », et menu Year simplifié « 2015 (11 years old now) ». |
| 14 | Définir le % en tête | 1 | **corrigé** par le n° 5. |
| 15 | Tableau par année en double : l'intituler | 1 | **corrigé.** Le repli dit les années qu'il couvre : « Show the years 2020 to 2007 in one table (the same figures as the checker above) ». Le titre proposé « since the 1980s » n'est pas retenu : il serait faux (14 années affichées). |
| 16 | BMW enregistrées par code moteur : note sous le tableau | 1 | **non retenu** : la note existe déjà juste sous le tableau de la page BMW (« DVSA records many BMW models by engine variant (116, 118, 320, 520)… »), et l'aide sous le menu Model depuis le 1er tour. |
| 17 | Noms de modèles qui ne semblent pas cliquables dans les listes | 1 | **corrigé** (bouton apparemment sans effet) : les liens des tableaux sont soulignés et colorés (`table.journal td a`). |
| 18 | Jargon : « supplementary restraint systems », « Road Wheels », « constant velocity boot » | 1 | **corrigé** : « Seat belts and airbags », « Road wheels », « rubber boot over the joint » (libellés d'affichage seulement ; chiffres DVSA inchangés). |
| 19 | « DVSA/MOT/01 » | 1 | **non retenu** : référence de source placée en légende de tableau, comme le veut le brief (« références en note ou en source »). |
| 20 | Coût et informations actionnables trop bas | 1 | **corrigé** par le n° 7 ; la ligne « MOT fee » et les liens coût / échéance sont déjà dans le bloc résultat depuis le 1er tour. |

## Défauts de trame relevés
- Aucun composant de `_trame/_template` touché. Le texte « Last column » venait du site, pas de la trame ; la règle « une légende de tableau
  ne désigne jamais une colonne par sa position » (les tableaux deviennent des fiches sous 768 px) mériterait un contrôle de trame.

## Contrôles
- `npm run check` : passe (exit 0) — build, 44 tests vitest dont `tests/coherence-tour3.test.ts`, check-seo 0/48 à corriger, check-unique 0, check-trame, layout, sources, premier écran, contraste, saisie, règles, mot-clé à 0. Log : `logs/motfail-t3-check.log`.
- Captures refaites (accueil, menu, page Audi) et relues : gros chiffre 36,4 % (Focus 2015, 11 ans), 21,4 % en second, bouton « 7 free checks », liste Audi avec la colonne de référence.
