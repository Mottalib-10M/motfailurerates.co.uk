# Test naïf du 2026-11-14, testeur 2 : motfailurerates.co.uk
**Persona :** Britannique de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat « MOT Failure Rate by Make, Model and Age: Will My Car Pass? » parce qu'il/elle a cette question, et découvre le site sur son téléphone.

## 1. Concept

**Après 5 secondes (01-accueil-1) :** c'est clair. Titre « MOT failure rate by make, model and age », trois menus déroulants (Make / Model / Year first registered) et un gros chiffre « 21.4% » pour une Ford Focus 2015. Je comprends : je choisis ma voiture, le site me dit quelle part des voitures comme la mienne a raté le MOT. C'est exactement la promesse du résultat Google (« Will My Car Pass? »), sans plaque d'immatriculation à taper. Bon point : l'outil est au-dessus de la ligne de flottaison, pré-rempli, je vois le résultat sans rien faire.

**Après 2 minutes :** c'est un site de statistiques DVSA, sérieux, gratuit, sans compte, qui compare chaque modèle et chaque année à « all cars » du même âge, donne les trois familles de défauts les plus fréquentes, et des classements (par marque, « Cars least likely to fail »). Bénéfice concret : savoir si ma voiture est plutôt « bonne élève » ou non et quoi vérifier (pneus, freins, ampoules) avant le test. Pour qui : tout conducteur en Angleterre, Écosse, pays de Galles qui va passer un MOT ou qui achète une occasion.

Ce qui manque par rapport à la promesse Google : la description parlait aussi de « fee and due date ». Je n'ai vu ni le prix du MOT ni la date d'échéance sur aucun écran capturé ; seulement une rubrique de menu repliée « Cost, dates and retests ». Si c'est ce que je cherchais, je risque de repartir.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour le résultat principal, non pour la suite.** Le bloc vert (pourcentage + « All cars aged 8: 24.5%, so this model was 3.1 points lower than the average car of its age ») est compréhensible par n'importe qui. Ça décroche :
- dès la notion « Ratio at equal age » (0.86, 1.12…) qui revient dans toutes les listes sans explication visible au moment où on la lit ;
- sur le mot « first MOT test », utilisé dans deux sens différents (voir difficulté 1) ;
- sur les longs paragraphes méthodologiques de l'accueil (« Why the test-by-test file changes everything », « parameter file », « class 4 », « initial fail rate ») : pour un(e) impatient(e), c'est un mur de texte.
- sur les modèles BMW découpés en « 520 », « 525 », « 530 », « 5 Series » : qui a une 520d ne sait pas où se mettre.

## 3. Parcours écran par écran

- **01-accueil-1** : compris immédiatement. Le sous-titre « 28.6% of cars failed their first MOT test in 2023 » m'interroge déjà : 2023 ? On est fin 2026. Le pré-remplissage Ford Focus est rassurant (on voit ce que ça donne).
- **01-accueil-suite1** : la phrase en gras « A rate describes these cars as a group, not your car… » est utile et honnête. Les raisons « lamps, reflectors and electrical equipment 47.3%, suspension 34.5%, tyres 23.9% » : compris. Le tableau par année avec la ligne 2015 surlignée : très lisible. Petite hésitation : « FAILED » et « ALL CARS » sont tous deux des taux d'échec, l'en-tête « ALL CARS » seul ne dit pas que c'est un pourcentage d'échec.
- **01-accueil-suite2** : la note grise « a pass after a repair made during the test counts as a failure » : je ne comprends pas tout de suite, mais ça ne gêne pas. Puis le paragraphe : « a car at its first MOT, three years old, failed 12.3% » — là ça coince : le titre disait que 28.6% ont raté leur « first MOT test ». Laquelle des deux ? Lien « Show the whole paragraph » alors que la page continue de toute façon en texte long juste en dessous : le repli ne sert à rien visuellement.
- **01-accueil-suite3 à suite6** : méthodologie. Je survole. « 32,769,477 first MOT tests » (suite2) puis « 32,797,008 first tests » (suite5) : deux chiffres différents pour la même chose, ça m'inquiète sur la fiabilité. « The limit is the date: the 2023 file is the most recent DVSA has published » : enfin l'explication de 2023, mais elle est enterrée au 6e écran.
- **01-accueil-suite7** : le tableau trimestriel jusqu'à « April to June 2026 26.8% » rassure sur la fraîcheur. « Age is the first factor » : clair et intéressant.
- **01-accueil-suite8 à suite11** : liste des 20 modèles les plus testés. Lisible en cartes, mais « Ratio at equal age » n'est expliqué qu'une ligne au-dessus de façon technique (« Ratio below 1: fewer failures than cars of the same age »). Je bute sur « Mini Mini » (37.6% d'échec mais ratio 0.93, « mieux que la moyenne ») face au Nissan Juke (30.6% mais ratio 1.21, « pire ») : contre-intuitif sans explication à cet endroit. Aucune carte n'est cliquable visiblement : je voudrais taper sur « Ford Fiesta » pour ouvrir sa page.
- **01-accueil-suite12** : « What fails cars at the MOT » : utile (pneu sous 1.6 mm, ampoule, ressort cassé). Les liens « most common failures page » et « checklist page » sont bien placés.
- **02-menu-1** : menu clair : « Failure rates », « Cost, dates and retests » (replié), « By make » avec 10 marques. Rien à redire, sauf que le prix/échéance promis par Google est caché dans une rubrique fermée.
- **03-en-about-1 à suite4** : rassurant : qui publie (Radif Partners), pas d'abonnement, « We are not DVSA… We cannot… tell you whether your own car will pass ». Honnête. Mais « The parameter file cites 11 official pages » et « The site has 46 indexed pages, listed in the footer » : jargon de fabricant, pas de conducteur.
- **04-en-audi-a3-1 à suite2** : page modèle = même outil pré-réglé sur A3 2015, « 17.8% … 6.7 points lower ». Compris. Paragraphe : « 25.8% of the 410,439 Audi A3s… against 28.6% for all cars » : clair.
- **04-en-audi-a3-suite3 à suite6** : « Audi A3 MOT failure rate by age » répète, en cartes, exactement le tableau que je viens de voir dans l'outil (mêmes chiffres 2020 à 2009, plus 2008 et 2007). Trois écrans de défilement pour rien de nouveau ; j'aurais décroché ici. « Petrol and diesel A3s » : intéressant mais « Split ball joint dust covers and driveshaft boots » est technique.
- **05-en-audi-a4-1 à suite6** : même schéma. « so this model was about the same as the average car of its age » pour 20.2% contre 21.4% : bien formulé. Le paragraphe dit « at or below the national line for every registration year from 2001 to 2020 » mais l'outil ne propose que 2009-2020 et la section suivante dit « at nearly every age » : petite incohérence. Encore la répétition tableau / cartes.
- **06-en-audi-1 à suite6** : page marque, mais l'outil est pré-rempli sur… Audi A3 2015, identique à la page 04 : j'ai l'impression d'être revenu(e) sur la même page. Le classement « Audi models ranked at equal age » met l'A8 à 0.44 et le Q2 à 9.4% / 0.63 au même niveau que l'A7 à 15.7% / 0.63 : je ne comprends pas comment deux taux si différents donnent le même ratio. Le tableau par année saute des années (2020, 2018, 2015, 2013, 2011…) : où est 2019 ? 2016 ?
- **07-en-bmw-3-series-1 à suite6** : même schéma, pré-réglé sur 2013 cette fois. « rank 30 of 148 » : compris. « DVSA records some 3 Series under the engine variant, such as 320 or 330, which appear as separate models in the checker » : si j'ai une 320d, mon chiffre est-il sous « 3 Series » ou « 320 » ? Doute.
- **08-en-bmw-1 à suite6** : outil pré-réglé sur 3 Series 2015, encore. Le classement mélange « 530 », « 520 », « 525 », « 5 Series », « 435 », « 430 », « M3 »… l'explication vient seulement après la liste. Confus pour qui ne connaît pas les codes BMW.
- **09-en-cars-least-likely-1 à suite6** : la page la plus « fun » : on compare deux voitures (Yaris 2015 vs Corsa 2015). Mais le résultat de la comparaison tient en une ligne discrète « Vauxhall Corsa, 2015: 31.0% of 88,962 tests » sous le gros 18.0% de la Yaris : pas de visuel côte à côte, pas de « la Yaris rate 13 points de moins que la Corsa ». Le classement des 20 est clair, mais le libellé change : « Raw rate » ici, « Failed » ailleurs.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Outil Make / Model / Year (accueil et pages) | Oui, en haut | Oui | Oui, c'est la réponse | 5 |
| Comparaison « All cars aged X » dans le bloc vert | Oui | Oui | Oui | 5 |
| Raisons d'échec du modèle (lamps, suspension…) | Oui | Oui | Oui, pour préparer le test | 4 |
| Lien « Every age and failure reason for the … → » | Oui | Oui | Oui | 4 |
| Tableau par année de l'outil | Oui | Oui (ligne surlignée) | Oui | 4 |
| « Ratio at equal age » (listes et classements) | Oui | Non sans effort | Moyen | 2 |
| Comparateur deux modèles (page 09) | Oui | À moitié | Oui, mais résultat trop discret | 3 |
| Classement « 20 popular cars least likely to fail » | Oui | Oui pour l'ordre, pas pour le ratio | Oui (achat d'occasion) | 3 |
| Prix du MOT / date d'échéance (promis par Google) | Non (menu replié) | – | – | 1 |
| « Show the whole paragraph » | Oui | Oui | Faible (le texte long suit de toute façon) | 2 |
| Menu ☰ | Oui | Oui | Oui | 4 |

## 5. Enchaînement et navigation

- Fil d'Ariane « Home / Audi A3 » présent partout : bien.
- Chaque page modèle et marque recommence par le même outil, pré-réglé sur un exemple souvent identique (Audi A3 2015 sur la page A3 et sur la page Audi ; 3 Series sur la page 3 Series et sur la page BMW) : impression de tourner en rond.
- Les listes de modèles (accueil, pages marque, classement) ne semblent pas cliquables : on voit « Ford Fiesta », « A8 », « Audi Q2 » sans pouvoir y aller d'un tap.
- Pages très longues : après l'outil, 4 à 10 écrans de texte et de cartes qui répètent le tableau. Sur mobile, je ne vois pas de raccourci vers « ce qui fait échouer ma voiture » ni vers le prix/la date.
- Les chiffres sont cohérents d'une page à l'autre (A3 25.8% / 410,439 identiques sur l'accueil, la page A3, la page Audi), sauf le total national (32,769,477 vs 32,797,008).

## 6. Difficultés classées

1. **« first MOT test » a deux sens** (01-accueil-1 et 01-accueil-suite2). Vécu : le titre dit « 28.6% of cars failed their first MOT test », puis « a car at its first MOT, three years old, failed 12.3% ». Je crois d'abord que « first MOT » = le premier MOT de la vie de la voiture (à 3 ans), donc 28.6% me paraît faux. Recommandation : ne plus écrire « first MOT test » pour le premier passage de l'année. Texte : « 28.6% of cars failed their MOT at the first attempt in 2023 (retests not counted). » et, dans le bloc vert, « Ford Focus first registered in 2015: failed the MOT at the first attempt ».
2. **Données de 2023 sans explication visible en haut** (01-accueil-1, toutes les pages modèle). Vécu : on est en novembre 2026, je lis « in 2023 » partout et je me demande si le site est abandonné ; l'explication est au 6e écran. Recommandation : une ligne sous le résultat. Texte : « 2023 is the latest year DVSA has published test by test. The national rate has barely moved since: 26.8% in April–June 2026. »
3. **Prix et date du MOT promis par Google, introuvables** (02-menu-1). Vécu : « fee and due date » dans la description, mais rien sur l'accueil ; seule une rubrique repliée « Cost, dates and retests ». Recommandation : un encart court sous l'outil. Texte : « MOT fee: up to £54.85 · Due: 3 years after first registration, then every year · Check your date → » (montant à vérifier par l'éditeur), ou ouvrir par défaut la rubrique du menu.
4. **« Ratio at equal age » incompris** (01-accueil-suite8, 06-suite3, 08-suite3, 09-suite3). Vécu : la Mini à 37.6% d'échec est « meilleure » (0.93) que le Juke à 30.6% (1.21) ; Q2 9.4% et A7 15.7% ont le même 0.63. Je n'y crois pas. Recommandation : remplacer le chiffre par une phrase. Texte : « vs cars the same age: 7% fewer failures » / « 21% more failures », avec un code couleur vert/rouge.
5. **Tableau répété en cartes** (04-suite3 à suite6, 05-suite3 à suite6, 07-suite3 à suite6). Vécu : trois écrans de défilement pour relire les mêmes chiffres que l'outil. Recommandation : supprimer la section « … failure rate by age » en cartes, ou la replier (« Show 2007–2008 and ages ») en ne gardant que les années absentes de l'outil.
6. **Comparateur qui ne compare pas visuellement** (09-suite1). Vécu : le gros chiffre ne concerne que la Yaris ; la Corsa est une ligne en petit. Recommandation : deux chiffres côte à côte de même taille et une phrase-verdict. Texte : « Toyota Yaris 2015: 18.0% · Vauxhall Corsa 2015: 31.0% — the Yaris failed 13 points less often. »
7. **Modèles BMW par code moteur** (07-suite6, 08-suite3 à suite6). Vécu : j'ai une 320d, je ne sais pas si choisir « 3 Series » ou « 320 ». Recommandation : afficher l'explication avant la liste et dans le menu déroulant. Texte : « Own a 320d or 330e? DVSA files some cars under the engine code: try both "3 Series" and "320". »
8. **Jargon et incohérences de détail** (01-accueil-suite2/suite5, 03-en-about-suite2/suite3, 06-suite6). Vécu : 32,769,477 vs 32,797,008 tests ; « The parameter file cites 11 official pages » ; « The site has 46 indexed pages » ; tableau Audi par année qui saute 2019, 2016, 2014… Recommandation : un seul total partout, supprimer les deux phrases de fabricant (texte : « Fees, due dates and exemptions come from 11 GOV.UK pages, read on 13 November 2026. »), et soit toutes les années, soit un titre « Selected years ».

## 7. À garder

- L'outil en haut, pré-rempli, avec un gros pourcentage lisible et la comparaison « All cars aged 8: 24.5%, so this model was 3.1 points lower than the average car of its age ».
- La phrase en gras « A rate describes these cars as a group, not your car: tyres, brakes and lights you check before the test change your own odds. » : honnête et utile.
- Les trois raisons d'échec par modèle avec pourcentages.
- La ligne de l'année choisie surlignée dans le tableau.
- « Nothing you choose is sent anywhere » et la page About (« We are not DVSA… », pas d'abonnement, pas de plaque) : très rassurant face aux sites qui vendent des rapports.
- Le menu ☰ bien rangé et le fil d'Ariane.
- La cohérence des chiffres d'un modèle d'une page à l'autre.

## 8. Notes

Clarté : 7/10
Facilité : 7/10
Utilité : 8/10
