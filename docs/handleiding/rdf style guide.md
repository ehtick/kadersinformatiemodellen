## URI-strategie



## Enumerations

Definitions:

```
# N.B. The use of human-readable identifiers is purely for reasons of readability. In a production environment it is strongly advised not to use such identifiers, but instead use non-significant identifiers such as UUIDs.

@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix nen2660: <https://w3id.org/nen2660/def#> .
@prefix digiDEF: <https://digigo.nu/example/def#> .

# The enumeration itself

digiDEF:StyleGuideColors
	a rdfs:Class ;  # Similar to the nen2660 examples, but why? nen2660:EnumerationType is already a rdfs:Class
	a nen2660:EnumerationType ;
	skos:prefLabel "Style guide colours"@en ;  # Plural
	skos:prefLabel "Huisstijlkleuren"@nl ;
	skos:definition "The available colours in the digiGO style guide."@en
	skos:definition "De beschikbare kleuren in de huisstijl van digiGO."@nl

# The enumeration elements

digiDEF:Yellow
	a digiDEF:StyleGuideColors ;
	skos:prefLabel "Yellow"@en ;
	skos:prefLabel "Geel"@nl ;
    
    # Should we include a definition here? Seems unnecessary.
.

digiDEF:Black
	a digiDEF:StyleGuideColors ;
	skos:prefLabel "Black"@en ;
	skos:prefLabel "Zwart"@nl ;
.

# A bare-bones definition of an digiGO concept that could use the enumeration

digiDEF:Presentation
    rdfs:subClassOf nen2660:InformatieObject ;
    skos:prefLabel "Presentation"@en ;
    skos:prefLabel "Presentatie"@nl ;
    skos:definition "A digiGO PowerPoint presentation."@en
    skos:definition "Een digiGO-PowerPointpresentatie."@nl
.

# The property that lets a concept use the enumeration

digiDEF:usesColor
    a rdf:Property ;
    rdfs:domain digiDEF:Presentation ;
	rdfs:range digiDEF:StyleGuideColors ;
    skos:prefLabel "color used"@en ;  # lower case
    skos:prefLabel "gebruikte kleur"@nl ;
    skos:definition "The use of a style guide colour by a presentation."@en ;
    skos:definition "Het gebruik van een huisstijlkleur door een presentatie."@nl ;
.

```

Individuals:

```
# The use of human-readable identifiers is purely for reasons of readability. In a production environment it is strongly advised not to use such identifiers, but instead use non-significant identifiers such as UUIDs.

@prefix digiID: <https://digigo.nu/example/id#> .
@prefix digiDEF: <https://digigo.nu/example/def#> .

# Simple example

digiID:pres1
    a digiDEF:Presentation ;
    digiDEF:usesColor digiDEF:Yellow ;
.

# Since there is no constraint, you can assign multiple colours used.

digiID:pres1
    a digiDEF:Presentation ;
    digiDEF:usesColor digiDEF:Yellow ;
    digiDEF:usesColor digiDEF:Black
.
```
