# Toelichting: het wat en hoe van een OTL
In dit hoofdstuk lichten we toe wat we precies bedoelen met een OTL en hoe een OTL bijdraagt aan een gestandaardiseerde vorm van gegevensuitwisseling.

## Woordenboek of ontologie?

Met een OTL kunnen we verschillende dingen bedoelen:
- een woordenboek;
- een ontologie, incl. domeinwaardes;
- relaties tussen OTLlen;
- een combinatie van bovenstaande.

## Woordenboek

Een woordenboek is een lijst van termen voorzien een definities, eventueel aangevuld met (hiërarchische) relaties. Een woordenboek is bedoeld voor mensen om tot overeenstemming te komen over de betekenis van termen en begrippen.

Onderstaande toont een voorbeeld van een fictief woordenboek:

| Voorkeursterm | Bovenliggend begrip | Definitie | Synoniem |
|---------------|---------------------|-----------|----------|
| Klep          | -                   | Een instrument of biologisch object dat de de stroom van een vloeistof reguleert, stuurt of controleerd door te openen, sluiten of bepaalde toegangen af te sluiten. | Afsluiter |
| Vlinderklep   | Klep                | Een klep die de stroming van een vloeistof of gas geheel of gedeeltelijk afsluit met een schijf die om haar middellijn draait. | Smoorklep |
| Kogelklep     | Klep                | Een klep die de stroming van een vloeistof of gas geheel of gedeeltelijk afsluit met een doorboorde bol (kogel) die om zijn as loodrecht op de boring draait. | Kogelkraan, bolkraan, bolklep |

Een woordenboek kan ook schematisch worden weergegeven. Onderstaande toont de schematische weergave van het fictieve woordenboek.

[Te doen: schematische weergave woordenboek invoegen]

In onze kaders en richtlijnen volgen wij de SBB als standaard voor het opstellen van een woordenboek. De SBB conform de NEN 2660 en kent een taalbinding met SKOS (plus enkele aanvullende linked data vocabulaires). Onderstaande toont de SBB-implementatie van het fictieve voorbeeld.

Een woordenboek kan verschillende vormen hebben: het kan een begrippenlijst zijn, een taxonomie of een thesaurus. Ten behoeve van een helder begrip hierover lichten we in het volgende elke vorm apart toe.

### Begrippenlijst

### Taxonomie

### Thesaurus

## Ontologie

Een ontologie is een conceptueel model van een domein. Een ontologie bestaat uit klasses die eigenschappen hebben en onderlingen (hiërarchische) relaties, en lijsten van standaard domeinwaardes (enumeraties). Een ontologie is bedoeld voor machines om de structuur van gegevens vast te leggen.

Een belangrijke basis voor het gebruik van een de ontologie is het woordenboek. Zonder woordenboek kunnen er interpretatieverschillen ontstaan over de betekenis van een ontologie. Klasses, relaties, eigenschappen en enumeraties kunnen daarom allemaal verwijzen naar een woordenboek.

Onderstaande toont een voorbeeld van een fictieve ontologie, met daarbij verwijzingen naar het eerder getoonde woordenboek. Dit voorbeeld toont:
- klasses met eigenschappen;
- overerving van klasses;
- een associatie tussen klasses;
- enumeraties (Bolmaat en Materiaal);
- verwijzingen naar de begrippen in het woordenboek waar deze klasses op zijn gebaseerd.

<figure id="ontologievoorbeeld">
  <img src="figures/ontologievoorbeeld.png"/>
  <figcaption>Fictief voorbeeld van een ontologie en een woordenboek.</figcaption>
</figure>

In onze kaders en richtlijnen volgen wij de NEN 2660 als standaard voor het opstellen van een ontologie.

## Relaties tussen OTLlen

Het leggen van relaties tussen OTLlen is een noodzakelijke stap om tot gegevensuitwisseling te komen. Dit kan op twee manieren:
- via harmonisatie;
- via hergebruik.

### Harmonisatie

Harmonisatie tussen OTLlen is een noodzakelijke stap om tot gegevensuitwisseling tussen OTLlen te komen. Om bijvoorbeeld gegevens uit te wisselen die gebaseerd zijn op verschillende ontologieën zullen eerst alle entiteiten van de beide ontologieën met elkaar geharmoniseerd moeten zijn.

Onderstaande figuur toont op versimpelde wijze hoe vanuit ontologie B harmonisatierelaties zijn gelegd met ontologie A. Voor elke klasse is aangegeven wat de overeenkomstige klasse in de andere ontologie is.

<figure id="harmonisatie1">
  <img src="figures/harmonisatie1.png"/>
  <figcaption>Versimpeld voorbeeld van harmonisatie tussen twee ontologieën.</figcaption>
</figure>

### Hergebruik

Bij hergebruik worden bestaande modellen uitgebreid. Dit is efficiënt en maakt het bovendien makkelijk om de modellen met elkaar te harmoniseren, omdat ze dezelfde basis delen. Onderstaande figuur toont aan hoe ontologie B voortbouwt op ontologie A. Alle klasses uit ontologie A zijn een-op-een overgenomen (via een import) en alleen klasse B4 is nieuw toegevoegd, als subtype van A1.

<figure id="hergebruik1">
  <img src="figures/hergebruik1.png"/>
  <figcaption>Versimpeld voorbeeld van hergebruik van een ontologie.</figcaption>
</figure>

Het is belangrijk om te beseffen dat het beheren van relaties tussen OTLlen net zo'n beheeropgave vereist als het beheren van een OTL zelf. Voor beide voorbeelden hierboven geldt dat als ontologie A wordt bijgewerkt, er zal moeten worden gekeken wat voor impact dit heeft op (de relatie met) B. Dit is doorgaans geen probleem als beide OTLlen binnen dezelfde organisatie beheerd worden. Zodra dit niet meer het geval is, wordt het aangeraden om de relaties tussen beide OTLlen als een aparte beheeropgave te zien.

In onze kaders en richtlijnen volgen wij CROWs "Ontology Matching trough alignment and extension: a Best Practice" als standaard voor het harmoniseren en hergebruiken van OTLlen.

## Van OTL naar gegevensuitwisseling

## OTL en ILS