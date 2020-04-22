/* Mettez ici les différentes données de chaque case */ 

case1 = {
    lien_image: "./images/image1.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_1", 
    description_site: "Ceci est ma description de site de l'image 2", 
    description_projet: "Ceci est ma description de site de l'image 3"
}

case2 = {
    lien_image: "./images/image2.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_2", 
    description_site: "Ceci est ma description de site de l'image 1", 
    description_projet: "Ceci est ma description du projet de l'image 3"
}

case3 = {
    lien_image: "./images/image3.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_3", 
    description_site: "Ceci est ma description du projet de l'image 1", 
    description_projet: "Ceci est ma description du projet de l'image 2"
}

case4 = {
    lien_image: "./images/image1.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_4", 
    description_site: "Ceci est ma description de site de l'image 2", 
    description_projet: "Ceci est ma description de site de l'image 3"
}

case5 = {
    lien_image: "./images/image2.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_5", 
    description_site: "Ceci est ma description de site de l'image 1", 
    description_projet: "Ceci est ma description du projet de l'image 3" 
}

case6 = {
    lien_image: "./images/image3.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_6", 
    description_site: "Ceci est ma description du projet de l'image 1", 
    description_projet: "Ceci est ma description du projet de l'image 2"
}

/* Lancement du script selon les données que vous avez saisie. Enjoy ;) */

let howManyBlocs = 0;
let arrayStorage = [];

blocCreation = (firstCase, secondCase, thirdCase) => {
    let virtualBloc = new OneBloc(
        firstCase["lien_image"], firstCase["lien_partenaire"], firstCase["alt"], firstCase["description_site"], firstCase["description_projet"], 
        secondCase["lien_image"], secondCase["lien_partenaire"], secondCase["alt"], secondCase["description_site"], secondCase["description_projet"], 
        thirdCase["lien_image"], thirdCase["lien_partenaire"], thirdCase["alt"], thirdCase["description_site"], thirdCase["description_projet"], 
        howManyBlocs
    );
    let blocContent = virtualBloc.addOneBlocToDOM();
    arrayStorage[howManyBlocs] = blocContent;
    howManyBlocs++
}

blocCreation(case1, case2, case3);
blocCreation(case4, case5, case6);

arrayStorage.forEach(bloc => {
    $('#ref_container').append(bloc);
});