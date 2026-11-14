# Test naïf du 2026-11-14, testeur 1 : motfailurerates.co.uk
**Persona :** Britannique de 45 ans, salarié(e), à l'aise avec son téléphone, aucune connaissance particulière du sujet, ne lit pas les longs paragraphes. Il/elle a tapé sa question dans Google et a cliqué sur le résultat « MOT Failure Rate by Make, Model and Age: Will My Car Pass? » (description : « MOT failure rate for your make, model and year from 32 million DVSA tests, against every car of the same age, with the defects that fail it, fee and due date. ») parce qu'il/elle a vraiment cette question.

Captures parcourues : 64 écrans (01-accueil-1 à 09-en-cars-least-likely-to-fail-mot-suite6), dans l'ordre.

---

## 1. Concept

**Après 5 secondes (01-accueil-1) :** « C'est un site qui me dit quel pourcentage de voitures comme la mienne ratent le MOT. » Le titre « MOT failure rate by make, model and age » colle exactement au résultat Google, les trois menus déroulants (Make / Model / Year first registered) sont tout de suite visibles et le gros chiffre « 21.4% » apparaît sans rien toucher. Le concept est saisi immédiatement.

**Après 2 minutes :** « Je choisis ma marque, mon modèle et l'année de la carte grise (V5C) ; le site me donne la part de ces voitures qui ont échoué en 2023, la compare à toutes les voitures du même âge, et me dit sur quoi elles échouent le plus (ampoules, suspension, pneus). Ce n'est pas un contrôle de MA voiture : c'est une moyenne du groupe. » La phrase en gras « A rate describes these cars as a group, not your car: tyres, brakes and lights you check before the test change your own odds. » est très bien vue : elle répond honnêtement au « Will My Car Pass? » de Google.

**Clair ?** Oui pour l'idée générale. Moins clair dès qu'on veut l'appliquer : chiffres de 2023 (il y a trois ans), âge de la voiture « in 2023 » et non aujourd'hui, et l'expression « first MOT test » qui a deux sens (voir §6).

**Pour qui ?** Tout conducteur en Angleterre, Écosse ou Pays de Galles qui va passer le MOT, ou qui achète une occasion et veut savoir si le modèle est fragile.

**Bénéfice concret :** savoir si son modèle fait mieux ou pire que la moyenne, et quoi vérifier avant le contrôle (ampoules, pneus, suspension). Gratuit, sans plaque d'immatriculation, sans e-mail — rassurant face aux sites « check MOT » payants.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour le bloc résultat en haut de page ; non pour la moitié basse des pages.** Le haut (3 menus + gros pourcentage + comparaison « 3.1 points lower than the average car of its age ») est lisible par n'importe qui. Ça décroche :
- sur « failed the first MOT test » appliqué à une voiture de 8 ou 10 ans (« sa première MOT ? elle en a passé six ! ») ;
- sur « Ratio at equal age » (0.63, 0.86, 1.12…), notion de statisticien répétée dans toutes les listes ;
- sur le gros texte sous l'outil de l'accueil (01-accueil-suite2 à suite12) : paragraphes longs, chiffres empilés (« 32,769,477 », « 32,797,008 », « 22 million failure items », « DVSA table DVSA/MOT/01 », « classes 3 and 4 »), qu'elle ne lira pas ;
- sur la page About : « The parameter file cites 11 official pages », « The site has 46 indexed pages » — jargon de webmaster.

## 3. Parcours écran par écran

| Écran | Compris / coince |
|---|---|
| 01-accueil-1 | **Compris.** Titre clair, menus pré-remplis Ford / Focus / « 2015 (8 years old in 2023) », résultat 21.4 % visible. Petite hésitation : « 28.6% of cars failed their first MOT test in 2023 » — « première MOT » = à 3 ans ? Et « 8 years old in 2023 » : ma voiture de 2015 a 11 ans aujourd'hui, est-ce toujours valable ? |
| 01-accueil-suite1 | **Compris.** Phrase en gras rassurante, causes principales (« lamps, reflectors and electrical equipment 47.3%, suspension 34.5%, tyres 23.9% of failures »), lien « Every age and failure reason for the Focus → ». Le tableau REGISTERED / TESTS / FAILED / ALL CARS se lit bien, la ligne 2015 est surlignée. Mais « 47.3 % + 34.5 % + 23.9 % » dépasse 100 % : elle se demande comment c'est possible (une même voiture peut avoir plusieurs défauts, ce n'est pas dit ici). |
| 01-accueil-suite2 | **Coince un peu.** Note en petit « first test of each visit in 2023; a pass after a repair made during the test counts as a failure » : technique. Puis un paragraphe : « a car at its first MOT, three years old, failed 12.3% » — là, « first MOT » veut dire « la toute première », alors que le titre au-dessus l'utilisait pour « premier passage ». Confusion. « Show the whole paragraph » = bien, le texte est replié. |
| 01-accueil-suite3 / suite4 | **Décroche.** Explication de méthode (« counted from the anonymised file… », « initial fail rate », « Abandoned and aborted tests are left out », « Rates rest on at least 100 tests in the checker and 300 on the content pages »). Utile à un journaliste, pas à elle. Elle arrête de lire. |
| 01-accueil-suite5 / suite6 | **Décroche.** « Why the test-by-test file changes everything » : plaidoyer sur la source. Le chiffre « 32,797,008 first tests » ne correspond pas au « 32,769,477 » lu deux écrans plus haut : léger doute sur la rigueur. Rassurant en revanche : « 28.6% in 2023-24, 27.5% in 2025-26 » montre que ça bouge peu depuis 2023. |
| 01-accueil-suite7 | **Compris en partie.** Tableau des taux nationaux jusqu'à « April to June 2026: 26.8% » — rassure sur la fraîcheur. « Age is the first factor » est parlant (12.3 % à 3 ans, 31.7 % à 10 ans). La phrase sur le « ratio… 1 for a model on the national line, below 1… » perd la lectrice. |
| 01-accueil-suite8 à suite11 | **Compris mais long.** Liste des 20 modèles les plus testés, chaque fiche sur 3 lignes (Tests in 2023 / Failed / Ratio at equal age). Lisible mais interminable au pouce ; impossible de comparer d'un coup d'œil. Les chiffres « Failed » et « Ratio » donnent parfois des messages contraires (Mini Mini : Failed 37.6 % mais ratio 0.93 « mieux que la moyenne ») : elle ne comprend pas. |
| 01-accueil-suite12 | **Compris.** « What fails cars at the MOT » : pneu sous 1.6 mm, ampoule qui ne marche pas, ressort cassé — concret et utile. Liens « most common failures page », « checklist page ». |
| 02-menu-1 | **Compris.** Menu clair : « Failure rates » (by age, Most common failures, Petrol/diesel…, by mileage, by area, Cars least likely to fail), « Cost, dates and retests » (replié), « By make » (Ford, Vauxhall…). Elle cherche le prix du MOT et la date d'échéance promis par Google : ils sont cachés sous « Cost, dates and retests », replié — elle risque de le rater. |
| 03-en-about-1 à suite4 | **Compris globalement, rassurant.** « Radif Partners… builds free tools on public data », « What we are not: We are not DVSA, DVLA, GOV.UK, a garage… », « It is free and needs no account or email » : très rassurant. Jargon : « The parameter file cites 11 official pages », « The site has 46 indexed pages, listed in the footer ». Pied de page « About this site, legal notices and all pages » replié, OK. |
| 04-en-audi-a3-…-1 / suite1 | **Compris.** Même outil, pré-rempli Audi A3 2015 : 17.8 %, « 6.7 points lower than the average car of its age ». Clair. |
| 04-…-suite2 | **Compris.** Paragraphe « 25.8% of the 410,439 Audi A3s that took a first MOT test in 2023 failed it » — encore « first MOT test » (410 439 A3 à leur toute première MOT ? Non, sens « premier passage »). |
| 04-…-suite3 à suite5 | **Coince (répétition).** « Audi A3 MOT failure rate by age » répète exactement le tableau qui est déjà dans l'outil juste au-dessus, en version fiches de 5 lignes par année : trois écrans entiers de chiffres déjà vus. Elle croit avoir rechargé la même chose. |
| 04-…-suite6 | **Compris.** « Petrol and diesel A3s » : 30.0 % diesel contre 21.3 % essence, intéressant. « Split ball joint dust covers and driveshaft boots » : vocabulaire de garagiste. |
| 05-en-audi-a4-… (1 à suite6) | **Compris**, même structure : 20.2 % pour 2016, « about the same as the average car of its age » (formulation plaisante). Même redite tableau / fiches. « High mileage, low failure » : 103,065 miles en moyenne, parlant. |
| 06-en-audi-mot-failure-rate-1 à suite6 | **Compris en partie.** Page marque : l'outil reprend l'A3 (normal). « Audis failed about 19% less often, the third best record… behind BMW and Jaguar » : clair. La liste « Audi models ranked at equal age » est triée par ratio : A8 14.1 % (0.44), puis Q2 9.4 % (0.63) — le Q2 rate moins mais est classé après : incompréhensible sans le ratio. La partie « by year of registration » saute des années (2020, 2018, 2015, 2013, 2011) : « où est 2019 ? ». |
| 07-en-bmw-3-series-… (1 à suite6) | **Compris**, outil 2013 : 24.5 % contre 31.7 %. Paragraphe « rank 30 of 148 » OK. Inquiétant : « DVSA records some 3 Series under the engine variant, such as 320 or 330, which appear as separate models in the checker » — si sa carte grise dit « 320d », elle ne sait pas quel modèle choisir, et le chiffre change. Info enfouie en bas de page. 2017 : seulement 3,720 tests contre 25,042 en 2016 — étrange, pas expliqué. |
| 08-en-bmw-mot-failure-rate-… (1 à suite6) | **Compris en partie.** « BMW has the best record at equal age… » clair. Classement des modèles : « M3, 730, X6, Z4, 530, 435, I3… » — pour elle, « 530 » ou « 435 » ne sont pas des modèles qu'elle connaît ; l'explication (« DVSA records many BMW models by engine variant (116, 118, 320, 520) ») arrive APRÈS la liste. |
| 09-en-cars-least-likely-to-fail-mot-1 à suite6 | **Compris, bonne idée.** Outil de comparaison Toyota Yaris 2015 vs Vauxhall Corsa : 18.0 % contre « Vauxhall Corsa, 2015: 31.0% of 88,962 tests ». Mais le résultat ne dit pas en clair « la Yaris rate nettement moins que la Corsa », et le tableau en dessous ne montre que la Yaris. Liste des 20 : « Raw rate » ici, « Failed » ailleurs — même chose, deux noms. |

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Outil Make / Model / Year (résultat en %) | Oui, dès le 1er écran | Oui (sauf « first MOT test » et « in 2023 ») | Oui, c'est la réponse à sa question | 4/5 |
| Comparaison avec « All cars aged 8 » / « points lower » | Oui | Oui | Oui, c'est ce qui donne du sens au chiffre | 4/5 |
| Causes principales de refus du modèle | Oui, dans le bloc résultat | Oui, mais les % qui dépassent 100 % troublent | Oui (quoi vérifier avant) | 4/5 |
| Tableau par année d'immatriculation | Oui | Oui | Moyen (redondant avec la liste plus bas) | 4/5 |
| « Ratio at equal age » dans les classements | Oui | Non | Faible pour elle | 2/5 |
| Comparer deux modèles (page Cars least likely) | Seulement via le menu | Oui | Oui pour un achat d'occasion | 3/5 |
| Prix du MOT et date d'échéance (promis par Google) | Non visible dans les captures ; caché sous « Cost, dates and retests » replié | — | Attendu | 1/5 |
| Lien « Every age and failure reason for the … → » | Oui | Oui | Oui (sur l'accueil) ; sur la page modèle elle-même, elle ne sait pas où il mène puisqu'elle y est déjà | 3/5 |
| Menu ☰ | Oui | Oui | Oui | 4/5 |
| Page About (qui, pourquoi, gratuit) | Oui (liens « About this site ») | Oui | Rassurant | 4/5 |

## 5. Enchaînement et navigation

- Points forts : chaque page reprend le même outil en haut, pré-réglé sur le bon modèle — on retrouve ses repères. Fil d'Ariane « Home / Audi A3 » présent. Menu ☰ bien rangé par thèmes.
- Faiblesses : sous l'outil, les pages deviennent des colonnes de fiches chiffrées très longues (3 à 4 écrans de « First registered / Age in 2023 / Tests / A3 failed / All cars ») qui répètent le tableau déjà vu. Au pouce, c'est un tunnel.
- Les années proposées s'arrêtent à 2020 (voitures de 3 ans en 2023) : quelqu'un qui a une voiture de 2021 ou 2022 (qui passe son MOT en 2024-2025) ne trouvera pas son année, sans explication visible en haut.
- Le prix et la date du MOT, promis dans le résultat Google, ne sont nulle part en haut de page ni dans le bloc résultat : il faut deviner qu'ils sont sous « Cost, dates and retests ».
- Incohérence de vocabulaire d'une page à l'autre : « Failed » / « Raw rate », « All cars » / « All makes ».

## 6. Difficultés classées

1. **« First MOT test » a deux sens contradictoires** (01-accueil-1, 01-accueil-suite2, tous les blocs résultat).
   *Vécu :* « Ford Focus first registered in 2015: failed the first MOT test » pour une voiture de 8 ans — « sa première MOT, c'était en 2018 ? ». Puis l'accueil écrit « a car at its first MOT, three years old », cette fois au sens de « toute première ». Elle ne sait plus ce que mesure le gros chiffre.
   *Reco :* réserver « first MOT » à la toute première MOT à 3 ans, et dire « first attempt » ailleurs.
   *Texte :* « Ford Focus first registered in 2015: failed the MOT at the first attempt » ; sous-titre : « 28.6% of cars failed their MOT at the first attempt in 2023 ».

2. **Données 2023 et âge « in 2023 » : elle ne sait pas comment l'appliquer à sa voiture aujourd'hui** (01-accueil-1, tous les menus Year).
   *Vécu :* « 2015 (8 years old in 2023) » — sa voiture a 11 ans en 2026 ; doit-elle regarder la ligne 2015 ou la ligne des voitures de 11 ans (2012) ? Rien ne le dit. Les années 2021-2022 manquent.
   *Reco :* une ligne sous le résultat, et une indication dans le menu.
   *Texte :* « Your 2015 car is 11 this year: cars aged 11 failed 34.4% in 2023 (see 2012 in the table). Latest DVSA file: 2023 tests; national rate has barely moved since (26.8% in 2026). »

3. **Le prix et la date d'échéance promis par Google n'apparaissent pas** (01-accueil-1 à suite12, 02-menu-1).
   *Vécu :* elle venait aussi pour « fee and due date » ; elle ne les voit pas, la rubrique « Cost, dates and retests » est repliée dans le menu.
   *Reco :* ajouter dans le bloc résultat (ou juste sous l'outil) une ligne avec le prix maximum et un lien date d'échéance.
   *Texte :* « MOT fee: up to £[montant officiel] for a car · When is my MOT due? → ».

4. **« Ratio at equal age » incompris, et classements qui contredisent les pourcentages** (01-accueil-suite8 à suite11, 06-…-suite3/4, 08-…-suite3 à 5, 09-…-suite3 à 6).
   *Vécu :* « Audi Q2 : Failed 9.4 %, ratio 0.63 » classé après « A8 : 14.1 %, 0.44 » ; « Mini Mini 37.6 % » mais « 0.93 » donc « mieux que la moyenne » ? Elle ne comprend plus qui est fiable.
   *Reco :* remplacer le ratio par une phrase en pourcentage.
   *Texte :* « Compared with cars of the same age: 37% fewer failures » (au lieu de « Ratio at equal age 0.63 ») et « 12% more failures » (au lieu de 1.12).

5. **Doublon tableau / fiches sur les pages modèle** (04-…-suite3 à suite5, 05-…-suite3 à suite6, 07-…-suite3 à suite5).
   *Vécu :* trois écrans de fiches qui répètent le tableau qu'elle vient de lire ; elle croit à un bug et abandonne la page avant les parties utiles (« What fails a A3 at the MOT »).
   *Reco :* supprimer la liste « … MOT failure rate by age » ou la replier ; remonter « What fails a … at the MOT » juste sous l'outil.
   *Texte du repli :* « Show every year as a list ▾ ».

6. **BMW : modèles enregistrés par moteur (320, 520…), explication trop tardive** (07-…-suite6, 08-…-suite3 à suite6).
   *Vécu :* sa carte grise dit « 320d » ; elle ne sait pas s'il faut choisir « 3 Series » ou « 320 ». L'explication est en bas de page, après la liste.
   *Reco :* une aide sous le menu Model pour BMW (et marques similaires).
   *Texte :* « BMW: DVSA often records the engine (e.g. 320, 520). If your logbook says 320d, choose 320; if it says 3 Series, choose 3 Series. »

7. **Texte long et chiffres techniques sous l'outil de l'accueil, avec une incohérence** (01-accueil-suite2 à suite7).
   *Vécu :* « 32,769,477 first MOT tests » puis « 32,797,008 first tests » deux écrans plus loin ; « DVSA table DVSA/MOT/01 », « classes 3 and 4 », « class 4 ». Elle ne lit pas et le petit écart de chiffres fait douter.
   *Reco :* harmoniser le chiffre (ou expliquer l'écart), replier les sections méthode (« How … is counted », « Why the test-by-test file… ») derrière un lien « How the rates are counted ».
   *Texte :* « 32.8 million first attempts at the MOT in 2023 » partout.

8. **Comparateur sans conclusion, vocabulaire changeant** (09-…-suite1, 09-…-suite3).
   *Vécu :* « Vauxhall Corsa, 2015: 31.0% of 88,962 tests » est affiché sous la Yaris, mais aucune phrase ne tranche ; le tableau ne montre que la Yaris. « Raw rate » ici, « Failed » ailleurs.
   *Reco :* ajouter une phrase de verdict et un nom unique pour la colonne.
   *Texte :* « The 2015 Yaris failed 13 points less often than the 2015 Corsa (18.0% vs 31.0%). » ; utiliser partout « Failed ».

## 7. À garder

- Le premier écran : titre identique à Google, outil pré-rempli, gros pourcentage visible sans rien taper.
- La phrase « 16,277 of 76,052 tests in 2023. All cars aged 8: 24.5%, so this model was 3.1 points lower than the average car of its age. » : chiffre + référence + verdict.
- La phrase en gras « A rate describes these cars as a group, not your car… » : honnête et utile.
- Les causes principales par modèle, et « tyre tread below 1.6 mm… a lamp that does not work… a broken coil spring » : concret, actionnable.
- « about the same as the average car of its age » (A4) : formulation naturelle.
- « No number plate is needed and nothing you choose leaves your browser », « It is free and needs no account or email », « What we are not » : très rassurant.
- Le tableau des taux nationaux jusqu'à « April to June 2026 », qui montre que 2023 reste représentatif.
- Le menu ☰ par thèmes et marques, les paragraphes repliés « Show the whole paragraph ».
- La page « Cars least likely to fail the MOT » avec comparaison de deux modèles : idée excellente pour un achat d'occasion.

## 8. Notes

Clarté : 7/10
Facilité : 8/10
Utilité : 7/10
