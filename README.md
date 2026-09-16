# Squad page

Ontwerp en maak met een team een Squad Page met HTML, CSS en JS.

<!--De instructie van deze leertaak staan in de [INSTRUCTIONS](https://github.com/fdnd-task/your-tribe-squad-page/blob/main/docs/INSTRUCTIONS.md)-->
De instructie voor deze leertaak staan in de [WIKI](https://github.com/fdnd-task/your-tribe-squad-page/wiki)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

***
# Squad Page team Full Circle
Dit is onze ontwerp van de squad page. Gemaakt door Aliya, Miriale en Sam!
[Full Circle - Squad Page Link!](https://edu.nl/t4r47)

<img width="341" height="349" alt="Screenshot 2026-09-16 at 16 14 36" src="https://github.com/user-attachments/assets/24c04a1f-c5db-430f-95bd-f8ecd7793060" />

# Inhoudsopgave
- [Beschrijving](#beschrijving)
- [Gebruik](#gebruik)
- [Kenmerken](#kenmerken)
- [Bronnen](#bronnen)

## Beschrijving
Om de klas beter te leren kennen hebben wij, als team, een squad page gemaakt met een polaroid en daarop een foto van zijn/haar favoriete lied en hun visitekaartje die ze in week 1 hebben gemaakt. 

## Gebruik
Twee pagina's ( Home page met alle polaroids en een Go-To pagina met een paar leuke plekken binnen/rondom Amstelkampus )
De namen die op de polaroids staan zijn klikbaar en zijn gekoppeld aan de visitekaartje de hij/zij hebben geprogrammeerd
De Spotify covers op elke polaroid zijn ook klikbaar en zijn gekoppeld aan de spotify link van zijn/haar favorite lied.

## Kenmerken
Wij hebben gebruik gemaakt van 3 programmeer talen: [HTML](#html), [CSS](#css), [JS](#javascript)

### HTML
Hieronder staat de basis structuur uitgelegd met de setting in de HEAD en opmaak van de BODY:
In de `<head>` word een CSS file geladen. Een local CSS file met specifieke styling voor deze pagina.
 ```
<link rel="stylesheet" href="styles/styles.css">
```

### Body
De body bestaat uit 1 section en daarin ongeveer 40 articles voor de kaarten.


### CSS
In de CSS worden er externe fonts geladen: Archivo Black en Rock Salt. 

```
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Rock+Salt&display=swap%27');
```

#### font-size
De `h1` voor titel 'Squad Page' staat op `font-size: 60px;` en font type: Archivo Black
De `h2` voor de text FDND staat op `font-size: 27vw;` om het ook gelijk responsive te maken en de font type is: Archivo Black

#### text-decoration
Omdat de namen op elk kaart een link is hebben we de `<a>` tag gebruikt en voor de styling hebben we:
```
    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        text-decoration: underline;
    }
```
En de font voor de namen is Rock Salt.

#### Responsive
Naast het ontwerpen van een desktopversie hebben wij ons project ook responsive gemaakt, zodat het niet alleen toegankelijk is op laptops, maar ook op tablets en telefoons:
<img width="1463" height="832" alt="Screenshot 2026-09-16 at 16 22 27" src="https://github.com/user-attachments/assets/7a342d69-e854-49ba-95c9-ef401d859944" />
<img width="340" height="712" alt="Screenshot 2026-09-16 at 16 25 00" src="https://github.com/user-attachments/assets/07791ea8-0d5f-489c-8537-e0d700e81ada" /> <img width="558" height="744" alt="Screenshot 2026-09-16 at 16 26 55" src="https://github.com/user-attachments/assets/588b3734-45fe-4661-ac1c-be01be509f11" />





### JavaScript
Om alle 40 kaarten in een keer rond de circle te plaatsen hebben we JavaScript gebruikt zodat het niet een voor een in CSS hoeft.

 ## Bronnen
 - [Spotify](https://open.spotify.com)
 - [Google Fonts](https://fonts.google.com)
 - [Google Forms](https://workspace.google.com/products/forms/)
