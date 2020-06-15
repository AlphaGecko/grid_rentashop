Ce script à été créé par MANSOUR Jean-Loup (AlphaGecko) Pour l'entreprise RentaShop.

![Screenshot](./images/logo.jpg)

# grid_rentashop

## Introduction

Cet outil vous permet d'obtenir une galerie avec descriptions dynamiques au remplissage d'un tableau. 

Exemple : https://www.alpha-gecko.com/grid/

Ce que j'appelle "bloc" correspond à une ligne contenant 3 cases. 

Les "cases" sont donc les images relatives aux partenaires et les différents textes associés. Il doit toujours y en avoir trois par bloc. 

Vous ne devez modifier que le tableau dans "custom.js" pour vous servir de Grid_Rentashop.

Sur écran grands et moyens, un système d'apparition dynamique des déscriptions au survol des images est mis en place. Le style et la logique de l'application 
sont complètement modifiés pour les petits écrans et les appareils mobile, avec mise en place d'une barre avec un scrolling horizontal de la galerie et une apparition dynamique 
des éléments sous cette barre.  

Vous pouvez ajouter autants de blocs que vous le souhaitez dans le tableau de "custom.js", le script s'adaptera automatiquement.

Un test est lancé lors du démarrage du script, il défini les éventuels erreurs de l'utilisateur lors du remplissage du tableau de "custom.js", et sur
quelle(s) case(s) l'erreur est présente. Si le script ne fonctionne pas comme il faut alors que vous avez respecter toutes les consignes de ce guide, 
veuillez regarder la console de votre navigateur. 

## Vous pouvez supprimer :

Index.html qui est une page d'exemple, si vous avez compris la logique et le fonctionnement de Grid_Rentashop.  
Le dossier "images" et son contenu. Les différents scripts, sauf "galleryScript.min.js". 

## Structure pour trois cases, dans custom.js

case1 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",   
    description_1: "Description de site de l'image 2",  
    description_2: "Description de site de l'image 3"  
},  

case2 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",   
    description_1: "Description de site de l'image 1",   
    description_2: "Description du projet de l'image 3"  
},  

case3 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",    
    description_1: "Description du projet de l'image 1",   
    description_2: "Description du projet de l'image 2"  
},  

## !! IMPORTANT !!

Mettez toujours 3 cases par bloc afin de respecter la logique du script.   
Les scripts nécessitent obligatoirement un accès à la biblitothèque Jquery et Jquery UI.  
Afin de respecter votre demande, le style à été adapté au formatage de la bibliothèque foundation. Des bugs visuels surviendrons si la bibliothèque est absente. 

## Mode d'emploi 
  
Outil entièrement prêt à l'emploi. Il suffit d'ajouter dans le body dans votre page HTML ou PHP : 

Entre les balises head :  
  
    <link rel="stylesheet" href="dynamicGalery.css" media="screen"  type="text/css"/>  
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">  

Entre les balises body :   

    <div class="ref_container"></div>  
    <div id="loader"><div></div></div> 
    
    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script> 
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>  
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js" integrity="sha256-pRF3zifJRA9jXGv++b06qwtSqX1byFQOLjqa2PTEb2o=" crossorigin="anonymous"></script>  
    <script src="custom.js"></script>   
    <script src="galleryScript.min.js"></script>   

Les différentes données et styles dynamiques sont alors injectés dans le div avec la classe "ref_container". 
Bien entendu, si vous souhaitez appelez les bibliothèques Jquery, Jquery UI ou Foundation autrement que via un lien CDN, vous pouvez enlever les liens correspondants.   

Les images doivent être au format carré.    

Les différentes couleurs et style d'écritures sont modifiables directement dans des variables en haut du fichier dynamicGalery.scss. N'oubliez pas de compiler le fichier en CSS. 

Si le script ne fonctionne pas normalement alors que vous pensez avoir respecté toutes les consignes de ce guide,
veuillez modifier la variable initializeTest dans "custom.js" en :  

let initializeTest = true;   

Le résultat du test apparaît alors dans la console de votre navigateur.  
