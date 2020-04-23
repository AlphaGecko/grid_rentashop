Ce script à été créé par MANSOUR Jean-Loup (AlphaGecko).

![Screenshot](./images/logo.jpg)

# grid_rentashop

Ce que j'appelle "bloc" correspond à une ligne contenant 3 cases. 
Les "cases" sont donc les images relatives aux partenaires et les différents textes associés. 

### Structure pour trois cases 

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

Créez toujours les cases trois par trois, même si vous devez mettre des valeurs vides et des images neutres.

### Structure pour deux cases 

case1 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",   
    description_1: "",   
    description_2: "Description de site de l'image 3"  
}  

case2 = {  
    lien_image: "./relative_path/imageBlanche.jpg",  
    lien_partenaire: "",  
    alt: "",   
    description_1: "Description de site de l'image 1",   
    description_2: "Description du projet de l'image 3"  
}  

case3 = {  
    lien_image: "./relative_path/image.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "nom_du_partenaire",    
    description_1: "Description du projet de l'image 1",   
    description_2: ""  
}  

### Structure pour une case

case1 = {  
    lien_image: "./images/image_blanche.jpg",  
    lien_partenaire: "",  
    alt: "",   
    description_1: "Ceci est ma description de site de l'image 2",   
    description_2: ""  
}  

case2 = {  
    lien_image: "./images/image2.jpg",  
    lien_partenaire: "https://www.lienpartenaire.com",  
    alt: "partenaire_7",   
    description_1: "",   
    description_2: ""  
}

case3 = {  
    lien_image: "./images/image_blanche.jpg",  
    lien_partenaire: "",  
    alt: "",   
    description_1: "",  
    description_2: "Ceci est ma description du projet de l'image 2"  
}  
