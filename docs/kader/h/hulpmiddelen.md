# Handige hulpmiddelen

## Draaiboek OTL voor B&U sectoren

### Documentbeheer

**Documentinformatie**

- Titel: Draaiboek OTL voor B&U sectoren
- Opgesteld door: BIMW en Gobar Adviseurs
- Status: concept
- Vastgesteld door: Rijksvastgoedbedrijf en digiGO
- Datum vaststelling:
- Versienummer: 0.3
- Contact:

Versies

| Versie | Datum | Status | Samenvatting wijzigingen | Initialen |
|--------|-------|--------|--------------------------|-----------|
| 0.1 | 1-6-2023 | Concept | Eerste concept | HW |
| 0.2 | 30-11-2023 | Concept | Aanpassingen ten behoeve van voortgangsrapportage | HW, FK |
| 0.3 | 4-4-2024 | Concept | Voorbeeld opzet OTL, links naar relevante standaarden, opmaak | HW, FK |

**Bijlagen**

| Nummer | Documenttitel |
|--------|---------------|
| Bijlage 1 | |
| Bijlage 2 | |

### Inleiding

In dit draaiboek wordt stapsgewijs beschreven hoe tot de ontwikkeling van een OTL of Ontologie te komen en hoe deze vervolgens voor een bepaalde toepassing te implementeren.  

Er zijn in Nederland meerdere semantische OTL’s ontwikkeld (zoals de OTL-IMBOR, OTL-RWS, OTL-Amsterdam, OTL TenneT, etc), maar die zijn vaak slechts bij één organisatie toepasbaar, en hoe hiertoe te komen is vaak complex en onduidelijk. Niet alleen de OTL’s verschillen van elkaar, echter ook de toepassingen hiervan lopen uiteen. 

Kortom hoe kom je tot een OTL en wat kan een gebruiker hiermee in de praktijk. Met dit draaiboek hopen we deze vraagstukken uit te leggen en de weg hoe tot een OTL te komen toe te lichten.

Hopelijk vormt het draaiboek voor velen een weg om uit te vinden hoe een OTL concreet toe te passen en de werkwijze om deze te ontwikkelen en te implementeren in je eigen organisatie

**Context landelijke initiatieven**

Dit draaiboek vormt één van de producten die in het digiGO-versnellingsproject getiteld: “Draaiboek en beproeving OTL-implementatie” tot stand zijn gekomen. Uiteindelijk zal dit draaiboek samen met een of meerdere eenvoudige, praktisch herkenbare voorbeelden van een OTL-toepassing en bijbehorende communicatie en implementatiestrategie een geheel vormen. 

Vanuit digiGO zijn een aantal initiatieven opgezet waar dit draaiboek en de opgeleverde mini-OTL B&U bij zullen aansluiten. 

Zo heeft digiGO (onder leiding van H. Hutink) ervoor gekozen de diverse OTL’s gezamenlijk op een landelijke platform beschikbaar te stellen en de ontwikkelaars/eigenaren van deze OTL’s als community bijeen te brengen.

Daarnaast worden de  kaders en richtlijnen ontwikkeld voor de standaarden in de bouwsector. De OTL’s zullen daarin ook meegenomen worden. De informatie in dit draaiboek beoogt een praktische uitwerking te zijn van deze (strategische) kaders en richtlijnen.

### Object Type Bibliotheek (OTL)

#### Wat is een OTL

Een Object Type Bibliotheek (OTL) is een conceptueel datamodel waarin de opbouw van assets en objecttypen wordt vastgelegd. Het doel van een OTL is om binnen en buiten een bedrijf definities en mogelijke relaties van te leggen van concepten (objecttypes) die verwijzen naar de echte wereld. 

De OTL omschrijft de manier waarop objecttypen met elkaar of onderliggende elementen samenhangen, welke opbouw een objecttype kan kennen, welke generieke definitie een object heeft en welke kenmerken een objecttype kan hebben. 

In een OTL leg je alle relevante definities, relaties en kenmerken vast die je gedurende de gehele levenscyclus van een object (ontwerp, realisatie, gebruik, beheer en onderhoud en sloop) gebruikt.
Een OTL beschrijft welke objecttypen er bestaan maar bevat geen informatie over individuele objecten (instanties). 

De vastgelegde definities, relaties en kenmerken uit de OTL kunnen gebruikt worden om de specifieke objecten altijd op dezelfde manier op te bouwen. 

<figure id="OTL-voorbeeld">
  <img src="figures/draaiboek/OTL-voorbeeld.png"/>
</figure>

#### Waarvoor is een OTL

Ontologieën of objecttype bibliotheken (OTL’s) zijn semantische data structuren of modellen, die voor meerdere toepassingen geschikt blijken. Zoals de titel al aangeeft zijn deze structuren vorm gegeven rondom objecten of assets van een gebouw of een infrastructuur (netwerk van assets). Deze structuren worden enerzijds vaak opgebouwd als taxonomie (ofwel families van objecten) en anderzijds uit decompositie (ofwel onderdelen van objecten). Richtlijnen die vaak van toepassing zijn (zie ook ontwerpnotitie OTL Gelderland):

1. De OTL is een woordenboek en een informatiemodel en bevat generieke informatie
2. In de OTL wordt de informatiebehoefte van een beheerder/opdrachtgever gedurende de levensduur van de objecttypen vastgelegd
3. In de OTL zelf wordt geen informatie opgeslagen over instanties (meerdere objecten op verschillende plekken van hetzelfde asset/objecttype)

#### Hoe worden OTLs toegepast

De OTLs (hun doel) worden door beheerders/opdrachtgevers gebruikt om:

1.	Hun databehoefte per asset (fysiek of ruimtelijk) aan te verbinden (linken) en hiermee uit te vragen in projecten
2.	Hun functionele en technische eisen per asset aan te verbinden
3.	Hun asset management (soms GIS-) en document management-systeem mee te structuren
4.	Om gestructureerde geleverde data van projecten te verdelen over verschillende Asset management beheersystemen

Inmiddels is duidelijk geworden dat in de gebouwde omgeving ook opdrachtnemers OTLs gebruiken om hun werkzaamheden/activiteiten te organiseren en de data te structuren in projecten (BAM, Dura en VolkerWessels).
Er zijn nog veel meer toepassingen of use-cases te bedenken om een OTL te gaan toepassen in de gebouwde omgeving. Om hiertoe te komen is in dit versnellingsproject een standaard methodiek ontwikkeld, die in dit draaiboek stapsgewijs wordt toegelicht. Ook zijn inmiddels 3 uitgewerkte nieuwe usecases met gebruikers bedacht en beschreven.

### Use Cases opstellen
De ervaringen om tot een beknopte use-case beschrijving te komen staan hieronder kort weergegeven; er is voor gekozen om samen tot een goede userstory te komen:

1.	Breng een groep rolhouders/gebruikers met vergelijkbare belangen bijeen, die de toepassing van een OTL voor hun vraagstuk als mogelijkheid willen onderzoeken.
2.	Breng de verbeterwens in beeld van de verschillende gebruikers/rolhouders
3.	Vraag hen wat ze met de uitvoering van die verbeterwens willen bereiken (hun doel).
4.	Baken de use-case af ofwel geef aan binnen welke begrenzing je een OTL wil toepassen.

In **bijlage 1** is de template opgenomen die in een dergelijke bijeenkomst gebruikt kan worden om een use-case te ontwikkelen en te beschrijven.

**Ad 1. Bijeenkomst rolhouders/doelgroep**

Organiseer een bijeenkomst van enkele uren waarbij de potentiële gebruikers van een OTL met vergelijkbare belangen discussiëren over hun wensen en begeleid dit.

Geef per doelgroep of rolhouder aan waarvoor zij/hij de OTL denkt te kunnen gebruiken. Er kunnen meerdere rolhouders zijn, die een bepaald proces ondersteund zouden willen zien. Maak vervolgens een lijst met knelpunten die elk van hen graag opgelost zouden willen zien. Mogelijk zijn ook andere rolhouders nog niet aanwezig, die wel nodig zijn. Na de bijeenkomst kun je dit met hen opnemen.

**Ad 2. Probleemschets**
Als alle individuele wensen per rolhouder duidelijk zijn, wordt het probleem in een brede context verder uitgediept. Hierbij wordt een rijtje problemen rondom een gezamenlijk thema verzameld en beschreven. Vaak geeft de probleemschets een goed beeld van het grotere plaatje (proces) waarin meerdere rolhouders na elkaar een rol vervullen. 
Probeer bij elk probleem ook aan te geven waarom dit nu ontstaat en waartoe dit leidt (tijdsdruk, in efficiency, meerkosten, e.d.).

**Ad 3. Beoogde doelen/ belangrijke vragen**
Hier worden de beoogde doelen van de use-case beschreven, wat moet resulteren in oplossen van eerder vermelde problemen of knelpunten. Er wordt een opsomming gemaakt van de belangrijkste resultaten die met de te ontwikkelen OTL bereikt gaan worden. Vaak zijn dit doelen als tijds- of kostenbesparing, efficiency, hergebruik van data, automatisering van handelingen, fouten voorkomen, e.d.

Om specifieker te kunnen worden is het tenslotte handig om een lijstje met vragen op te stellen rondom de beoogde doelen. Dit zijn vragen die beantwoord moeten worden om het gewenste resultaat van het knelpunt te behalen. De vragen worden ook gebruikt om rekening te houden met specifieke onderdelen, zodat de uitvoering succesvol kan worden. Denk hierbij aan vragen rondom de use-case als:
-	Zijn er al afspraken/basisregels, bestandsformaten, OTL’s die je kunt hergebruiken?
-	Zijn er al andere rolhouders/organisaties die dit vraagstuk via tooling of iets dergelijks hebben opgelost?
-	Welke datasets zijn beschikbaar om de OTL straks te testen

**Ad 4. Scoping van de use-case**
De laatste stap is de reality-check die dient te worden uitgevoerd, ofwel de afbakening van de use-case, bijvoorbeeld door een bepaald domein of asset te kiezen. Het is hierbij van belang om de use-case concreet, praktisch en behapbaar (lees realiseerbaar/uitvoerbaar) te maken. 

Dit is een zeer belangrijk onderdeel, want hiermee maak je de use-case specifiek en klein, zodat je ook de ontwikkeling van de OTL beperkt tot een klein onderdeel van een groter probleem. Als de OTL dan ontwikkeld is voor het kleine deel en aantoonbaar functioneert, dan kan tenslotte de OTL uitgebreid worden om het gehele probleem van de rolhouder(s) in de organisatie te gaan tackelen. Ook wordt dan voor het management van je organisatie inzichtelijk wat een OTL oplost en wat de geraamde kosten zijn om het gehele probleem te tackelen.

#### De aanpak van de OTL-ontwikkeling voor een use-case
Voor de aanpak van de uitvoering van de use-case worden hieronder diverse activiteiten benoemd, om het gewenste eindresultaat voor het knelpunt te kunnen behalen. Deze activiteiten dienen ook om zelf na te gaan met welke onderdelen rekening gehouden dient te worden. Ook de volgordelijkheid is hierbij belangrijk om het team te helpen om de use-case succesvol uit te voeren.

1.	Voer een uitgebreide inventarisatie uit op basis van eerder gestelde vragen en laat je uitgeschreven use-case reviewen door anderen.
2.	Inventariseer welke informatiebronnen je nodig hebt om de use-case af te dekken.
3.	Inventariseer welke datasets er beschikbaar zijn en welke data ontbreekt om de use-case te kunnen uitvoeren.
4.	Nagaan welke relaties van data/opbouw structuren er nodig zijn om de use-case uit te voeren.
5.	Uitzoeken welke open standaarden relevant zijn om classificaties (NL/SfB), mappingen te kunnen maken. 
6.	Uitzoeken/verzamelen van bestaande herbruikbare ontologieën (OTL’s, CB-NL, etc.) benodigd zijn voor de scope van de use-case.
7.	Een toelichting geven aan stakeholders over wat een OTL is en een reeds ontwikkelde OTL en het gebruik hiervan tonen.
8.	Ontologie inrichten of aanpassen met benodigde links, regelsets en eventueel aanvullende concepten voor de use-case op basis van voorgaande stappen.
9.	De ontologie inrichten/modelleren conform NEN-2660 met een dataset.
10.	Uitzoeken welke tools/software** we willen gebruiken om de OTL-toepassing demonstreerbaar te maken.
11.	Beschrijven wat we in de use-case willen laten zien in de tool(s) voor de demo en functionaliteiten testen in de toolset.
12.	Benodigde aanpassingen maken in de toolset en demo-tools.
13.	Tools en OTL op elkaar aansluiten om de werking van de use-case aantoonbaar te maken.
14.	De ontwikkelde OTL op het digiGO open OTL-platform beschikbaar maken voor een ieder, samen met de tools om het voorbeeld van de use-case te illustreren.

** Bij voorkeur tools gebruiken die al op basis van een OTL ingericht zijn, of flexibele tools gebruiken, waar een OTL gemakkelijk implementeerbaar is.

### Randvoorwaarden voor het opstellen van een OTL 

#### Gebruik van marktconforme standaarden

Het opstellen van een goede OTL heeft als randvoorwaarde dat de opgenomen concepten/objecttypes, definities en kenmerken herkenbaar zijn, binnen en buiten de eigen organisatie. Om dit te bewerkstelligen is het belangrijk om zoveel mogelijk gebruik te maken van marktconforme standaarden. Het wiel is vaak voor een groot deel al uitgevonden. 

Binnen de infrasector zijn meer (uitgewerkte) standaarden voorhanden, maar ook binnen de B&U sector zijn er goede aanknopingspunten te vinden die als basis voor een OTL kunnen dienen. 

**NEN 2260**

<a href="https://www.nen.nl/nen-2660-1-2022-nl-291666">NEN 2660-1</a>  biedt een raamwerk voor het ontwikkelen van samenhangende conceptuele modellen die betrekking hebben op het gebruik van, en de gehele levenscyclus van de gebouwde omgeving, en elementen uit deze omgeving. Deze norm is gericht op organisaties die conceptuele modellen binnen dit domein ontwikkelen, niet op de partijen die deze conceptuele modellen uit dit domein in de praktijk toepassen.

<a href="https://www.nen.nl/nen-2660-2-2022-nl-291667">NEN 2660-2</a> is een praktische invulling van NEN 2660-1. De NEN 2660-2 geeft een overzicht van de praktische configuratie, extensie en implementatie van de algemene NEN standaard. 

**Building Topology Ontology (BOT)**

De <a href="https://w3c-lbd-cg.github.io/bot/">Building Topology Ontology (BOT)</a> beschrijft een minimale ontologie die te gebruiken is om de topologische kernconcepten van een gebouw op te bouwen

**IFC**
IFC is een gestandaardiseerde, digitale beschrijving van de gebouwde asstes. Het is een open, internationale standaard (ISO 16739-1:2018) en bevordert leveranciersneutrale, of agnostische, en bruikbare mogelijkheden op een breed scala aan hardwareapparaten, softwareplatforms en interfaces voor veel verschillende use cases.

IFC kent verschillende domeinen die sets aan kenmerken vaststellen op zo’n manier dat makkelijk gelinkt kan worden naar andere standaarden en/of (3D) datamodellen. 

Het domein IFC building heeft een grote hoeveelheid aan kenmerkensets voor gebouwen beschikbaar.

**NL/SfB**

<a href="https://ketenstandaard.nl/nl-sfb-facts/">NL-SfB</a> is de meest gebruikte classificatie voor gebouwonderdelen. Bouw- en installatiebedrijven coderen met deze open standaard lagen en objecten in BIM en CAD-systemen, en gebruiken NL-SfB voor het ordenen en filteren van informatie van leveranciers.

**ETIM**

<a href="https://www.etim-international.com/">ETIM</a> is een internationale classificatiestandaard voor technische producten. Deze classificatie kan helpen om de kenmerken van specifieke producten te linken aan een internationale database van producten.

### Bijlage 1. Format use-case uitwerking

#### Use Case OTL: *Titel formuleren*

**Inleiding**

Hier wordt de use-case beknopt beschreven in term van beoogd gebruiksdoel met gewenst resultaat binnen een bepaalde afgrenzing vanuit een bepaalde rol.

Graag elementen hiervoor gebruiken waarmee userstories beschreven kunnen worden (zie onderstaande tabel).

| Als gebruiker     | Verbeterwens / Gewenst gedrag | Waarvoor ? Welk doel?  | Afbakening            |
|-------------------|-------------------------------|-------------------------|-----------------------|
| Als \[Rol\] wil ik | Wat kunnen doen?             | Om wat te bereiken ?    | Binnen welke afgrenzing? |

Afgeleide behoefte:

Welke warmtepompen zijn er op de markt beschikbaar en waar kan ik deze kwijt in mijn vastgoedportefeuille, om invulling te geven aan mijn duurzaamheidsopgave.

**Probleemschets**

- ...
- ...

**Beoogde doelen**

Hier worden de beoogde doelen van de use-case beschreven, wat moet resulteren in het oplossen van het bovenvermelde knelpunt.

Bij voorkeur een opsomming gebruiken, met prioritering en/of een volgordelijkheid van maatregelen waarmee het knelpunt opgelost zou moeten worden

1. ...
2. ...

**Vragen**

Voor de aanpak / invulling van de uitvoering van de use-case worden de volgende vragen gesteld, die ieder voor zich beantwoord moeten worden om het gewenste resultaat / oplossing van het knelpunt te kunnen behalen. 

Deze vragen dienen ook om zelf na te gaan met welke onderdelen rekening gehouden dient te worden of een volgordelijkheid die aangehouden dient te worden wat het team gaat helpen om de use-case succesvol te kunnen uitvoeren. 

1. ...
2. ...

Graag hierbij ook een doorkijkje maken naar de aansluiting van de use-case naar het grotere plaatje.

**Scope**

Een afbakening van de use-case naar een bepaald domein is hierbij van belang om de use-case concreet, praktisch en behapbaar (haalbaarheid uitvoering) te houden. 

**Beknopte aanpak**

Voor de aanpak van de uitvoering van de use-case worden activiteiten genoemd, om het gewenste resultaat/ oplossing van het knelpunt te kunnen behalen.

Deze activiteiten dienen ook om zelf na te gaan met welke onderdelen rekening gehouden dient te worden of een volgordelijkheid die aangehouden dient te worden wat het team gaat helpen om de use-case succesvol te kunnen uitvoeren.

1. ...
2. ...

### Bijlage 2. Voorbeeld Use Case OTL - Biobased Isoleren

<figure id="OTL-opbouw">
  <img src="figures/draaiboek/OTL-opbouw.png"/>
</figure>

<figure id="B&U Taxonomie">
  <img src="figures/draaiboek/B&U Taxonomie.png"/>
</figure>

<figure id="B&U Ruimtelijke decompositie">
  <img src="figures/draaiboek/B&U Ruimtelijke decompositie.png"/>
</figure>

<figure id="B&U Fysieke decompositie">
  <img src="figures/draaiboek/B&U Fysieke decompositie.png"/>
</figure>

#### Voorbeelduitwerking Use Case Biobase isoleren

<figure id="B&U voorbeelduitwerking 1">
  <img src="figures/draaiboek/B&U voorbeelduitwerking 1.png"/>
</figure>

<figure id="B&U voorbeelduitwerking 2">
  <img src="figures/draaiboek/B&U voorbeelduitwerking 2.png"/>
</figure>

## Handleiding OTL | IMBOR-LD

Link: <a href="https://docs.crow.nl/imbor/handleiding-otl/">Handleiding OTL | IMBOR-LD</a>

Deze handleiding van CROW beschrijft hoe er op basis van IMBOR-LD een eigen ontologie gemaakt kan worden ten behoeve van uitwisseling tussen opdrachtnemer en opdrachtgever. Hoewel de handleiding dus gericht is op hergebruik van de IMBOR OTL, zijn een aantal van de stappen in deze handleiding zodanig generiek dat ze ook van toepassing zijn bij het opzetten van een algemene OTL.

De originele vraag voor deze handleiding komt voor uit het BIM Pro-programma van de Provincies. Men wil een OTL kunnen samenstellen die aan de opdrachtgever gegeven kan worden, die deze vervolgens 'invult' en teruglevert. Waarop de Provincie de gegevens kan valideren en inlezen in hun systemen. Het doel (en daarmee de scope) van deze handleiding is dat hiermee een Provincie in staat moet zijn om een OTL op te zetten in een spreadsheet (conventioneel) of LinkedData (duurzaam) formaat.