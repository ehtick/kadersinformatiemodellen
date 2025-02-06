# Inleiding

Het doel van dit document is om handvatten te bieden voor het ontwikkelen van RDF-structuren die:
- voldoen aan de NEN 2660-2;
- gebruikt kunnen worden in een beheerprogramma om een of meerdere ontologieën te ontwikkelen en beheren, waarbij de volledige geschiedenis van een ontologie wordt bijgehouden;
- gebruikt kunnen worden in een beheerprogramma om instantiedata van een ontologie te creëren, te beheren en te verifiëren, waarbij de volledige geschiedenis van een instantie wordt bijgehouden;

Bij het ontwikkelen van dergelijke RDF-structuren moeten er een heleboel keuzes gemaakt worden. Sommige keuzes kunnen bovendien op meerdere manieren worden geïnterpreteerd. De NEN 2660-2 geeft hier richting aan, maar laat nog steeds veel keuzes en interpretaties open. Daar zijn ook goede redenen voor: een keuze dient vaak een bepaald doel. Dit document beschrijft een aantal specifieke keuzes en interpretaties. Deze zijn gemaakt met in gedachten de wens om via geautomatiseerde tooling een ontologie en de bijbehorende instantiedata te beheren. 

Dit document is een hulpmiddel dat nog sterk in bewerking is. Het is niet volledig en is op geen enkele wijze normatief. 

Tot nog toe maken we in dit document alleen gebruik van RDFS en SHACL (op de definitie van `owl:Ontology` na). In de toekomst zullen we waarschijnlijk ook gebruik maken van OWL.

We gaan in dit document uit van automatische verwerking van RDF-data waarbij metadata worden bijgehouden zoals een bewerkingsgeschiedenis. Daarom:
- houden we we RDFS en SHACL gescheiden;
- objectificeren we entiteiten zoals attributen en relaties;
- gebruiken we geen anonieme nodes;
- gebruiken we betekenisvrije codes voor naamgeving.

Merk op dat we in onze RDF-voorbeelden betekenisvolle namen gebruiken. Dit doen we enkel en alleen ten behoeve van de leesbaarheid in dit document. Bij naamgeving raden we altijd aan betekenisvrije codes te gebruiken.

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

# Annotaties

Annotaties geven betekenis aan data. Sectie 8.5 in de NEN 2660-2 beschrijft een aantal annotatiebindingen en schrijft voor hoe deze te gebruiken.

In deze handleiding nemen we de volgende voorschriften over van de NEN 2660-2:
- gebruik `skos:prefLabel` als primair label;
- gebruik `skos:definition` voor textuele definities;
- gebruik `rdfs:seeAlso` om te verwijzen naar een SKOS-schema waarin een concept gedefinieerd staat;
- gebruik altijd taaltags (eventueel inclusief regio's). Voorbeelden: `"Bridge"@en, "Pechstrook"@nl-BE`.

Aanvullend stellen we:
- elk concept in een ontologie moet een primair label hebben met taaltags `@en` en `@nl`.

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

# Klasses

In de NEN 2660-2 zijn een aantal concepten voorgedefinieerd. Dit noemen we het (NEN 2660-)topmodel. Dit wordt beschreven in Hoofdstuk 6 van de NEN 2660-2. Sectie 6.14 geeft een overzicht van alle concepten.

Wil een ontologie conform zijn aan de NEN 2660-2 dan moeten alle klasses (indirect) een subtype zijn van het NEN 2660-topmodel.

```turtle
# Ten behoeve van de leesbaarheid gebruiken we in onze voorbeelden semi-leesbare codes i.p.v. UUID.
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

# Attributen

Met een attribuut bedoelen we een eigenschap van een entiteit, zoals de naam of hoogte van een gebouw. Attributen kunnen worden toegewezen aan klasses en aan relaties. We onderscheiden de volgende types waardetypes voor attributen:
- text;
- numeriek:
    - decimaal;
	- geheel getal;
- tijdstip;
- enumeratie.

Attributen kunnen volgens de NEN 2660-2 simpel en complex worden gedefinieerd; vanwege de wens om de metadata van een attribuut bij te houden kiezen we ervoor om dit complex te doen. Een attribuut wordt gemodelleerd als een `rdf:Property` met bijbehorende `sh:PropertyShape`. Textuele attributen hebben als `rdfs:range` een `nen2660:QualityValue`; numerieke attributen een `nen2660:QuantityValue`. Voor tijdstippen en enumeraties hebben we onze eigen constructen gecreëerd.

Op instantieniveau stellen we dat een attribuut maximaal één keer mag voorkomen. Dit dwingen we af via `sh:maxCount` in de `sh:PropertyShape`. Dit is een aanvulling op de NEN 2660-2. We geven geen `sh:minCount`, dus een attribuut kan ontbreken.

Een attribuutwaarde (dus op instantieniveau) wordt gemodelleerd met `rdf:value`. Een attribuut hoeft echter geen `rdf:value` te hebben.

Voor meer informatie over hoe de NEN 2660-2 attributen modelleert zie o.a. Sectie 6.12 en Sectie 8.2 van de NEN 2660-2.

## Text

Textuele attributen modelleren we als volgt.

```turtle
# RDFS
digidef:GebouwNaam a rdf:Property ;
    skos:prefLabel "Name"@en, "Naam"@nl ;
	skos:definition "Commonly-used name."@en, "Veelgebruikte naam."@nl ;  # Volledige zin
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QualityValue ;
.

# SHACL
digidef:GebouwNaamShape a sh:PropertyShape ;
    sh:path digidef:GebouwNaam ;
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
digiid:Gebouw_001 a digidef:Gebouw ;
    digidef:GebouwNaam digiid:GebouwNaam_001 ;
.
digiid:GebouwNaam_001 rdf:value "Bouwhuis"^^xsd:string .
```

## Decimaal

Een decimaal attribuut modelleren we als volgt.

```turtle
# RDFS
digidef:GebouwHoogte a rdf:Property ;
    skos:prefLabel "Height"@en, "Hoogte"@nl ;
	skos:definition "The height in meters."@en, "De hoogte in meters."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QuantityValue ;
.

# SHACL
digidef:GebouwHoogteShape a sh:PropertyShape ;
    sh:path digidef:GebouwHoogte ;
    sh:class [
	  a nen2660:QuantityValue ;
      sh:path rdf:value ;
      sh:datatype xsd:decimal ;
    ] ;
    sh:maxCount 1 ;
.
digidef:GebouwShape sh:property digidef:GebouwHoogteShape .
```

Een `nen2660:QuantityValue` ondersteunt de datatypes `xsd:decimal`, `xsd:float` en `xsd:double`. Hier beperken we ons ten behoeve van eenduidigheid tot `xsd:decimal`.

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

## Gehele getallen

Attributen met gehele getallen modelleren we als volgt. We leggen een beperking op aan `nen2660:QuantityValue`.

```turtle
# RDFS
digidef:GebouwHoogteInMM a rdf:Property ;
    skos:prefLabel "Height in mm"@en, "Hoogte in mm"@nl ;
	skos:definition "The height in millimeters."@en, "De hoogte in millimeters."@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QuantityValue ;
.

# SHACL
digidef:GebouwHoogteInMMShape a sh:PropertyShape ;
    sh:path digidef:GebouwHoogteInMM ;
    sh:class [
	  a nen2660:QuantityValue ;
      sh:path rdf:value ;
      sh:datatype xsd:integer ;
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

## Tijdstippen

## Enumeraties

## Grootheden en eenheden

```turtle
# RDFS
digidef:GebouwHoogte a rdf:Property ;
    skos:prefLabel "Height"@en, "Hoogte"@nl ;
    rdfs:domain digidef:Gebouw ;
    rdfs:range nen2660:QuantityValue ;
    skos:definition "The height in mm."@en, "De hoogte in mm."@nl ;
    nen2660:hasQuantityKind quantitykind:Length ;
    nen2660:hasUnit unit:MilliM ;
.

# SHACL
digidef:GebouwHoogteShape a sh:PropertyShape ;
    sh:path digidef:GebouwHoogte ;
    sh:class nen2660:QualityValue ;
    sh:maxCount 1 ;
.
digidef:bldng-123-sh sh:property digidef:bldng-hght-123-ps .
```



Zoals kan worden afgeleid uit de definitie van `nen2660:QuantityValue` worden alleen de datatypes `xsd:decimal`, `xsd:float` en `xsd:double` ondersteund.

Het volgende is een voorbeeld van een gebouw met een hoogte.

```turtle
digiid:bldng-002 a digidef:bldng-123-c ;
    digidef:bldng-hght-123-p digiid:bldng-002-hght ;
.
digiid:bldng-002-hght a nen2660:QuantityValue ;
    rdf:value "10000"^^xsd:decimal ;
    nen2660:hasQuantityKind quantitykind:Length ;
    nen2660:hasUnit unit:MilliM ;
.
```

In dit voorbeeld zijn de grootheid en de eenheid ook aangegeven. Aangezien beide kunnen worden afgeleid van `digidef:bldng-hght-123-p` is dat niet per se nodig. Het is echter wel explicieter, en garandeert dat dit duidelijk is op het moment dat de instantiedata zonder hun definities worden verstuurd of 

Voor het aangeven van zowel grootheden (via `nen2660:hasQuantityKind`) als eenheden (via `nen2660:hasUnit`) wordt de QUDT-ontologie gebruikt. Een grootheid zoals `quantitykind:Length` heeft o.a. een `qudt:symbol` (hier: `"l"`) en een `rdfs:label` (hier: `"length"@en`; er is geen @nl). Zie [https://www.qudt.org/doc/DOC_VOCAB-QUANTITY-KINDS.html] voor een overzicht van grootheden. Een eenheid zoals `unit:MilliM` heeft o.a. een `qudt:symbol` (hier: `"mm"`) en een `rdfs:label` (hier: `"Millimetre"@en`; er is geen @nl). Zie [https://www.qudt.org/doc/DOC_VOCAB-UNITS.html] voor een overzicht van alle eenheden.

Voor de volledigheid geven we hier ook de definitie van `nen2660:QuantityValue`.

```turtle
nen2660:QuantityValue
  a sh:NodeShape ;
  sh:property [
      sh:path rdf:value ;
      sh:or ( [ sh:datatype xsd:decimal ] [sh:datatype xsd:float] [ sh:datatype xsd:double ] );
    ] ;
.
```

# Relaties

Een relatie wordt altijd tussen klasses gelegd.

Dit is een simpele relatie:

```turtle
# RDFS
digidef:bldng-nghbr-123-p a rdf:Property ;
  rdfs:domain digidef:bldng-123-c ;
  rdfs:range digidef:bldng-123-c ;
  skos:prefLabel "Neighbouring building"@en, "Naastgelegen gebouw"@nl ;
.
# SHACL
digidef:bldng-nghbr-123-ps a sh:PropertyShape ;
    sh:path digidef:bldng-nghbr-123-p ;
    sh:datatype digidef:bldng-123-c;
.
digidef:bldng-123-sh sh:property digidef:bldng-nghbr-123-ps .
```

Het volgende is een voorbeeld van twee gebouwen die naast elkaar staan.

```turtle
digiid:bldng-003 a digidef:bldng-123-c .
digiid:bldng-004 a digidef:bldng-123-c .
digiid:bldng-003 digidef:bldng-nghbr-123-p digiid:bldng-004 .
```

Bij een complexe relatie objectificeren we de relatie. Dit geeft ons de gelegenheid om de relatie uit te breiden met attributen, en om 

Voor een complexe relatie geven we eerst de definities van `nen2660:RelationReference`.

```turtle
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

Dit is een definitie van een complexe relatie:

```turtle
# RDFS
digidef:bldng-nghbr-123-c a rdfs:Class ;
  rdfs:subClassOf nen2660:RelationReference ;
  skos:prefLabel "Neighbouring building"@en, "Naastgelegen gebouw"@nl ;
.
# Geen SHACL shapes 
```

Het volgende is een voorbeeld van twee gebouwen die naast elkaar staan.

```turtle
digiid:bldng-005 a digidef:bldng-123-c .
digiid:bldng-006 a digidef:bldng-123-c .
digiid:bldng-nghbrs-001 a digidef:bldng-nghbr-123-c ;
  rdf:value "digiid:bldng-005"^^xsd:anyURI ;
  rdf:value "digiid:bldng-006"^^xsd:anyURI ;
.
```