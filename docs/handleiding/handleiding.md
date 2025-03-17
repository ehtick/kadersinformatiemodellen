# Inleiding

Het doel van dit document is om handvatten te bieden voor het ontwikkelen van concepten in RDF die:
- voldoen aan de NEN 2660-2;
- gebruikt kunnen worden in een software om een of meerdere ontologieën te ontwikkelen en beheren, waarbij de volledige geschiedenis van een ontologie wordt bijgehouden;
- gebruikt kunnen worden in een software om instantiedata van een ontologie te creëren, te beheren en te verifiëren, waarbij de volledige geschiedenis van een instantie wordt bijgehouden;

Bij het ontwikkelen van dergelijke concepten moeten er veel keuzes gemaakt worden. Sommige keuzes kunnen bovendien op meerdere manieren worden geïnterpreteerd. De NEN 2660-2 geeft hier richting aan, maar laat nog steeds veel keuzes en interpretaties open. Daar zijn ook goede redenen voor. Waarvan de belangrijkste vaak is: een keuze dient vaak één bepaald doel. Dit document beschrijft een aantal specifieke keuzes en interpretaties. Deze zijn gemaakt met in gedachten de wens om via geautomatiseerde tooling een ontologie en de bijbehorende instantiedata te beheren. De resulterende concepten zijn dan ook vrij uitgebreid ("verbose"). 

*Dit document is een hulpmiddel dat nog sterk in bewerking is. Het is niet volledig en is op geen enkele wijze normatief.*

Tot nog toe maken we in dit document alleen gebruik van RDFS en SHACL (op de definitie van `owl:Ontology` na). In de toekomst zullen we waarschijnlijk ook gebruik maken van OWL.

We gaan in dit document uit van automatische verwerking van RDF-data waarbij metadata worden bijgehouden zoals een bewerkingsgeschiedenis. Daarom:
- houden we RDFS en SHACL gescheiden;
- objectificeren we entiteiten zoals attributen en relaties;
- maken we zo min mogelijk gebruik van anonieme nodes (blanknodes);
- gebruiken we betekenisvrije codes voor naamgeving.

> Merk op dat we in dit document betekenisvolle namen gebruiken in de codevoorbeelden. Dit doen we enkel en alleen ten behoeve van de leesbaarheid in dit document. Bij naamgeving raden we altijd aan betekenisvrije codes te gebruiken.

# URI-strategie

URIs worden gebruikt om data te groeperen. Dit kan langs verschillende dimensies, waarbij organisatie en het type data (termen, concepten, individuen en documenten) twee belangrijke zijn. In Sectie 8.3 van de NEN 2660-2 wordt de URI-strategie van de NEN 2660-2 uitgelegd.

In deze sectie stellen we een URI-strategie op die (1) zich houdt aan de NEN 2660-2, (2) geschikt is voor een projectorganisatie waarbij meerdere ontologieën en bijbehorende instantiedata beheerd moeten kunnen worden en (3) waarbij applicatiedata gescheiden kunnen worden gehouden van gebruikersdata.

We beschouwen de URI-strategie voor een fictief bouwbedrijf genaamd digiCO. digiCO wil automatiseren en wil hiervoor een bedrijfsbrede ontologie opstellen en intern ook data beheren volgens deze ontologie. Daarnaast voert digiCO op elk moment een of meer projecten uit. Elk project heeft zijn eigen klant, hoewel projecten soms dezelfde klant kunnen hebben. Elke klant heeft zijn eigen ontologie. Klanten verwachten minimaal dat digiCO gegevens oplevert volgens de ontologie van de klant, en als er intensief wordt samengewerkt soms dat een project vanaf het begin is opgezet volgens de standaard van de klant.

Verder gaan we uit van de situatie dat alle gegevens worden opgeslagen in een triplestore, óók applicatiedata van het beheerprogramma.

De URI-strategie die we toepassen is als volgt.

```turtle
@prefix appdef:     <https://www.digico.nu/rdf/app/datamanager/def#>  # Applicatiedefinities voor de applicatie 'datamanager'
@prefix appid:      <https://www.digico.nu/rdf/app/datamanager/id#>   # Applicatie-instantiedata
@prefix digidef:    <https://www.digico.nu/rdf/def#> .                # Bedrijfsbrede definities
@prefix digiid:     <https://www.digico.nu/rdf/id#> .                 # Bedrijfsbrede instantiedata
@prefix proj123def: <https://www.digico.nu/rdf/project/123/def#> .    # Projectspecifieke definities
@prefix proj123id:  <https://www.digico.nu/rdf/project/123/id#> .     # Projectspecifieke instantiedata
```

# Naamgevingsconventies

In Sectie 8.4 van de NEN 2660-2 worden meerdere opties beschreven voor naamgeving. Hier nemen we de volgende voorschriften over:
- we gebruiken betekenisvrije codes (zoals een gegenereerde UUID-code);
- mensvriendelijke labels zijn verplicht in de vorm van een `skos:prefLabel` met taaltags @en en @nl (zie ook Sectie 'Annotaties').
- labels van concepten zijn bij voorkeur in enkelvoud (behalve bij aanduidingen van groepen).

> **Merk op dat we in dit document betekenisvolle namen gebruiken in de codevoorbeelden. Dit doen we enkel en alleen ten behoeve van de leesbaarheid in dit document. Bij naamgeving raden we altijd aan betekenisvrije codes te gebruiken.**

# Annotaties

Annotaties geven betekenis aan data. Sectie 8.5 in de NEN 2660-2 beschrijft een aantal annotatiebindingen en schrijft voor hoe deze te gebruiken. In deze handleiding nemen we de volgende annotaties over:
- gebruik `skos:prefLabel` als primair label;
- gebruik `skos:definition` voor tekstuele definities;
- gebruik `rdfs:seeAlso` om te verwijzen naar een SKOS-schema waarin een concept gedefinieerd staat;
- gebruik altijd taaltags (eventueel inclusief regio's). Voorbeelden: `"Bridge"@en, "Pechstrook"@nl-BE`.

De NEN 2660-2 spreekt geen voorkeur uit welke annotaties te gebruiken. De [NL-SBB](https://docs.geostandaarden.nl/nl-sbb/nl-sbb/#specificatie-begrip) doet dit wel in Sectie 4.3.2: daarin wordt gesteld dat elk concept een `skos:prefLabel` en een `skos:definition` met een taaltag moet hebben. We nemen dit hier over.

Aanvullend stellen we dat in een ontologie elk concept:
- een primair label moet hebben met taaltags `@en` en `@nl`;
- een tekstuele definitie zou moeten hebben  met taaltags `@en` en `@nl`.

# Ontologie

Het wordt als goede gewoonte beschouwd om een ontologie expliciet te definiëren d.m.v. `owl:Ontology`. Een voorbeelddefinitie wordt hieronder gegeven.

```turtle
<https://www.digico.nu/rdf/def> a owl:Ontology ;
    skos:prefLabel "digiCO Ontology"@en, "digiCO-ontologie"@nl ;
    skos:definition "This ontology describes the digiCO domain."@en , "Deze ontologie beschrijft het digiCO-domein."@nl ;
    rdfs:seeAlso "https://www.digico.nu"^^xsd:anyURI ;
.
```

Voor elke resource geven we expliciet aan tot welke ontologie deze behoort door middel van `rdfs:isDefinedBy`. Voor voorbeelden, zie de RDF-voorbeelden in de komende secties.

# Klassen

In de NEN 2660-2 zijn een aantal concepten voorgedefinieerd; dit wordt het topmodel genoemd. Dit wordt beschreven in Hoofdstuk 6 van de NEN 2660-2. Sectie 6.14 geeft een overzicht van alle concepten.

Wil een ontologie conform zijn aan de NEN 2660-2 dan moeten alle klassen (indirect) een subtype zijn van het NEN 2660-2-topmodel.

We modelleren een klasse als volgt.

```turtle
digidef:Gebouw a rdfs:Class ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    rdfs:subClassOf nen2660:RealObject ;
    skos:prefLabel "Building"@en, "Gebouw"@nl ;
    skos:definition "A structure with a roof and walls, typically intended to provide shelter or accommodation for human activities."@en, "Een structuur met een dak en muren, doorgaans bedoeld om onderdak te bieden of accommodatie te verschaffen voor menselijke activiteiten."@nl ;
.

digidef:GebouwShape a sh:NodeShape ;
    sh:targetClass digidef:Gebouw ;
.
```

Het volgende is een voorbeeld van een instantie van een klasse (hier een gebouw).

```turtle
digiid:Gebouw_001 a digidef:Gebouw .
```

# Attributen

Met een attribuut bedoelen we een eigenschap van een entiteit, zoals de naam of hoogte van een gebouw. Attributen kunnen worden toegewezen aan klassen en aan relaties. De NEN 2660-2 geeft veel vrijheid bij het definiëren en instantiëren van attributen, hoewel het op sommige vlakken ook beperkingen kent. Deze sectie bevat dan ook relatief veel ontwerpkeuzes.

Voor meer informatie over hoe de NEN 2660-2 attributen modelleert zie o.a. Sectie 6.12 en Sectie 8.2 van de NEN 2660-2.

We onderscheiden de volgende types waardetypes voor attributen:
- text: `xsd:string`;
- numeriek:
    - decimaal: `xsd:decimal`;
	- geheel getal: `xsd:integer`;
- tijdstip: `xsd:dateTimeStamp`;
- enumeratie.

Attributen kunnen volgens de NEN 2660-2 simpel en complex worden gedefinieerd; vanwege de wens om de metadata van een attribuut bij te houden kiezen we ervoor om dit complex te doen. Een attribuut wordt gemodelleerd als een `rdf:Property` met bijbehorende `sh:PropertyShape`. Textuele attributen hebben als `rdfs:range` een `nen2660:QualityValue`; numerieke attributen een `nen2660:QuantityValue`. Voor tijdstippen en enumeraties hebben we onze eigen concepten gecreëerd.

Op instantieniveau stellen we dat een attribuut maximaal één keer mag voorkomen. Dit dwingen we af via `sh:maxCount` in de `sh:PropertyShape`. Dit is een aanvulling op de NEN 2660-2. We geven geen `sh:minCount`, dus een attribuut mag ontbreken.

De waarde van een attribuut wordt gemodelleerd met `rdf:value`. Een attribuut hoeft echter geen `rdf:value` te hebben; deze mag ontbreken. Een ontbrekende waarde interpreteren we als een NULL-waarde.

## Text

Textuele attributen modelleren we als volgt.

```turtle
# RDFS
digidef:gebouwNaam a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Name"@en, "Naam"@nl ;
	skos:definition "Commonly-used name."@en, "Veelgebruikte naam."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QualityValue ;
.

# SHACL
digidef:GebouwNaamShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwNaam ;
    sh:class nen2660:QualityValue ;
    sh:maxCount 1 ;
.

digidef:GebouwShape sh:property digidef:GebouwNaamShape .
```

Voor de volledigheid geven we hier ook de definitie van `nen2660:QualityValue`.

```turtle
# Definities uit de NEN 2660-2

nen2660:QualityValue
    a rdfs:Class ;
    rdfs:seeAlso nen2660-term:QualityValue ;
    rdfs:subClassOf nen2660:Objectification ;
    skos:definition "The objectification of a value of a quality having a complex value like a simple value sec combined with other metadata or just a combination of simple values"@en ;
    skos:prefLabel "Quality value"@en ;
.

nen2660:QualityValue
    a sh:NodeShape ;
    sh:property [
        sh:path rdf:value ;
        sh:datatype xsd:string ;
    ] ;
.
```

Het volgende is een voorbeeld van een gebouwinstantie met een naam.

```turtle
digiid:Gebouw_001 digidef:GebouwNaam digiid:GebouwNaam_001 .
digiid:GebouwNaam_001 rdf:value "Bouwhuis"^^xsd:string .
```

## Decimaal

Een decimaal attribuut modelleren we als volgt.

```turtle
# RDFS
digidef:gebouwHoogte a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Height"@en, "Hoogte"@nl ;
	skos:definition "The height in meters."@en, "De hoogte in meters."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QuantityValue ;
.

# SHACL
digidef:GebouwHoogteShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwHoogte ;
    sh:class [
        a nen2660:QuantityValue ;
        sh:path rdf:value ;
        sh:datatype xsd:decimal ;  # We beperken ons tot xsd:decimal
    ] ;
    sh:maxCount 1 ;
.

digidef:GebouwShape sh:property digidef:GebouwHoogteShape .
```

Een `nen2660:QuantityValue` ondersteunt de datatypes `xsd:decimal`, `xsd:float` en `xsd:double`. Hier beperken we ons ten behoeve van eenduidigheid tot `xsd:decimal` door een beperking toe te voegen in de property shape.

Voor de volledigheid geven we hier ook de definitie van `nen2660:QuantityValue`.

```turtle
# Definities uit de NEN 2660-2

nen2660:QuantityValue
    a rdfs:Class ;
    rdfs:seeAlso nen2660-term:QuantityValue ;
    rdfs:subClassOf nen2660:Objectification ;
    skos:definition "The objectification of a value of a quantity (typically involving a quantity kind and a unit) having a complex value like a simple value sec combined with other metadata or just a combination of simple values"@en ;
    skos:prefLabel "Quantity value"@en ;
.

nen2660:QuantityValue
    a sh:NodeShape ;
    sh:property [
        sh:path rdf:value ;
        sh:or ( [ sh:datatype xsd:decimal ] [sh:datatype xsd:float] [ sh:datatype xsd:double ] );
    ] ;
.
```

Het volgende is een voorbeeld van een gebouw met een hoogte.

```turtle
digiid:Gebouw_001 digidef:GebouwHoogte digiid:GebouwHoogte_001 .
digiid:GebouwHoogte_001 rdf:value "4.2"^^xsd:decimal .
```

## Geheel getal

Attributen met een geheel getal als waardetype modelleren we als volgt. Net als bij decimalen leggen we een beperking op aan `nen2660:QuantityValue` in de property shape.

```turtle
# RDFS
digidef:gebouwHoogteInMM a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Height in mm"@en, "Hoogte in mm"@nl ;
	skos:definition "The height in millimeters."@en, "De hoogte in millimeters."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QuantityValue ;
.

# SHACL
digidef:GebouwHoogteInMMShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwHoogteInMM ;
    sh:class [
        a nen2660:QuantityValue ;
        sh:path rdf:value ;
        sh:datatype xsd:integer ;  # We beperken ons tot xsd:integer
    ] ;
    sh:maxCount 1 ;
.

digidef:GebouwShape sh:property digidef:GebouwHoogteInMMShape .
```

Het volgende is een voorbeeld van een gebouw met een hoogte in mm.

```turtle
digiid:Gebouw_001 digidef:GebouwHoogteInMM digiid:GebouwHoogteInMM_001 .
digiid:GebouwHoogteInMM_001 rdf:value "4200"^^xsd:integer .
```

## Tijdstip

De NEN 2660-2 heeft geen concept om attributen met het waardetype `xsd:dateTimeStamp` te objectificeren. Daarom maken we ons eigen concept `digidef:DateTimeValue`, analoog aan `nen2660:QuantityValue`.

```turtle
digidef:DateTimeValue a rdfs:Class ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    rdfs:subClassOf nen2660:Objectification ;
    skos:definition "The objectification of a datetime value."@en, "De objectificering van een datetime waarde."@en ;
    skos:prefLabel "Datetime value"@en ;
.

digidef:DateTimeValue a sh:NodeShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:property [
        sh:path rdf:value ;
        sh:datatype xsd:datetime ;
    ] ;
.
```

Attributen met een tijdstip als waardetype modelleren we als volgt. Merk op dat we een tijdstip als `xsd:dateTimeStamp` modelleren door middel van een extra beperking op `digidef:DateTimeValue`. We gebruiken `xsd:dateTimeStamp` omdat we in een databasesysteem altijd de tijdzone willen weten. We gebruiken deze constructie -- waarin `digidef:DateTimeValue` een gewone `xsd:datetime` als datatype heeft, en de extra beperking van `xsd:dateTimeStamp` wordt opgelegd via de property shape van het attribuut -- analoog aan hoe we dit hebben gedaan voor decimalen en gehele getallen ten aanzien van `nen2660:QuantityValue`. Dit vergroot de flexibiliteit van het concept `digidef:DateTimeValue`, dat kan worden hergebruikt voor scenarios waarin tijdzoneinformatie niet verplicht is.

```turtle
# RDFS
digidef:gebouwOpening a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Date of opening"@en, "Openingsdatum"@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range digidef:DateTimeValue ;
.

# SHACL
digidef:GebouwOpeningShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwOpening ;
    sh:class [
        a nen2660:QuantityValue ;
        sh:path rdf:value ;
        sh:datatype xsd:dateTimeStamp ;  # We beperken ons tot xsd:dateTimeStamp
    ] ;
    sh:maxCount 1 ;
.

digidef:GebouwShape sh:property digidef:GebouwOpeningShape .
```

Het volgende is een voorbeeld van een gebouw met een openingsdatum.

```turtle
digiid:Gebouw_001 digidef:GebouwOpening digiid:GebouwOpening_001 .
digiid:GebouwOpening_001 rdf:value "4200"^^xsd:integer .
```

## Enumeraties

De NEN 2660-2 heeft een concept voor enumeraties: `nen2660:EnumerationType`. Elke enumeratie moet een instantie zijn van `nen2660:EnumerationType` en de elementen instanties van de enumeratie zelf. Hieronder zien we een minimaal voorbeeld van een enumeratie.

```turtle
digidef:Gebouwkleuren a nen2660:EnumerationType, rdfs:Class ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Building colours"@en, "Gebouwkleuren"@nl ;  # Meervoud voor groepen
.

digiid:Geel a digidef:Gebouwkleuren ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
	skos:prefLabel "Yellow"@en , "Geel"@nl ;
.

digiid:Black a digidef:Gebouwkleuren ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
	skos:prefLabel "Black"@en, "Zwart"@nl ;
.
```

De NEN 2660-2 heeft geen concept om attributen met een enumeratie als waardetype te objectificeren. Daarom maken we ons eigen concept `digidef:EnumerationValue`. Dit is een geobjectificieerd attribuut met een `rdf:value` dat verwijst naar een `nen2660:EnumerationType`.

```turtle
digidef:EnumerationValue a rdfs:Class ;
    rdfs:subClassOf nen2660:Objectification ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:definition "The objectification of an enumeration value."@en ;
    skos:prefLabel "Enumeration value"@en ;
.

digidef:EnumerationValue a sh:NodeShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:property [
        sh:path rdf:value ;
        sh:class nen2660:EnumerationType ;
    ] ;
.
```

We modelleren een attribuut met een enumeratie als waardetype nu als volgt.

```turtle
# RDFS
digidef:gebouwKleur a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Building colour"@en, "Gebouwkleur"@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range digidef:EnumerationValue ;
.

# SHACL
digidef:GebouwKleurShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwKleur ;
    sh:class [
        a digidef:EnumerationValue ;
        sh:path rdf:value ;
        sh:class digidef:ebouwkleuren ;  # We beperken ons tot digidef:Gebouwkleuren
        sh:maxCount 1 ;  # Verwijder deze regel of pas deze regel aan als meerdere waardes mogelijk zijn
    ] ;
    sh:maxCount 1 ;
.

digidef:GebouwShape sh:property digidef:GebouwKleurShape .
```

Het volgende is een voorbeeld van een gebouw met twee kleuren (dus met `sh:maxCount` > 1 voor `rdf:value`, of zelfs zonder een `sh:maxCount`).

```turtle
digiid:Gebouw_001 digidef:GebouwKleur digiid:GebouwKleur_001 .
digiid:GebouwKleur_001 rdf:value digiid:Black .
digiid:GebouwKleur_001 rdf:value digiid:Yellow .
```

## Eenheden

In de NEN 2660-2 worden eenheden aangegeven via `nen2660:hasUnit`, welke verwijst naar een `qudt:Unit`. Een voorbeeld van een eenheid is bijvoorbeeld `unit:MilliM`. Voor een volledige lijst zie de [QUDT-ontologie](https://www.qudt.org/doc/DOC_VOCAB-UNITS.html). Eenheden hebben onder andere een `qudt:symbol` (hier: `"mm"`) en een `rdfs:label` (hier: `"Millimetre"@en`; er is geen @nl).

Eenheden kunnen zowel op typeniveau als op instantieniveau worden aangegeven. Als gegevens binnen een gesloten systeem blijven waarbinnen interpretatie van gegevens strikt is vastgelegd (bijvoorbeeld in een informatiemanagementsysteem) dan volstaat het om de eenheden eenmalig op typeniveau te definiëren als metadata. Zodra gegevens gedeeld worden is het aan te raden de eenheden ook aan te geven op instantieniveau, en om dit een vereiste te maken. In onderstaande voorbeeld doen we beiden.

De NEN 2660-2 schrijft voor om grootheden aan te geven via `nen2660:hasQuantityKind`, welke verwijst naar een `qudt:QuantityKind`. Hier gaan we verder niet in op het gebruik van grootheden, maar deze kunnen op dezelfde manier worden toegepast als eenheden.

We modelleren attribuut `digidef:GebouwHoogte` opnieuw, maar geven nu expliciet de eenheid aan.

```turtle
# RDFS
digidef:gebouwHoogte a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Height"@en, "Hoogte"@nl ;
	skos:definition "The height in meters."@en, "De hoogte in meters."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QuantityValue ;
    nen2660:hasUnit unit:M ;  # Metadata; ter info
.

# SHACL
digidef:GebouwHoogteShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwHoogte ;
    sh:class nen2660:QuantityValue ;
    sh:maxCount 1 ;
    sh:node [
        sh:property [
            sh:path rdf:value ;
            sh:datatype xsd:decimal ;
        ] ;
        sh:property [
            sh:path nen2660:hasUnit ;
            sh:hasValue unit:M ;  # Verplicht op instantieniveau
            sh:minCount 1 ;
        ] ;
    ] ;
.

digidef:GebouwShape sh:property digidef:GebouwHoogteShape .
```

Het effect van het toevoegen van `nen2660:hasUnit` aan de `rdf:Property` en aan de `sh:PropertyShape` is sterk verschillend. In het eerste geval geldt het statement als interpreteerbare metadata. In het tweede geval verplicht je om bij alle instanties van dit attribuut de eenheid expliciet toe te voegen.

Het volgende is een voorbeeld van een gebouw met een hoogte en een eenheid.

```turtle
digiid:Gebouw_001 digidef:gebouwHoogte digiid:GebouwHoogte_001 .
digiid:GebouwHoogte_001
    rdf:value "4.2"^^xsd:decimal ;
    nen2660:hasUnit unit:M ;
.
```

# Relaties

Een relatie wordt altijd tussen klassen gedefinieerd, en tussen instanties van klassen geïnstantieerd. We modelleren een geobjectificeerde relatie als een subklasse van een `nen2660:RelationReference`.

Voor de volledigheid geven we hier eerst de definities van `nen2660:RelationReference`.

```turtle
# Definities uit de NEN 2660-2
nen2660:RelationReference
  a rdfs:Class ;
  rdfs:seeAlso nen2660-term:RelationReference ;
  rdfs:subClassOf nen2660:Objectification ;
  skos:definition "The objectification of a reference for a relation having a complex value like a simple reference sec combined with other metadata or just a combination of simple references (n-ary relation)"@en ;
  skos:prefLabel "Relation reference"@en ;
.

nen2660:RelationReference
  a sh:NodeShape ;
  sh:property [
      sh:path rdf:value ;
      sh:datatype xsd:anyURI ;
    ] ;
.
```

We modelleren een relatie als volgt: als een attribuut (`rdf:Property`) die verwijst naar een geobjectificeerde relatie (een `rdfs:Class` die een subklasse is van `nen2660:RelationReference`). Onderstaande voorbeeld toont een relatie tussen twee gebouwen. 

```turtle
# RDFS
digidef:gebouwNaastgelegenGebouw a rdf:Property ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    skos:prefLabel "Neighbouring building"@en, "Naastgelegen gebouw"@nl ;
    skos:definition "A building that is physically close to the reference building."@en, "Een gebouw dat vlakbij het referentiegebouw staat."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range digidef:NaastgelegenGebouw ;
.

digidef:NaastgelegenGebouw a rdfs:Class ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    rdfs:subClassOf nen2660:RelationReference ;
    skos:prefLabel "Neighbouring building"@en, "Naastgelegen gebouw"@nl ;
    skos:definition "A building that is physically close to the reference building."@en, "Een gebouw dat vlakbij het referentiegebouw staat."@nl ;
.

# SHACL
digidef:GebouwNaastgelegenGebouwShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path digidef:gebouwNaastgelegenGebouw ;
    sh:class digidef:NaastgelegenGebouw ;
.

digidef:GebouwShape sh:property digidef:GebouwNaastgelegenGebouwShape .

digidef:NaastgelegenGebouwShape a sh:NodeShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:targetClass digidef:NaastgelegenGebouw ;
.

digidef:NaastgelegenGebouwValueShape a sh:PropertyShape ;
    rdfs:isDefinedBy <https://www.digico.nu/rdf/def> ;
    sh:path rdf:value ;
    sh:class digidef:Gebouw ;
    sh:minCount 1;
    sh:maxCount 1;
.

digidef:NaastgelegenGebouwShape sh:property digidef:NaastgelegenGebouwValueShape .
```

Elke geobjectificeerde relatie moet via `rdf:value` verwijzen naar precies één resource, in dit geval een `digidef:Gebouw`. Dit is anders dan bij de attributen, waar een `rdf:value` mag ontbreken om een NULL-waarde aan te geven. In het geval van relaties onderkennen we geen NULL-waardes en mogen relaties zonder een waarde daarom niet bestaan.

We geven zowel het attribuut als de relatie hetzelfde primaire label en definitie, omdat beide concepten samen de geobjectificeerde relatie vormen.

Het volgende is een voorbeeld van een gebouw dat naast een ander gebouw staat.

```turtle
digiid:Gebouw_002 a digidef:Gebouw .
digiid:Gebouw_001 digidef:gebouwNaastgelegenGebouw digidef:NaastgelegenGebouw_001 .
digidef:NaastgelegenGebouw_001 rdf:value digiid:Gebouw_002 .
```

# Temporele aspecten

Een belangrijke uitgangspunt in dit document is het kunnen bijhouden en terughalen van de volledige geschiedenis van een entiteit (objecttype, object, etc.). Er bestaat een [IMBOR best practice om het temporele aspectenmodel van de NEN 3610 te implementeren](https://docs.crow.nl/imbor/best-practices/#). Onze aanpak is een aanpassing en uitbreiding van Optie B: 3½-D met RDF Reïficatie (sic).

We gaan in dit document niet uit van geografische gegevens. Hoewel onze aanpak deels is gebaseerd op de NEN 3610, nemen we de NEN 3610 daarom niet volledig over. Zie Sectie [Aansluiting bij de NEN 3610](#aansluiting-bij-de-nen-3610) om een model wel te laten aansluiten bij de NEN 3610.

De aanpak die hier wordt beschreven ondersteunt de volgende gebruiksscenario's:
1. De volledige versie van een entiteit[^1] opvragen zoals deze was op een bepaald tijdstip.
2. Alle versies van een entiteit opvragen.
3. Van elke versie van een entiteit is het versienummer bekend, wanneer deze versie het meest recent gewijzigd is, en tot wanneer deze versie geldig is;
4. De versieinformatie van een object(type) of relatie(type) geeft weer hoeveel wijzigingen er op attribuut(type)niveau zijn gedaan en wanneer voor het laatst. Anders gezegd: elke wijziging van een attribuut(type) leidt er niet alleen toe dat de versieinformatie van het attribuut(type) zelf wordt bijgewerkt, maar ook van het object(type) of relatie(type) waar het attribuut(type) bijhoort.

[^1]: object(type), relatie(type), attribuut(type) of enumeratie(element)

## Aanpassingen en uitbreidingen ten opzichte van de best practice

Onze aanpak verschilt op de volgende vlakken van de IMBOR best practice:
1. we gaan uit van één tijdsdimensie (of tijdlijn) in plaats van twee;
2. we houden versienummering bij voor alle entiteiten;
3. we houden ook registratietijdstippen bij voor een object(type) of relatie(type).

We lichten alle drie de verschillen hier toe.

We modelleren versieinformatie via `nen3610:Registratie` bij. Dit concept bevat de attributen `

**Één tijdlijn**

De NEN 3610 past twee dimensies van temporaliteit (in de NEN 3610 tijdlijnen genoemd) toe:
1. wanneer een waarde geldig is, of was, in de werkelijke wereld. Dit wordt de geldigheidstijdlijn genoemd;
2. wanneer een waarde geregistreerd is. Dit wordt de registratietijdlijn genoemd.

In ons gebruiksscenario verwachten we het onderscheid tussen geldigheid en registratie niet nodig te hebben. In dit document gaan we daarom uit van één tijdlijn. Dit is een versimpeling ten opzichte van de NEN 3610. We stellen daarom de periode van geldigheid en registratie aan elkaar gelijk. Een waarde is geldig vanaf het moment dat het is geregistreerd, tot het moment dat het anders wordt geregistreerd. We gebruiken alleen de registratieattributen `nen3610:tijdstipRegistratie` en `nen3610:eindRegistratie`. We zouden ook de geldigheidsattributen `nen3610:beginGeldigbeheid` en `nen3610:eindGeldigbeheid` kunnen gebruiken, maar deze zouden altijd dezelfde waardes hebben als de registratieattributen en laten we daarom achterwege. 

Het is vrij eenvoudig om wél onderscheid te maken tussen de twee tijdlijnen: door ook gebruik te maken van de geldigheidsattributen `nen3610:beginGeldigbeheid` en `nen3610:eindGeldigbeheid`, direct naast de registratieattributen. Het enige dat verandert is de logica wanneer waardes worden gewijzigd, waarbij dan ook rekening moet worden gehouden vanaf en tot wanneer een waarde geldig is.

**Versienummering**

We houden van elk object(type), relatie(type), attribuut(type) of enumeratie(element) versieinformatie bij. Dit doen we door 

# Aansluiting bij de NEN 3610

