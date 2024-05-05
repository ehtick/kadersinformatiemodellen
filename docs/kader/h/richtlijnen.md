<section id="richtlijnen">

# Richtlijnen

Dit hoofstuk beschrijft de richtlijnen, verdeeld naar onderwerp. Per richtlijn is aangegeven welke van de FAIRQ-eigenschappen het invult. De F en A gaan voornamelijk over toegang tot en beschikbaarheid van het informatiemodel, de I en R over technische operabiliteit en de Q voornamelijk over de kwaliteit van de beheerorganisatie.

<section id="richtlijn-ontwikkelen">

## Richtlijnen om een OTL te ontwikkelen

**Waarom**

Het ontwikkelen van een OTL is meer dan een technisch project. Een succesvolle OTL is een OTL die het doel dient waarvoor hij ontwikkeld is, die wordt gevonden, die veel wordt toegepast en hergebruikt, die meebeweegt met de wensen van de gebruikers, waarvoor ondersteuning wordt gegeven, en die langjarig wordt beheerd. Om dit te bereiken is het van belang dat er op het niveau van organisatie en proces de juiste stappen worden gezet. 

**Richtlijnen**

| FAIRQ   |          Kenmerk          | Beschrijving                                                                                                                                                                                                                                                         |
|---------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Q       | Organisatie               | Breng de juiste stakeholders bij elkaar en organiseer samenwerking. Regel mandaat en budget en stel een planning op, en neem hier de beheerfase ook in mee. Zorg dat iedereen die input wil leveren dit ook kan doen, maar regel tegelijkertijd een heldere procedure om tot beslissingen te komen. Voor meer informatie hierover lees [het hoofdstuk over de ontwikkel- en beheerorganisatie](https://gitdocumentatie.logius.nl/publicatie/bomos/verdieping/#de-ontwikkel-en-beheerorganisatie-activiteit-governance) van [BOMOS](https://www.logius.nl/domeinen/infrastructuur/bomos/documentatie). |
| Q       | Doel                      | Formuleer een duidelijk en (liefst) meetbaar doel. Vaak zijn dit doelen als tijds- of kostenbesparing, efficiency, hergebruik van data, automatisering van handelingen, fouten voorkomen, e.d.                                                                 |
| Q       | Scope                     | Kies een realistische scope die binnen de planning en budget past. Houd de scope beperkt tot bijv. één asset of domein. Maak de scope concreet, praktisch en uitvoerbaar. Formuleer use cases.                                                                       |
| R       | Inventariseer informatiebronnen | Inventariseer welke informatiebronnen je nodig hebt om de use case af te dekken. Denk aanbijvoorbeeld wetgeving, normen, domeinstandaarden en referentietabellen.                                                                                                     |
| R       | Inventariseer bestaande standaarden | Inventariseer welke OTLen en andere standaarden als basis kunnen dienen voor de OTL en bouw hierop voort. Probeer niet het wiel zelf uit te vinden. Zie ook de richtlijnen over eenmaklig registreren.                                                                          |
| F/A     | Publicatie                | Publiceer je OTL online, voorzien van een goede beschrijving en documentatie. Voor meer details hierover zie de richtlijnen voor publicatie.                                                                                                                            |
| Q       | Beheer                    | Beheer je OTL. Maak een planning voor nieuwe versies en houd de planning van onderliggende standaarden/OTLlen in de gaten. Organiseer ondersteuning voor gebruikers. Voor meer details hierover zie de richtlijnen voor beheer.                                         |

</section>
<section id="richtlijn-woordenboek">

## Richtlijnen om een woordenboek op te zetten

**Waarom**

Een woordenboek is een lijst van termen voorzien een definities, waar mogelijk hierarchisch opgezet en aangevuld met relaties tussen begrippen. Een woordenboek is bedoeld voor mensen om tot overeenstemming te komen over de betekenis van termen en begrippen. Om effectief te kunnen worden gebruikt moet een woordenboek bovendien goed doorzoekbaar zijn. Het is daarom belangrijk dat (i) een woordenboek altijd op dezelfde manier is opgezet en (ii) een woordenboek zo volledig mogelijk is ingevuld, inclusief bijvoorbeeld synoniemen en (niet zichtbare) zoektermen waar op gezocht kan worden.

**Richtlijnen**

| FAIRQ | Kenmerk                    | Beschrijving                                                                                          |
|-------|----------------------------|-------------------------------------------------------------------------------------------------------|
| I     | SBB                        | Het woordenboek is opgezet volgens de <a href="https://profielstelselcatalogus.pldn.nl/">Standaard voor het beschrijven van begrippen (SBB)</a> van Geonovum. |
| I     | Volledigheid               | Het woordenboek wordt zo volledig mogelijk ingevuld waarbij bijvoorbeeld gebruikt wordt gemaakt van synoniemen, zoektermen, en wijzigingsnotities. |
| I     | Taxonomie                  | Het woordenboek is hierarchisch opgezet, als taxonomie.                                               |
| I     | Bronverwijzing             | Waar mogelijk wordt verwezen naar openbare bronnen waar een begrip op is gebaseerd, zoals standaarden, wetgeving, etc. |
| I     | Thesaurus                  | Begrippen zijn aan elkaar gerelateerd, zoals in een thesaurus.                                        |

</section>
<section id="richtlijn-ontologie">

## Richtlijnen om een ontologie op te zetten

Op dit moment ontbreken er nog richtlijnen om een ontologie op te zetten. Er wordt door de NEN-normcommissie <a href="https://www.nen.nl/modellering-integratie-en-interoperabiliteit-van-informatie-in-de-gebouwde-omgeving-en-procesindustrie">Modellering, integratie en interoperabiliteit van informatie in de gebouwde omgeving en procesindustrie</a> gewerkt aan een praktijkrichtlijn voor de NEN 2660. De verwachting is dat deze in 2024 wordt gepubliceerd.

</section>
<section id="richtlijn-registreren">

## Richtlijnen voor eenmalig registeren, meervoudig gebruik.

**Waarom**

Dubbele registraties, overtypen van gegevens en dubbele softwareontwikkelingen zijn een bekend probleem. Daarom is het van belang om gezamenlijk te werken met dezelfde gegevens en definities. Daarmee wordt het mogelijk om eenmalig te registreren en meervoudig gebruik mogelijk te maken. 

Het opstellen van een goede OTL heeft als randvoorwaarde dat de opgenomen concepten/objecttypes, definities en kenmerken herkenbaar zijn, binnen en buiten de eigen organisatie. Om dit te bewerkstelligen is het belangrijk om zoveel mogelijk gebruik te maken van marktconforme standaarden. Het wiel is vaak voor een groot deel al uitgevonden.

Het volgende is een incomplete lijst van bestaande standaarden en OTLlen:

- <a href="https://www.crow.nl/thema-s/management-openbare-ruimte/imbor/over-imbor-1">het informatiemodel beheer openbare ruimte (IMBOR)</a> van CROW;
- het <a href="https://www.riool.net/applicaties/gegevenswoordenboek-stedelijk-water">gegevenswoordenboek stedelijk water (GWSW)</a> van RioNed;
- Geonovum beheer een groot aantal informatiemodellen, waaronder:
    - de <a href="https://www.geonovum.nl/geo-standaarden/informatiemodellen-nen3610-familie/gegevenscatalogus-basisregistratie-adressen-en">basisadministratie adressen en gebouwen (BAG)</a>;
    - de <a href="https://www.geonovum.nl/geo-standaarden/bgt-imgeo">basisregistratie grootschalige topografie (BGT)</a>;
    - de <a href="https://www.geonovum.nl/geo-standaarden/bro-basisregistratie-ondergrond/basisregistratie-ondergrond-imbro">basisregistratie ondergrond (BRO)</a>;
    - het <a href="https://www.geonovum.nl/geo-standaarden/informatiemodel-kabels-en-leidingen">informatiemodel kabels en leidingen (IMKL)</a>;
    - het <a href="https://www.geonovum.nl/geo-standaarden/imx-geo-semantisch-model-basis-en-kernregistraties">semantisch model basis- en kernregistraties (IMX-Geo)</a>;
    - zie voor de complete lijst het <a href="https://www.geonovum.nl/geo-standaarden">overzicht</a> van Geonovum;
- een overzicht van meer standaarden kunt u vinden op de website van <a href="https://www.bimloket.nl/ictstandaarden/">digiGO</a>.

**Richtlijnen**

| FAIRQ | Kenmerk | Beschrijving                       |
|-------|---------|------------------------------------|
| R     | Hergebruik vóór creatie    | Nieuwe OTLlen bouwen voort op bestaande OTLlen. Bestaande OTLlen worden zoveel mogelijk hergebruikt. Het introduceren van nieuwe concepten wordt tot een minimum beperkt. |
| R     | Hergebruik door verwijzing | Hergebruik van elementen gebeurt door te verwijzen naar het bronelement via zijn UUID (zie ook de richtlijnen voor uniek identificeren). Bestaande elementen of eigenschappen worden niet herhaald in de nieuwe OTL. |
| R     | Hergebruik faciliteren | Indien organisaties zelf objecttypes, begrippen en definities hebben ontwikkeld, dan is het van belang om deze eenduidig te definiëren en om deze middels een woordenboek beschikbaar te stellen volgens de richtlijnen die hier voorgesteld worden. |
| R     | Benoemen relaties          | Relaties met andere OTLlen worden (kort) benoemd in de algemene beschrijving van de OTL.               |
| R     | Documenteren relaties      | Relaties met andere OTLlen zijn uitgebreid gedocumenteerd in de technische documentatie, inclusief verwijzing naar de bron-OTLlen en de gebruikte versies.  |

</section>
<section id="richtlijn-identificeren">

## Richtlijnen voor uniek identificeren

**Waarom**

Om de betekenis van objecten en gegevens mogelijk te maken is het van belang dat de objecten en gegevensdefinities ‘machine readable’ zijn. Machine readable betekent dat de gegevens door ICT systemen worden begrepen. Hiervoor is het van belang dat de structuur en betekenis van de gegevens eenduidig gecodeerd zijn. 

**Richtlijnen**

| FAIRQ | Kenmerk | Beschrijving                       |
|-------|---------|------------------------------------|
| R     | Unieke codering    | Elementen op alle niveaus hebben een unieke codering:

- de OTL zelf (dus het woordenboek of de ontologie)
- objecttypen, hun eigenschappen en hun relaties;
- begrippen, hun eigenschappen en hun relaties;
- waardenlijsten de individuele waarden. |

</section>
<section id="richtlijn-informatiemodellering">

## Richtlijnen voor informatiemodellering

**Waarom**

De richtlijnen voor informatiemodellering hebben als doel interoperabiliteit, d.w.z., OTLlen sluiten op elkaar aan en data kan tussen deze OTLlen worden gedeeld. Om tot interoperabele OTLlen te komen is het van belang dat ze ontwikkeld worden volgens dezelfde standaard, namelijk de <a href="https://www.nen.nl/nen-2660-2-2022-nl-291667">NEN 2660</a>.

<!-- De richtlijnen in deze sectie gelden voor alle soorten OTLlen. Daarnaast zijn er aanvullende richtlijnen specifiek voor woordenboeken en de relaties tussen OTLlen. Deze worden toegelicht in de volgende subsecties. Voor ontologieën zijn er nog geen praktische richtlijnen hoe deze het beste kunnen worden opgezet. Er is nog wel één richtlijn in de NEN 2660 die we hier expliciet benoemen en opnemen in de onderstaande tabel: in een ontologie moet een klasse verwijzen naar het woordenboekbegrip waar het op is gebaseerd. -->

**Richtlijnen**

| FAIRQ | Kenmerk                    | Beschrijving                                                                                          |
|-------|----------------------------|-------------------------------------------------------------------------------------------------------|
| I     | NEN 2660                   | De OTL voldoet aan de <a href="https://www.nen.nl/nen-2660-2-2022-nl-291667">NEN 2660</a>.            |
| I     | Taal                       | De gebruikte talen voor uitwisseling zijn conform de NEN 2660: (relaties tussen) woordenboeken zijn opgezet in SKOS; (relaties tussen) ontologieën in RDFS, RDFS+OWL of RDFS+SHACL. |
| I     | Formaat                    | De gebruikte formaten voor uitwisseling zijn conform de NEN 2660: RDF-XML, Turtle of JSON-LD                            |
| R     | Documentatie               | De OTL is gedocumenteerd en de documentatie is vindbaar en toegankelijk.                              |

</section>
<section id="richtlijn-harmonisatie">

## Richtlijnen voor harmonisatie tussen OTLlen

**Waarom**

Bij harmonisatie wordt er een mapping gemaakt tussen twee woordenboeken of tussen twee ontologieën via harmonisatierelaties. Harmonisatie is noodzakelijk om tot gegevensuitwisseling tussen deze OTLlen te komen. Wanneer de OTLlen door verschillende organisaties worden beheerd, moet de harmonisatie als een aparte OTL met een aparte beheeropgave worden opgepakt.

**Waarom**

| FAIRQ | Kenmerk                    | Beschrijving                                                                                          |
|-------|----------------------------|-------------------------------------------------------------------------------------------------------|
| I     | Matching through alignment | Relaties tussen OTLlen (voor hergebruik en harmonisatie) zijn conform <a href="https://docs.crow.nl/ontology-alignment/whitepaper/">"Ontology Matching trough alignment and extension: a Best Practice"</a> van CROW. | 
| R     | Interne harmonisatie       | Bij harmonisatie tussen OTLlen die binnen dezelfde organisatie worden beheerd, kunnen de harmonisatierelaties impliciet onderdeel zijn van een van beide OTLlen. |
| R     | Externe harmonisatie       | Harmonisatie tussen OTLlen van verschillende organisaties moet als een aparte OTL met een aparte beheeropgave worden opgepakt. |
| R     | Benoemen relaties          | Relaties met andere OTLlen worden (kort) benoemd in de algemene beschrijving van de OTL.               |
| R     | Documenteren relaties      | Relaties met andere OTLlen zijn uitgebreid gedocumenteerd in de technische documentatie, inclusief verwijzing naar de bron-OTLlen en de gebruikte versies.  |

</section>
<section id="richtlijn-publicatie">

## Richtlijnen voor publicatie

**Waarom**

Om een OTL te kunnen gebruiken moet allereerst:
- de OTL makkelijk te vinden zijn;
- de OTL makkelijk te begrijpen zijn; er moet zijn beschreven voor wie en voor wat deze bedoeld is;
- de OTL makkelijk beschikbaar zijn; d.w.z. te bekijken en te downloaden;
- de beheerder van de OTL makkelijk te bereiken zijn voor vragen.

Dit is gevat in onderstaande richtlijnen.

**Richtlijnen**

| FAIRQ | Kenmerk                    | Beschrijving                                                                                          |
|-------|----------------------------|-------------------------------------------------------------------------------------------------------|
| F     | Naam                       | De OTL heeft een eenduidige naam.                                                                    |
| F     | Beschrijving               | Er is een beschrijvende tekst waarin wordt toegelicht waarvoor en voor wie de OTL bedoeld is. |
| F     | Zoektermen                 | Er zijn termen gedefinieerd (synoniemen, alternatieven, zoektermen) waarop kan worden gezocht.      |
| F     | Eigenaar                   | Er is een eigenaar van de OTL. Naam en contactgegevens van het aanspreekpunt van de eigenaar zijn bekend. |
| F     | Beheerder                  | Er is een beheerder van de OTL. Naam en contactgegevens van het aanspreekpunt van de beheerder zijn bekend. |
| F     | Vindbaar                   | De OTL is, inclusief toelichting en documentatie, online vindbaar en beschikbaar.                    |
| A     | Beschikbaar                | De OTL is in zijn geheel te downloaden of kan direct worden benaderd via een REST of SPARQL endpoint. |
| A     | Viewer                     | De OTL kan online worden bekeken via een viewer.                                                     |
| A     | Openheid van gebruik       | De OTL is, eventueel na betaling, voor iedereen beschikbaar om te gebruiken.                          |
| A     | Nederlandse taal           | De OTL en alle informatie eromheen zijn in het Nederlands opgesteld.                                  |
| A     | Engelse taal               | De OTL en alle informatie eromheen zijn in het Engels opgesteld.                                      |

</section>
<section id="richtlijn-beheer">

## Richtlijnen voor beheer

**Waarom**

Gebruikers van een OTL stemmen hun processen en systemen af op de OTL en zijn daarmee op een hele directe manier afhankelijk van hoe de OTL beheerd wordt. Goed beheer is daarom er belangrijk. Versiebeheer moet op orde zijn; er moet bewust worden omgegaan met de impact die wijzigingen kunnen hebben voor gebruiker; (grote) wijzigingen moeten worden aangekondigd; en wijzigingen tussen versies moeten goed zijn gedocumenteerd.

Dit is gevat in onderstaande richtlijnen.

**Richtlijnen**

| FAIRQ | Kenmerk                    | Beschrijving                                                                                          |
|-------|----------------------------|-------------------------------------------------------------------------------------------------------|
| Q     | Versiebeheer               | Er wordt gebruik gemaakt van versienummering met daarbij een datum.                                   |
| Q     | Meest recente versie      | De meest recente versie is beschikbaar.                                                                |
| Q     | Vorige versie              | De vorige versie moet minimaal beschikbaar zijn.                                                      |
| Q     | Oudere versies             | Oudere versies zijn beschikbaar.                                                                      |
| Q     | Versieverschillen          | Verschillen tussen versies zijn toegelicht.                                                           |
| Q     | Releasekalender            | Er is een planning beschikbaar voor toekomstige versies, inclusief een indicatie van verwachte wijzigingen per wijziging. Op zijn minst wordt aangegeven of en wanneer er een nieuwe versie verwacht wordt. |
| Q     | Feedback                   | De beheerder kan benaderd worden, bijvoorbeeld om bugs te melden en features te verzoeken.            |

</section>
</section>