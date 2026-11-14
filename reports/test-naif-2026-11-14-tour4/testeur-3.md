# Test naïf du 2026-11-14 (tour4), testeur 3 : motfailurerates.co.uk
**Persona :** Britannique de 61 ans, se sert de son téléphone pour WhatsApp et la météo, lit lentement, se méfie des sites qui demandent des données, ne comprend pas les sigles. Elle a cliqué sur le résultat Google « MOT Failure Rate by Make, Model and Age: Will My Car Pass? » parce qu'elle a cette question pour elle-même ou un proche.

## 1. Concept

**Après 5 s (01-accueil-1) :** « C'est un site qui me dit combien de voitures comme la mienne ratent le MOT. » Le titre « MOT failure rate by make, model and age » et les trois menus Make / Model / Year correspondent exactement à ce que Google promettait. Pas de plaque d'immatriculation demandée, pas d'e-mail : elle se détend.

**Après 2 min :** elle a compris qu'on choisit marque, modèle, année, et qu'un pourcentage dit si ce type de voiture rate plus ou moins que la moyenne ; qu'il y a 7 contrôles gratuits à faire avant le test ; le prix maximum (£54.85) et des liens « When is my MOT due? ». Mais elle n'est plus sûre de **quel chiffre est le sien** : on lui en montre deux (36.4 % en gros, 21.4 % plus petit), avec deux verdicts opposés (« Worse than average » puis « Better than average »).

- Clair ? Oui pour l'idée, non pour la lecture du résultat.
- Pour qui ? Un conducteur en Angleterre/Écosse/Pays de Galles qui va passer le MOT (dit clairement dans About).
- Bénéfice concret : savoir si son modèle est fragile, sur quoi il casse (lampes, suspension, pneus), et quoi vérifier gratuitement avant le test. Le bouton « 7 free checks before your MOT » est le vrai bénéfice pour elle.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : l'idée oui, le résultat non sans effort.** Ça décroche à trois endroits :
1. Le double chiffre de l'encadré résultat : « 36.4% of Focus cars aged 11 (registered in 2012) » alors qu'elle a choisi 2015. « Pourquoi 2012 ? Ma voiture est de 2015. » Puis « Your own year, 2015: at 8, the age it was in 2023 — 21.4% ». Elle doit comprendre que les données datent de 2023 et qu'on lui montre des voitures « aussi vieilles que la sienne aujourd'hui ». C'est trop abstrait pour elle.
2. Les listes « All cars the same age failed » : la notion de « comparé à des voitures du même âge » revient partout avec des phrases longues (« a model with a high percentage can still do better than average when most of its cars are old… »).
3. Les sigles et termes techniques non expliqués : « DfT », « Open Government Licence v3.0 », « class 4 », « DVSA/MOT/01 », et sur la page BMW des noms de modèles comme « 730 », « 435 », « M3 », plus l'aide « BMW 320d? Try 320, then 3 Series. ».

## 3. Parcours écran par écran

- **01-accueil-1** — Compris. Titre clair, chapeau « 28.6% of cars failed their MOT at the first attempt in 2023 ». Phrase utile : « of every 100 MOT tests of these cars in 2023, how many failed at the first attempt ». « As on the V5C logbook » : elle connaît le logbook, ça la rassure. Petite gêne : « 2015 (11 years old now) » — elle voit déjà Ford Focus 2015 rempli et peut croire que c'est un exemple figé, pas un menu qu'elle doit changer.
- **01-accueil-suite1** — **Coince.** « 36.4% » en énorme, mais pour des voitures « registered in 2012 » et « Worse than average ». Juste dessous « Your own year, 2015 … 21.4% … Better than average ». Elle ne sait pas lequel retenir ; le plus gros chiffre n'est pas celui de son année. La phrase en gras « A rate describes these cars as a group: your own checks before the test change your odds » est rassurante. Bouton « 7 free checks before your MOT → » : très clair. « Most frequent reasons … lamps, reflectors and electrical equipment 47.3% » : compris (ses lampes). « MOT fee: up to £54.85 » : compris.
- **01-accueil-suite2** — Tableau par année : lisible, sa ligne 2015 est surlignée, ça l'aide. Mais 2012 est aussi surlignée sans qu'elle comprenne pourquoi. Colonne « ALL CARS FAILED » comprise à peu près. « a fix made during the test still counts as a fail » : intéressant. « Nothing you choose is sent anywhere » : rassurant.
- **01-accueil-suite3** — Gros paragraphe chiffré (« 32,769,477 first-attempt MOT tests… ») : elle saute. « Show the whole paragraph » : elle ne clique pas. Ligne de sources « DVSA anonymised MOT results… Radif Partners » : ne lui dit rien.
- **01-accueil-suite4** — Encore un texte de méthode puis « How the rates are counted, and why this file (method) » : elle ignore. La liste des périodes (« April 2023 to March 2024 … 28.6% ») avec « (DVSA table DVSA/MOT/01) » : jargon. « Age is the first factor » : titre clair.
- **01-accueil-suite5** — « Nothing moves the failure rate as much as the age of the car » : compris. Le paragraphe « That is why a model's raw rate can mislead… » : décroche, trop long.
- **01-accueil-suite6 à suite9** — Liste des 20 modèles les plus testés : elle cherche sa voiture, c'est utile. Mais trois chiffres par modèle sur des lignes séparées, elle doit faire défiler 4 écrans. Incohérence : « Ford Transit », « Mini », « Volkswagen Transporter » ne sont pas soulignés (pas de lien) alors que les autres oui — elle tape dessus et rien ne se passe.
- **01-accueil-suite9/suite10** — « What fails cars at the MOT » : compris dans l'ensemble ; « tyre tread below 1.6 mm », « broken coil spring » parlants. « A failed test carries 2.39 defects on average » : bizarre pour elle.
- **01-accueil-suite11** — « Fuel, mileage and region » : diesel / essence / hybride compris ; « Twickenham postcode area to 34.2% in Dundee » : amusant. « Cost, due date and retests » : très utile — £54.85 plafond, « up to a month (minus a day) early », « Driving without a valid MOT can cost up to £1,000 », retest gratuit sous 10 jours ouvrés. C'est ce qu'elle veut savoir, mais c'est très bas dans la page.
- **01-accueil-suite12** — « Before the test: seven checks that cost nothing » : le meilleur bloc pour elle. Liste numérotée, phrases simples (« Walk round the car with every light on »). « engine management lamp » : elle comprend « voyant moteur ».
- **02-menu-1 / suite1** — Menu clair : « Failure rates », « Cost, dates and retests », « By make », « 7 free checks before your MOT ». Elle comprend. « Cost, dates and retests » est replié : elle ne voit pas ce qu'il contient. Seulement 10 marques : si elle a une Kia ou une Fiat, elle ne la voit pas dans le menu.
- **03-en-about-1 à suite4** — Rassurant : « We are not DVSA… We cannot book an MOT, see your car's history… », « It is free and needs no account or email ». « Northern Ireland … is not covered » : utile. En revanche « Department for Transport (DfT) », « Open Government Licence v3.0 », « Radif Partners » : ne l'aident pas. « In November 2026, the sites that answer "check MOT" mostly ask for a number plate and then sell… » : elle apprécie la franchise.
- **04-en-audi-a3-1 à suite6** — Même outil prérempli Audi A3 2015. Même problème du double chiffre : « 31.0% … aged 11 (registered in 2012) » puis « Your own year, 2015 … 17.8% ». Liste des pannes A3 très concrète : « Coil spring: fractured or broken », « Brake pads: less than 1.5 mm thick ». Mais certaines formulations sont du jargon officiel : « Linkage ball joint dust cover: ball joint dust cover no longer prevents the ingress of dirt », « Headlamp aim: projected beam image is obviously incorrect ». « Petrol and diesel A3s » : compris.
- **05-en-audi-a4-1 à suite6** — Idem, année par défaut 2016 (et non 2015 comme ailleurs : léger flottement). « High mileage, low failure » : titre parlant. « 103,065 on average at the test » : compris (miles). « Pins and bushes: pin or bush excessively worn » : incompris.
- **06-en-audi-1 à suite6** — Page marque : « Opens on the A3: choose yours. » — bonne aide, elle comprend qu'elle doit changer le modèle. Bloc résultat identique à la page A3 (elle a l'impression de revoir la même page). « Audi models ranked at equal age » : elle ne comprend pas pourquoi l'A8 à 14.1 % est en tête alors que le Q2 a 9.4 % plus bas (le classement « at equal age » lui échappe). Les modèles Q2, Q7, A8 ne sont pas cliquables, seuls A3 et A4 le sont.
- **07-en-bmw-3-series-1 à suite6** — « BMW 320d? Try 320, then 3 Series. » : incompris (« je ne sais pas si ma voiture est une 320d »). Année par défaut 2013 cette fois. Le reste suit le même modèle ; « tread under 1.6 mm, a defect DVSA classes as dangerous » : parlant. « Service brake (roller brake test): efficiency… » : jargon.
- **08-en-bmw-1 à suite6** — Page marque : la liste « M3, 730, X6, Z4, 530, 435, M4, i3, 640, 430, 2 Series, 520, X5, X1 » la perd complètement : ce ne sont pas des noms qu'elle connaît, et l'ordre ne suit pas le pourcentage. « BMW has the best record at equal age of every make » : phrase qu'elle comprend et retient.
- **09-en-cars-least-likely-to-fail-mot-1 à suite6** — Comparateur de deux voitures : bonne idée (« Compare with: make / model »). Mais elle choisit 2015 et le résultat compare « Vauxhall Corsa, registered 2012 » — « je n'ai jamais choisi 2012 ! » Puis « The Yaris failed less often than the Corsa: 30.2% against 41.7% » : clair. Le top 20 commence par « Audi Q2 9.4% » puis « Volkswagen T-Roc 9.2% » (plus bas mais classé deuxième) : l'explication existe mais elle ne la lit pas en entier. « cars and light vans (class 4) » : sigle/notion inconnue.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Outil marque/modèle/année (accueil et pages modèle) | Oui, tout de suite | Saisie oui ; lecture du résultat non (deux chiffres, années 2012/2015) | Oui | 3/5 |
| Tableau par année d'immatriculation | Oui | Oui pour sa ligne surlignée, non pour la 2e ligne surlignée | Moyen | 3/5 |
| « 7 free checks before your MOT » (bouton + liste) | Oui (bouton, menu, liste en bas d'accueil) | Oui | Très | 5/5 |
| Raisons d'échec par modèle (groupes + items) | Oui | Groupes oui ; items en jargon officiel partiellement | Oui | 4/5 |
| Prix / date / retest | Oui mais tard (accueil suite11, liens dans l'encadré) | Oui | Très | 3/5 |
| Comparateur deux modèles (09) | Oui | Partiellement (2012 imposé) | Oui | 3/5 |
| Classement des modèles « at equal age » | Oui | Non (ordre contre-intuitif) | Faible pour elle | 2/5 |
| Menu ☰ | Oui | Oui | Oui | 4/5 |
| Page About | Via menu/pied | Oui | Rassure | 4/5 |

## 5. Enchaînement et navigation

- Le fil d'Ariane « Home / Audi A3 » est clair et le menu ☰ est simple.
- Chaque page modèle reprend le même outil : rassurant (même endroit, même logique), mais les pages marque (Audi, BMW) affichent le même bloc que la page modèle, d'où impression de doublon.
- L'année par défaut change (2015, 2016, 2013, 2015) d'une page à l'autre sans raison visible.
- Dans les listes, certains noms sont des liens (Ford Fiesta, Audi A3) et d'autres pas (Ford Transit, Mini, Volkswagen Transporter, Q2, A8…) : elle tape dessus pour rien.
- Les informations les plus pratiques (prix, date, retest, 7 contrôles) sont tout en bas de la longue page d'accueil, après des écrans de statistiques.

## 6. Difficultés classées

1. **Deux chiffres pour une seule voiture, avec verdicts opposés** (01-accueil-suite1, 04, 05, 06, 07, 08, 09). Vécu : « J'ai une Focus 2015. Le gros chiffre dit 36.4 %, pire que la moyenne, pour une voiture de 2012 ; le petit dit 21.4 %, mieux que la moyenne. Lequel est le mien ? » Recommandation : mettre en gros le chiffre qui répond à sa question, et une seule phrase de verdict ; présenter l'autre comme une indication secondaire. Texte proposé : « **Your 2015 Ford Focus, now 11 years old: about 36 in 100 Focus cars this age failed** — based on Focus cars that were 11 in 2023. When your car was 8, in 2023, it did better than average: 21.4% against 24.5%. » Ou plus simple : titre « What to expect at your next MOT » au-dessus du gros chiffre et « How your own cars did in 2023 » au-dessus du petit.
2. **« registered in 2012 » alors qu'elle a choisi 2015** (tous les encadrés, et comparateur 09 « Vauxhall Corsa, registered 2012 »). Recommandation : dire pourquoi en mots simples. Texte : « The latest full figures are from 2023. To show how a car as old as yours (11) does, we use cars registered in 2012, which were 11 in 2023. »
3. **Infos pratiques trop bas** (01-accueil-suite11/12). Recommandation : remonter juste après l'outil un bloc court « Cost £54.85 max · Due by the anniversary, up to a month early · Free retest within 10 working days · 7 free checks » avec liens.
4. **Classements « at equal age » contre-intuitifs** (06-suite3, 08-suite4, 09-suite5 : T-Roc 9.2 % classé après Q2 9.4 %). Recommandation : ajouter une colonne/une ligne « Difference: 5.5 points better than cars its age » et trier visiblement par cet écart. Texte : « Better than cars its age by 5.5 points ».
5. **Jargon et sigles** : « DfT », « Open Government Licence v3.0 », « DVSA/MOT/01 », « class 4 », « ingress of dirt », « projected beam image is obviously incorrect », « pin or bush excessively worn », « roller brake test ». Recommandation : sous chaque item officiel, une traduction simple. Ex. « Headlamp aim: projected beam image is obviously incorrect » → « Headlight pointing the wrong way ». « ball joint dust cover no longer prevents the ingress of dirt » → « Split rubber cover on a suspension joint ». « class 4 » → « ordinary cars and small vans ».
6. **Noms de modèles BMW et l'aide « BMW 320d? Try 320, then 3 Series. »** (07-1, 08-1, 08-suite3/5). Recommandation : texte « Not sure of your model? It is written on your V5C logbook under "Model". A BMW 320d is a 3 Series: choose "3 Series" first, or "320" if you don't find your year. »
7. **Liens incohérents dans les listes** (01-accueil-suite8/9 : Ford Transit, Mini, VW Transporter ; 06/08 : Q2, A8, M3…). Recommandation : soit tout rendre cliquable vers l'outil prérempli, soit afficher « (no page yet: use the checker above) ».
8. **Pavés de texte et tableaux répétés** (accueil suite3 à suite5 ; pages modèle). Elle lit lentement et décroche. Recommandation : raccourcir le premier paragraphe visible à deux phrases et laisser le reste dans « Show the whole paragraph » ; replier la liste des 20 modèles derrière « See the 20 most tested cars ».

## 7. À garder

- Le titre et les trois menus Make / Model / Year visibles dès le premier écran.
- La phrase « of every 100 MOT tests of these cars in 2023, how many failed at the first attempt, before any repair ».
- « As on the V5C logbook » (elle sait où regarder).
- « A rate describes these cars as a group: your own checks before the test change your odds. » — rassurant et honnête.
- Le bouton « 7 free checks before your MOT → » et la liste numérotée en phrases simples.
- « Nothing you choose is sent anywhere », « It is free and needs no account or email », « We are not DVSA… »: la méfiance tombe.
- La ligne surlignée de son année dans le tableau.
- Le bloc coût/date/retest (« capped at £54.85 », « up to £1,000 » sans MOT valide, retest gratuit).
- « Opens on the A3: choose yours. » sur les pages marque.

## 8. Notes

Clarté : 6/10
Facilité : 7/10
Utilité : 8/10
