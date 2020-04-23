/* 
Ce que j'appelle "bloc" correspond à une ligne contenant 3 cases. 
Les "cases" sont donc les images relatives aux partenaires et les différents textes associés. 

La structure sera toujours la suivante : 

case1 = {
    lien_image: "./relative_path/image.jpg",
    lien_partenaire: "https://www.lienpartenairecom",
    alt: "nom_du_partenaire", 
    description_1: "Ceci est ma description de site de l'image 2", 
    description_2: "Ceci est ma description de site de l'image 3"
}

case2 = {
    lien_image: "./images/image2.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_2", 
    description_1: "Ceci est ma description de site de l'image 1", 
    description_2: "Ceci est ma description du projet de l'image 3"
}

case3 = {
    lien_image: "./images/image3.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_3", 
    description_1: "Ceci est ma description du projet de l'image 1", 
    description_2: "Ceci est ma description du projet de l'image 2"
}

!! IMPORTANT !! 

Créez toujours les cases 3 par trois, même si vous devez mettre des valeurs vides.

Si votre dernier bloc contient deux cases : 

case pleine 
case vide avec image blanche
case pleine

Si votre dernier bloc ne contient qu'une seule case : 

case vide avec image blanche
case pleine
case vide avec image blanche
*/


/*************************************************************/
/***** Mettez ici les différentes données de chaque case *****/ 
/*************************************************************/

// bloc1

case1 = {
    lien_image: "./images/image1.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_1", 
    description_1: "Ceci est ma description de site de l'image 2", 
    description_2: "Ceci est ma description de site de l'image 3"
}

case2 = {
    lien_image: "./images/image2.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_2", 
    description_1: "Ceci est ma description de site de l'image 1", 
    description_2: "Ceci est ma description du projet de l'image 3"
}

case3 = {
    lien_image: "./images/image3.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_3", 
    description_1: "Ceci est ma description du projet de l'image 1", 
    description_2: "Ceci est ma description du projet de l'image 2"
}

// bloc2

case4 = {
    lien_image: "./images/image1.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_4", 
    description_1: "Ceci est ma description de site de l'image 2", 
    description_2: "Ceci est ma description de site de l'image 3"
}

case5 = {
    lien_image: "./images/image2.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_5", 
    description_1: "Ceci est ma description de site de l'image 1", 
    description_2: "Ceci est ma description du projet de l'image 3" 
}

case6 = {
    lien_image: "./images/image3.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_6", 
    description_1: "Ceci est ma description du projet de l'image 1", 
    description_2: "Ceci est ma description du projet de l'image 2"
}

// bloc 3 

case7 = {
    lien_image: "./images/image_vide.jpg",
    lien_partenaire: "",
    alt: "", 
    description_1: "Ceci est ma description de site de l'image 2", 
    description_2: ""
}

case8 = {
    lien_image: "./images/image1.jpg",
    lien_partenaire: "https://www.google.com",
    alt: "partenaire_7", 
    description_1: "", 
    description_2: ""
}

case9 = {
    lien_image: "./images/image_vide.jpg",
    lien_partenaire: "",
    alt: "", 
    description_1: "",
    description_2: "Ceci est ma description du projet de l'image 2"
}



// Combien de case(s) y a t-il en tout ? (Multiple de 3 obligatoire) 

const caseNumber = 9;





/*********************************************************************************/
/***** Lancement du script selon les données que vous avez saisies. Enjoy ;) *****/
/*********************************************************************************/





let howManyBlocsHasBeenCreated = 0;
let howManyBlocsGonnaBeCreated;
let arrayBlocStorage = [];

caseNumber % 3 === 0 ? howManyBlocsGonnaBeCreated = (caseNumber / 3) : alert("Erreur : Le nombre de cases que vous avez entré n'est pas un multiple de 3."); 

/* Modification dynamique des différentes opacités selon l'élément au survol de la souris */ 

const dynamicExit = (blocNumber) => {
    let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');

    return(
        descriptionSite1.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet1.css({"opacity": "0", "z-index": "-5"}),
        descriptionSite2.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet2.css({"opacity": "0", "z-index": "-5"}),
        descriptionSite3.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet3.css({"opacity": "0", "z-index": "-5"})
    )
}

const dynamicEnter1 = (blocNumber) => {

    let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');

    return(
        descriptionSite1.css({"opacity": "1", "z-index": "50"}),
        descriptionProjet1.css({"opacity": "1", "z-index": "50"}),
        descriptionSite2.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet2.css({"opacity": "0", "z-index": "-5"}),
        descriptionSite3.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet3.css({"opacity": "0", "z-index": "-5"})
    )
}

const dynamicEnter2 = (blocNumber) => {

    let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');

    return(
        descriptionSite1.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet1.css({"opacity": "0", "z-index": "-5"}),
        descriptionSite2.css({"opacity": "1", "z-index": "50"}),
        descriptionProjet2.css({"opacity": "1", "z-index": "50"}),
        descriptionSite3.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet3.css({"opacity": "0", "z-index": "-5"})
    )
}

const dynamicEnter3 = (blocNumber) => {

    let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');

    return(
        descriptionSite1.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet1.css({"opacity": "0", "z-index": "-5"}),
        descriptionSite2.css({"opacity": "0", "z-index": "-5"}),
        descriptionProjet2.css({"opacity": "0", "z-index": "-5"}),
        descriptionSite3.css({"opacity": "1", "z-index": "50"}),
        descriptionProjet3.css({"opacity": "1", "z-index": "50"})
    )
}

/* Création des blocs */ 

const blocCreation3Cases = (firstCase, secondCase, thirdCase) => {

    let virtualBloc = new OneBlocOf3Cases(
        firstCase["lien_image"], firstCase["lien_partenaire"], firstCase["alt"], firstCase["description_1"], firstCase["description_2"], 
        secondCase["lien_image"], secondCase["lien_partenaire"], secondCase["alt"], secondCase["description_1"], secondCase["description_2"], 
        thirdCase["lien_image"], thirdCase["lien_partenaire"], thirdCase["alt"], thirdCase["description_1"], thirdCase["description_2"], 
        howManyBlocsHasBeenCreated
    );
    
    let blocContent = virtualBloc.addOneBlocToDOM();
    arrayBlocStorage[howManyBlocsHasBeenCreated] = blocContent;
    howManyBlocsHasBeenCreated++
}

if (caseNumber % 3 === 0) {

    switch (howManyBlocsGonnaBeCreated) {
        case 1 : 
        blocCreation3Cases(case1, case2, case3);
        break;

        case 2 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        break;

        case 3 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        blocCreation3Cases(case7, case8, case9);
        break;

        case 4 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        blocCreation3Cases(case7, case8, case9);
        blocCreation3Cases(case10, case11, case12);
        break;

        case 5 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        blocCreation3Cases(case7, case8, case9);
        blocCreation3Cases(case10, case11, case12);
        blocCreation3Cases(case13, case14, case15);
        break;

        case 6 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        blocCreation3Cases(case7, case8, case9);
        blocCreation3Cases(case10, case11, case12);
        blocCreation3Cases(case13, case14, case15);
        blocCreation3Cases(case16, case17, case18);
        break;

        case 7 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        blocCreation3Cases(case7, case8, case9);
        blocCreation3Cases(case10, case11, case12);
        blocCreation3Cases(case13, case14, case15);
        blocCreation3Cases(case16, case17, case18);
        blocCreation3Cases(case19, case20, case21);
        break;

        case 8 : 
        blocCreation3Cases(case1, case2, case3);
        blocCreation3Cases(case4, case5, case6);
        blocCreation3Cases(case7, case8, case9);
        blocCreation3Cases(case10, case11, case12);
        blocCreation3Cases(case13, case14, case15);
        blocCreation3Cases(case16, case17, case18);
        blocCreation3Cases(case19, case20, case21);
        blocCreation3Cases(case22, case23, case24);
        break;

        default : 
        blocCreation3Cases(case1, case2, case3);
        break;
    }
} 


arrayBlocStorage.forEach(bloc => {
    $('#ref_container').append(bloc);
});