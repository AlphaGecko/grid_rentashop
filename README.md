Ce script à été créé par MANSOUR Jean-Loup (AlphaGecko) Pour l'entreprise RentaShop. Il est libre de droit.

![Screenshot](./images/logo.jpg)

# grid_rentashop

## Introduction

Ce que j'appelle "bloc" correspond à une ligne contenant 3 cases. 

Les "cases" sont donc les images relatives aux partenaires et les différents textes associés. 

Vous ne devez modifier que "custom.js". 

Modifiez les styles (fonts, sizes etc...) de préférence avec la feuille de style de votre site ou application plutôt que celle de Grid_Rentashop. 

## Vous pouvez supprimer :

Index.html qui est une page d'exemple, si vous avez compris la logique et le fonctionnement de Grid_Rentashop.
Les images du dossier "images".

## Structure pour trois cases, dans custom.js

case1 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",   
    description_1: "Description de site de l'image 2",  
    description_2: "Description de site de l'image 3"  
}  

case2 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",   
    description_1: "Description de site de l'image 1",   
    description_2: "Description du projet de l'image 3"  
}  

case3 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",    
    description_1: "Description du projet de l'image 1",   
    description_2: "Description du projet de l'image 2"  
}  

## !! IMPORTANT !!

Créez toujours les cases trois par trois. Vous pouvez ajouter autants de blocs que vous le souhaitez, le script s'adaptera.

## Mode d'emploi 

Script entièrement prêt à l'emploi. Il ne reste plus qu'à ajouter dans votre page un container vide avec la classe "ref_container", à ajouter les script en bas de votre body (dans l'ordre dans lequel ils apparaissent dans la page d'exemple) et appeler la feuille de style dans le header.

## Note pour téléphone et tablette 

Si le script détecte que vous être sur téléphone ou tablette, tous les styles dynamiques seront supprimés à l'intégration de vos données dans le DOM. Les effets spécifiques au hover n'étant pas compatible avec une navigation sur ces mediums.
