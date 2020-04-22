/* Mettez ici les différentes données de chaque case */ 

case1 = {
    lien_image: "./images/image1.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire numéro 1", 
    description_site: "Ceci est ma description de site 1", 
    description_projet: "Ceci est ma description de projet 1", 
}

case2 = {
    lien_image: "./images/image2.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire numéro 2", 
    description_site: "Ceci est ma description de site 2", 
    description_projet: "Ceci est ma description de projet 2", 
}

case3 = {
    lien_image: "./images/image3.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire numéro 3", 
    description_site: "Ceci est ma description de site 3", 
    description_projet: "Ceci est ma description de projet 3"
}


/* Lancement du script selon les données que vous avez saisie. Enjoy ;) */

let howManyBlocs = 0;
let arrayStorage = [];

blocCreation = (firstCase, secondCase, thirdCase) => {
    let virtualBloc = new OneBloc(
        firstCase["lien_image"], firstCase["lien_partenaire"], firstCase["alt"], firstCase["description_site"], firstCase["description_projet"], 
        secondCase["lien_image"], secondCase["lien_partenaire"], secondCase["alt"], secondCase["description_site"], secondCase["description_projet"], 
        thirdCase["lien_image"], thirdCase["lien_partenaire"], thirdCase["alt"], thirdCase["description_site"], thirdCase["description_projet"]
    );
    let blocContent = virtualBloc.addOneBlocToDOM();
    arrayStorage[howManyBlocs] = blocContent;
    howManyBlocs++
}

blocCreation(case1, case2, case3);

arrayStorage.forEach(bloc => {
    $('#ref_container').html(bloc)
});

