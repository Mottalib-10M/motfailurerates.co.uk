# Test naïf du 2026-11-14 (tour4), testeur 2 : motfailurerates.co.uk
**Persona :** Britannique de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat « MOT Failure Rate by Make, Model and Age: Will My Car Pass? » parce qu'il/elle a cette question, et découvre le site sur son téléphone.

## 1. Concept

**Après 5 s :** « Un site qui me dit quel pourcentage de voitures comme la mienne rate le MOT. » Le titre « MOT failure rate by make, model and age » correspond mot pour mot à Google, et trois menus (Make / Model / Year first registered) déjà remplis sont visibles sur le premier écran. C'est clair et ça confirme que je suis au bon endroit.

**Après 2 min :** « Il donne le taux d'échec 2023 de ma marque/modèle/année, le compare à toutes les voitures du même âge, dit ce qui fait échouer ce modèle (lampes, suspension, pneus), et me renvoie vers 7 vérifications gratuites, le prix (£54.85) et la date du MOT. » Aucun numéro de plaque demandé, rien à payer : ça rassure.

**Clair ?** Le principe oui. Le résultat, beaucoup moins (voir §2). **Pour qui ?** Quelqu'un dont le MOT approche, ou qui achète une occasion et veut savoir si le modèle est fragile. **Bénéfice concret :** savoir si mon modèle/année est au-dessus ou en dessous de la moyenne, et surtout quoi vérifier avant le contrôle. Le site dit honnêtement qu'il ne peut pas répondre à « will my car pass? » (« only a tester who inspects it can »), ce qui est juste mais un peu frustrant par rapport à la promesse du titre Google.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : le principe, oui ; le chiffre principal, non sans relire deux fois.**

Où ça décroche :
- **Le gros chiffre n'est pas celui de mon année.** J'ai une Focus 2015 ; le chiffre énorme est « 36.4% » … « of Focus cars aged 11 (registered in 2012) ». Le mien (« Your own year, 2015 ») est en dessous, plus petit : « 21.4% ». Je ne comprends pas pourquoi on me montre en grand une Focus de 2012 alors que j'ai choisi 2015.
- **Deux verdicts contradictoires dans la même boîte :** « Worse than average for its age » puis juste en dessous « Better than average for its age ». Alors ma voiture, c'est bien ou pas ? Une personne pressée lit « 36.4% … Worse than average » et repart inquiète, à tort.
- **Les données datent de 2023.** En novembre 2026, « 2023 » partout + « Latest national rate: 26.8% … April to June 2026 » juste à côté : je me demande si les chiffres modèle sont périmés, et je mélange les deux périodes.
- **Le classement « at equal age »** (BMW, Audi, voitures les moins défaillantes) place un modèle à 14.7 % avant un autre à 11.9 %. C'est expliqué, mais en un long paragraphe que personne ne lit sur mobile.

## 3. Parcours écran par écran

- **01-accueil-1.png** — Compris. Titre = ma recherche. Phrase d'intro dense (« Choose yours: the share of the same make, model and year that failed, against every car of that age ») mais les menus parlent d'eux-mêmes. « As on the V5C logbook » : OK pour un Britannique.
- **01-accueil-suite1.png** — **Coince.** « 36.4% » en énorme, « Worse than average », puis « Your own year, 2015: at 8, the age it was in 2023 — 21.4% — Better than average ». Je dois relire pour comprendre que le premier chiffre est une projection « ta voiture à l'âge qu'elle a maintenant », et le second la vraie donnée de mon année. Le bouton « 7 free checks before your MOT → » est bien visible et donne envie. « Most frequent reasons … lamps, reflectors and electrical equipment 47.3% » : utile.
- **01-accueil-suite2.png** — Tableau par année : lisible, mes deux lignes (2015 et 2012) surlignées, bien. La légende « In bold: your year, and 2012, cars as old in 2023 as yours is now » aide, mais arrive après la confusion. La colonne « ALL CARS FAILED » est un peu ambiguë (toutes les voitures de cette année d'immatriculation).
- **01-accueil-suite3.png** — Gros paragraphe statistique (« 32,769,477 first-attempt MOT tests… »). Je décroche. Le « Show the whole paragraph » aide à ne pas tout afficher.
- **01-accueil-suite4.png** — Taux national par période (28.6 % → 26.8 %) : compris, mais je ne vois pas à quoi ça me sert. « DVSA table DVSA/MOT/01 » : jargon inutile pour moi.
- **01-accueil-suite5.png** — « Age is the first factor » : texte long mais intéressant (les vieilles voitures encore sur la route sont bichonnées). Liens soulignés OK.
- **01-accueil-suite6 → suite9.png** — Liste des 20 modèles les plus testés, en cartes empilées : très long à faire défiler (≈4 écrans). Certains noms sont des liens (Ford Fiesta, Audi A3), d'autres non (« Ford Transit », « Mini », « Volkswagen Transporter » en noir) : je ne sais pas pourquoi je ne peux pas cliquer.
- **01-accueil-suite9/10.png** — « What fails cars at the MOT » : utile (pneu < 1.6 mm, lampe, ressort cassé). Bon texte.
- **01-accueil-suite11.png** — Carburant, kilométrage, région (Twickenham 17.1 % vs Dundee 34.2 %) : intéressant, donne envie de cliquer. Coût/date/retest : clair, l'amende « up to £1,000 » marque.
- **01-accueil-suite12.png** — « Before the test: seven checks that cost nothing » : la partie la plus actionnable, concrète. Compris.
- **02-menu-1.png / suite1** — Menu propre, en accordéon : « Failure rates », « Cost, dates and retests » (replié), « By make » (10 marques), « 7 free checks before your MOT ». Compris. Pas de recherche de modèle depuis le menu ; si ma marque n'est pas dans les 10, je dois revenir à l'accueil.
- **03-en-about-1 → suite4.png** — Compris et rassurant : Radif Partners, données DVSA, « We are not DVSA… », gratuit, pas de compte, rien ne quitte le navigateur, Irlande du Nord non couverte. Bonne page de confiance, mais je n'y serais jamais allé(e) seul(e).
- **04-en-audi-a3 (1 → suite6)** — Même outil, présélectionné sur A3. Même confusion « 31.0% (registered in 2012) » en grand / « 17.8% » mon année. Ensuite bonnes sections spécifiques : « Petrol and diesel A3s », « What fails an A3 at the MOT », liste des défauts (« Coil spring: fractured or broken 16,575 »). Libellés DVSA bruts (« no longer prevents the ingress of dirt ») un peu techniques mais compréhensibles.
- **05-en-audi-a4 (1 → suite6)** — Idem, cohérent. « High mileage, low failure » : intéressant. Le bloc « Show the years 2020 to 2007 in one table (the same figures as the checker above) » : pourquoi me proposer un doublon ?
- **06-en-audi (1 → suite6)** — Page marque : elle s'ouvre sur l'A3 (« Opens on the A3: choose yours. », bien signalé). Puis classement des modèles Audi « at equal age » : A8 en tête à 14.1 %, alors que Q2 est à 9.4 % plus bas. J'ai dû lire le paragraphe pour comprendre. Seuls A3 et A4 sont des liens.
- **07-en-bmw-3-series (1 → suite6)** — Astuce « BMW 320d? Try 320, then 3 Series. » : bonne idée mais en tout petit, facile à rater. Le reste comme les autres pages modèle, bien.
- **08-en-bmw (1 → suite6)** — Classement BMW par « 730 », « 435 », « 640 », « 520 »… Je ne sais pas si ma « 320d » est dedans ou dans « 3 Series ». Le classement M3 14.7 % avant i3 11.9 % me paraît faux à première vue.
- **09-en-cars-least-likely-to-fail-mot (1 → suite6)** — Outil de comparaison de deux modèles : la meilleure idée du site pour un acheteur. Mais le verdict « The Yaris failed less often than the Corsa: 30.2% against 41.7% » compare des voitures de 2012 alors que j'ai choisi 2015 : même problème d'âge. Classement des 20 : Q2 9.4 % avant T-Roc 9.2 %, encore le « ranked at equal age » à décoder.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Vérificateur marque/modèle/année (accueil et pages modèle) | Oui, immédiatement | Les menus oui ; le résultat à deux chiffres, mal | Oui | 3/5 |
| Tableau par année avec mes lignes surlignées | Oui | Oui après lecture de la légende | Oui | 4/5 |
| « Most frequent reasons » / « What fails an A3 » | Oui | Oui | Très | 4/5 |
| Bouton « 7 free checks before your MOT » | Oui, bouton vert foncé bien visible | Oui | Très | 5/5 |
| Liens « Cost and retests » · « When is my MOT due? » | Oui | Oui | Oui | 4/5 |
| Comparateur de deux modèles (Cars least likely to fail) | Seulement via le menu | Oui, sauf l'année comparée | Très, pour acheter | 3/5 |
| Classements « ranked at equal age » (marque, top 20) | Oui | Difficilement (ordre qui semble faux) | Moyen | 2/5 |
| Menu ☰ | Oui | Oui | Oui | 4/5 |
| Page About | Via menu/pied de page | Oui | Rassurant | 4/5 |

## 5. Enchaînement et navigation

Bon fil conducteur : chaque page modèle reprend le même outil, ce qui donne l'impression d'un site cohérent ; fil d'Ariane « Home / Audi A3 » présent ; le bouton « 7 free checks » revient partout. Points faibles : les pages sont très longues sur mobile (listes en cartes empilées de 4 lignes chacune), des noms de modèles cliquables et d'autres non sans raison apparente, et le bloc « Show the years 2020 to 2007 in one table (the same figures as the checker above) » fait doublon. La page marque Audi ressemble presque exactement à la page A3 en haut : j'ai cru avoir rechargé la même page.

## 6. Difficultés classées

1. **Le gros chiffre n'est pas celui de mon année, et les deux verdicts se contredisent** (01-accueil-suite1, 04, 05, 06, 07, 08, 09). Vécu : « 36.4% … Worse than average » puis « 21.4% … Better than average » : je ne sais pas quoi retenir, et je risque de partir inquiète à tort. Recommandation : mettre **en premier et en grand** le chiffre de mon année, puis l'estimation « à l'âge actuel » en second, plus petite, avec un intitulé explicite. Texte proposé : « **Your 2015 Focus: 21.4% failed** its MOT at 8 years old (2023 data). Better than the 24.5% for all 2015 cars. » puis « **Now it's 11:** Focus cars that were 11 in 2023 (registered 2012) failed 36.4%, against 34.4% for all 11-year-olds. »
2. **Données 2023 sans explication visible en haut** (01-accueil-1/suite1). Vécu : en 2026 je me demande si c'est périmé, et « Latest national rate … April to June 2026 » ajoute une deuxième période. Recommandation : une ligne sous les menus : « Model figures: 2023, the latest year DVSA publishes test by test. »
3. **Comparateur : le verdict compare des voitures de 2012 alors que j'ai choisi 2015** (09-suite1/2). Recommandation : comparer d'abord les deux modèles de l'année choisie. Texte : « Registered in 2015: Yaris 18.0% failed, Corsa X% — the Yaris did better. »
4. **Classements « at equal age » qui semblent dans le désordre** (06-suite4, 08-suite4, 09-suite5). Recommandation : afficher une colonne simple « vs same age » (« 17.7 points better ») qui justifie l'ordre, ou trier par défaut sur ce seul écart.
5. **Pages très longues en mobile** (01-accueil-suite6 à suite9, listes de défauts). Recommandation : afficher 5 lignes puis « Show all 20 models », et passer les cartes de 4 lignes en tableau compact à 3 colonnes.
6. **Modèles BMW par variante moteur** (07-1, 08-1/suite3). L'astuce « BMW 320d? Try 320, then 3 Series. » est minuscule. Recommandation : la mettre en taille normale juste sous le menu « Model » et grouper « 320, 330… → 3 Series » dans la liste.
7. **Liens incohérents** : « Ford Transit », « Mini », « Volkswagen Transporter », A8/Q2… non cliquables (01-accueil-suite8/9, 06-suite4). Recommandation : soit tous cliquables, soit une petite mention « (no page yet) ».
8. **Doublon « Show the years 2020 to 2007 in one table (the same figures as the checker above) »** (04-suite3, 05-suite3, 07-suite3). Recommandation : le supprimer ou le renommer « Older years (2008 to 2007…) » s'il apporte des années absentes du tableau.

## 7. À garder

- Le titre identique à la recherche Google et les menus pré-remplis visibles dès le premier écran.
- « No number plate is needed » / « Nothing you choose is sent anywhere » : énorme différence avec les sites qui vendent des rapports.
- Le bouton « 7 free checks before your MOT → » et la liste des 7 vérifications concrètes.
- « Most frequent reasons when a Focus failed » et les sections « What fails an A3 at the MOT ».
- Le tableau par année avec mes deux lignes surlignées.
- La page About honnête (« We cannot … tell you whether your own car will pass »).
- Les faits marquants : Twickenham vs Dundee, amende jusqu'à £1,000, retest gratuit sous 10 jours ouvrés.

## 8. Notes

Clarté : 6/10
Facilité : 7/10
Utilité : 8/10
