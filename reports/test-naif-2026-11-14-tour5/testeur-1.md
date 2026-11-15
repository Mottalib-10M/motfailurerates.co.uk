# Test naïf du 2026-11-14 (tour5), testeur 1 : motfailurerates.co.uk
**Persona :** Britannique de 45 ans, salarié(e), à l'aise avec son téléphone, aucune connaissance particulière du sujet, ne lit pas les longs paragraphes. Il/elle a tapé sa question dans Google (« Will my car pass? ») et a cliqué sur le résultat « MOT Failure Rate by Make, Model and Age: Will My Car Pass? » parce qu'il/elle a vraiment cette question.

## 1. Concept

**Après 5 s (01-accueil-1) :** « C'est un site qui me dit quelle part des voitures comme la mienne ratent le MOT. » Le titre « MOT failure rate by make, model and age » colle exactement au résultat Google, et les trois listes « Make / Model / Year first registered » sont déjà là, sans numéro de plaque à taper. Je comprends que je choisis ma voiture et que j'obtiens un pourcentage. Clair.

**Après 2 min :** c'est un outil statistique gratuit, basé sur les résultats officiels du DVSA (2023), qui me donne : le taux d'échec de mon modèle et de mon année, comparé à « all cars the same age », ce que ça donnerait à l'âge qu'a ma voiture aujourd'hui, les trois causes d'échec les plus fréquentes pour mon modèle, le prix maximum (« up to £54.85 ») et un bouton « 7 free checks before your MOT ». Ça ne me dit pas si MA voiture passera : le site le dit lui-même (« A rate describes these cars as a group: your own checks before the test change your odds. »). C'est honnête.

**Pour qui :** n'importe quel conducteur en Grande-Bretagne qui a un MOT à passer, ou quelqu'un qui achète une voiture d'occasion. **Bénéfice concret :** savoir si mon modèle est fragile pour son âge, sur quoi il casse (lampes, suspension, pneus) et donc quoi vérifier avant d'y aller. La liste des 7 vérifications gratuites est le vrai gain pratique.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'essentiel (le grand pourcentage + « Better than average for its age »), mais ça décroche dès qu'on lit au-delà de l'encadré vert.**

Où ça décroche :
- Le gros chiffre ne répond pas à ma question. « Will my car pass? » → le site m'affiche en énorme **21.4%**, mais c'est ma Focus « when it was 8 years old » en 2023. Le chiffre qui me concerne pour mon prochain MOT (**36.4%**) est noyé dans un paragraphe de 6 lignes en dessous.
- Trop de pourcentages différents pour « tout le monde » : 28.6 % (2023), 26.8 % (« Latest national rate »), 24.5 % (même âge), 31.1 % (toutes années de la Focus)… Sur l'accueil, je ne sais plus lequel est « le » taux national.
- Les classements « ranked at equal age » (pages marque et « Cars least likely to fail ») : la Q2 à 9.4 % arrive après l'A8 à 14.1 % et l'A7 à 15.7 %. Sur la page « least likely », c'est expliqué ; sur la page Audi, l'explication est dans un petit paragraphe gris que je ne lis pas, et j'ai cru à une erreur.
- Le vocabulaire DVSA brut dans les tableaux de défauts : « ball joint dust cover no longer prevents the ingress of dirt », « Pins and bushes: pin or bush excessively worn », « Service brake (roller brake test): efficiency below requirements ». Je ne sais pas ce que c'est ni si je peux le vérifier moi-même.

## 3. Parcours écran par écran

- **01-accueil-1** : compris. Titre, phrase d'accroche, trois menus déroulants préremplis (Ford Focus 2015). « As on the V5C logbook » m'aide à trouver l'année. Hésitation : la Focus 2015 est un exemple, rien ne me dit « exemple » sur l'accueil (les pages marque, elles, disent « Opens on the A3: choose yours. »).
- **01-accueil-suite1** : compris pour le chiffre et « Better than average for its age », très rassurant. Coince sur « At 11, the age it is now… the closest guide is Focus cars that were already 11 then (registered in 2012): 36.4% » : il faut relire deux fois pour comprendre que c'est LE chiffre pour mon prochain MOT. Le bouton « 7 free checks before your MOT → » saute aux yeux, très bien. « Latest national rate: 26.8% » à côté du « 28.6% » du chapeau : lequel croire ?
- **01-accueil-suite2** : tableau par année, compris (les deux lignes en gras sont expliquées). Lisible sur téléphone.
- **01-accueil-suite3** : « Nothing you choose is sent anywhere » rassure. Puis gros paragraphe avec « 32,769,477 first-attempt MOT tests » : je décroche, mais « Show the whole paragraph » montre que c'est replié, OK.
- **01-accueil-suite4** : « How the rates are counted, and why this file (method) » replié, bien. Tableau par période (28.6 → 26.8 %) compris : les échecs baissent un peu.
- **01-accueil-suite5** : « Age is the first factor » : long texte. Le message « a model's raw rate can mislead » est important mais je ne lis pas un bloc de 14 lignes.
- **01-accueil-suite6 à suite9** : la liste des 20 modèles les plus testés, compris (Tests / Failed / All cars the same age failed). Coince : certains noms sont des liens soulignés (Ford Fiesta, Vauxhall Corsa…), d'autres non (« Ford Transit », « Mini », « Volkswagen Transporter ») ; je ne sais pas pourquoi. La Renault Clio à 44.4 % fait peur, utile.
- **01-accueil-suite10** : « What fails cars at the MOT », compris : pneus sous 1.6 mm, lampe qui ne marche pas, ressort cassé. Concret.
- **01-accueil-suite11** : « Cost, due date and retests » : utile (plafond £54.85, contre-visite gratuite sous conditions, amende jusqu'à £1,000), mais tout est dans un seul paragraphe très dense.
- **01-accueil-suite12** : « Before the test: seven checks that cost nothing » : parfait, liste numérotée, faisable par moi-même. C'est ce qui me sert le plus.
- **02-menu-1 / 02-menu-suite1** : clair. « Failure rates », « Cost, dates and retests », « By make », « 7 free checks before your MOT ». Rien ne coince. Pas de lien « Home » visible dans le menu, mais le logo suffit.
- **03-en-about-1 à suite4** : compris : société indépendante (Radif Partners), données DVSA, gratuit, pas de compte. « What we are not » est très rassurant (pas le DVSA, ne réserve pas de MOT, ne voit pas l'historique de ma voiture). « How the site is paid for » : honnête.
- **04-en-audi-a3-1 à suite6** : même outil que l'accueil, compris tout de suite. 17.8 % « Better than average ». Coince sur le tableau des défauts : « Linkage ball joint dust cover: ball joint dust cover no longer prevents the ingress of dirt » est du jargon de contrôleur.
- **05-en-audi-a4-1 à suite6** : compris. Petite incohérence : le texte dit « at or below the national line for every registration year from 2001 to 2020 », mais le tableau s'arrête à 2009 et le bloc replié dit « Show the years 2020 to 2007 ». Où sont 2001 à 2006 ? « High mileage, low failure » : intéressant et clair.
- **06-en-audi-1 à suite6** : compris en haut (« Opens on the A3: choose yours. », très bien). Coince sur « Audi models ranked at equal age » : A8 (14.1 %), A7 (15.7 %), puis Q2 (9.4 %)… et l'A1 (21.8 %) en dernier alors que l'A4 est à 27.6 %. Sans lire le paragraphe gris, l'ordre paraît faux. Les modèles A8, A7, Q2… ne sont pas des liens, seuls A3 et A4 le sont.
- **07-en-bmw-3-series-1 à suite6** : compris. Coince sur « BMW 320d? Try 320, then 3 Series. » : je ne comprends pas s'il faut changer de modèle dans la liste. Le paragraphe « DVSA records some 3 Series under the engine variant, such as 320 or 330 » l'explique plus bas, trop tard. Le défaut « Washers: provides insufficient washer liquid » m'apprend qu'on peut rater pour du lave-glace : utile.
- **08-en-bmw-1 à suite6** : compris en haut. Le classement « BMW models ranked at equal age » liste « M3, 730, X6, Z4, 530, 435, M4, i3, 640, 430, 2 Series, 520… » : pour quelqu'un qui a une « Série 3 », c'est une liste de codes moteurs incompréhensible ; je ne trouve pas mon modèle dans ce qui est capturé.
- **09-en-cars-least-likely-1 à suite6** : compris et très bien fait : je compare ma Yaris à une Corsa, phrase-verdict en gras « Registered in 2015, the Yaris failed less often than the Corsa: 18.0% against 31.0%. ». Le texte « That is why a model can come before another with a lower percentage » explique enfin le classement. Petite incohérence ressentie : ici la Q2 est « the popular model least likely to fail », alors que la page Audi plaçait A8 et A7 avant elle (la nuance « at least 50,000 tests » n'est pas faite sur la page Audi).

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Vérificateur marque / modèle / année (accueil et pages) | Oui, tout de suite | Oui pour le gros chiffre ; le chiffre « à l'âge actuel » demande un effort | Oui, c'est la réponse à ma question | 4 |
| Comparaison « Better/Worse than average for its age » | Oui | Oui | Oui, c'est ce qui rassure | 5 |
| Tableau par année d'immatriculation | Oui | Oui (lignes en gras expliquées) | Moyen | 4 |
| 3 causes d'échec les plus fréquentes (encadré) + tableaux de défauts | Oui | Groupes oui ; libellés DVSA détaillés non | Oui | 3 |
| « 7 free checks before your MOT » (bouton + liste) | Oui, très visible | Oui | Très | 5 |
| Comparer deux modèles (« Cars least likely to fail ») | Seulement via le menu | Oui | Oui (achat d'occasion) | 4 |
| Classements « ranked at equal age » | Oui | Non au premier coup d'œil | Moyen | 2 |
| Liens coût / date (« Cost and retests · When is my MOT due? ») | Oui | Oui | Oui (non ouverts dans le parcours) | 4 |
| Page « About » | Via les liens et le pied de page | Oui | Rassure | 4 |

## 5. Enchaînement et navigation

Bon : chaque page modèle ou marque reprend le même outil en haut, préréglé sur la bonne voiture, avec le même encadré vert. On ne se perd pas. Le fil d'Ariane (« Home / Audi A3 ») et le menu ☰ sont simples. Le bouton « 7 free checks » est répété partout, au bon moment, juste après le chiffre. Le lien « Every age and failure reason for the Focus → » emmène logiquement vers la page du modèle.

Moins bon : la comparaison de deux voitures n'existe que sur « Cars least likely to fail », et rien sur l'accueil ne le signale. Les listes de modèles mélangent liens et noms non cliquables sans explication. Sur les pages marque, l'outil répète en entier le contenu de la page modèle (même tableau), ce qui rallonge le défilement.

## 6. Difficultés classées

1. **01-accueil-suite1 (et toutes les pages outil) : le gros chiffre n'est pas celui de mon prochain MOT.** Vécu : je lis « 21.4% » en énorme et je me dis « 1 chance sur 5 », alors que pour une voiture de 11 ans le site estime lui-même 36.4 %, caché en milieu de paragraphe. Recommandation : afficher les deux chiffres côte à côte, au même niveau visuel. Texte proposé :
   « **Your next MOT (cars aged 11): 36.4% failed** · Your car's own year in 2023 (aged 8): 21.4% ».
2. **06-en-audi-suite4 à suite6 / 08-en-bmw-suite4 à suite6 : l'ordre des classements « ranked at equal age » paraît faux.** Vécu : Q2 à 9.4 % classée après A8 à 14.1 %, A1 dernière. Recommandation : ajouter une ligne visible par modèle « X points better than cars the same age » et un chapeau court. Texte : « Ranked by how far each model beats cars of the same age, not by its own percentage. »
3. **01-accueil-suite1 : trop de taux nationaux différents (28.6 %, 26.8 %, 24.5 %).** Vécu : je ne sais pas lequel retenir. Recommandation : dans l'encadré, remplacer « Latest national rate: 26.8% of all cars failed, April to June 2026. » par « Across all cars right now (April–June 2026): 26.8% fail at the first attempt. »
4. **04/05/07 tableaux « Failure item » : jargon DVSA.** Vécu : « no longer prevents the ingress of dirt », « Pins and bushes », « roller brake test » ne me disent rien. Recommandation : ajouter une version simple avant le libellé officiel, ex. « Torn rubber cover on a suspension joint (Linkage ball joint dust cover…) », « Worn suspension bushes (Pins and bushes…) », « Brakes too weak on the test machine (Service brake…) ».
5. **07-en-bmw-3-series-1 / 08-en-bmw-1 : « BMW 320d? Try 320, then 3 Series. »** Vécu : je ne comprends pas l'instruction. Texte proposé : « Your logbook says 320d or 330i? Pick “320” or “330” in the list; if it is not there, pick “3 Series”. »
6. **05-en-audi-a4-suite3 : « from 2001 to 2020 » alors que les tableaux montrent 2020 à 2009 (repliés : 2020 à 2007).** Vécu : je doute des chiffres. Recommandation : aligner la phrase sur ce qui est montré (« from 2007 to 2020 ») ou proposer les années plus anciennes.
7. **01-accueil-suite6 à suite9 et pages marque : certains modèles sont des liens, d'autres non.** Vécu : je tape sur « Mini » ou « Q2 » et rien ne se passe. Recommandation : soit tout lier, soit ajouter sous la liste « Underlined models have their own page; for the others, use the checker above. »
8. **01-accueil-suite11 : coût, date et contre-visite dans un seul long paragraphe.** Vécu : les infos pratiques (amende £1,000, contre-visite gratuite sous 10 jours ouvrés) sont noyées. Recommandation : les mettre en 4 puces courtes : « Fee: up to £54.85 · Due: 3 years after registration, then yearly · Early: up to a month minus a day · No MOT: fine up to £1,000 ».

## 7. À garder

- Le titre de l'accueil identique à la promesse Google, et l'outil visible dès le premier écran, sans plaque d'immatriculation.
- La phrase d'aide « The percentage: of every 100 MOT tests of these cars in 2023, how many failed at the first attempt, before any repair. »
- Le verdict en gras « Better than average for its age » : c'est ce que je retiens.
- « (11 years old now) » dans la liste des années, et « As on the V5C logbook ».
- Le bouton « 7 free checks before your MOT → » et la liste numérotée « seven checks that cost nothing ».
- La comparaison Yaris / Corsa avec la phrase-verdict en gras.
- La transparence : « Nothing you choose is sent anywhere », « What we are not », « How the site is paid for ».
- Les longs textes repliés (« Show the whole paragraph », méthode en accordéon).

## 8. Notes

Clarté : 7/10
Facilité : 8/10
Utilité : 8/10
