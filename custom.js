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

const dynamicHoverPerBloc1 = (blocNumber) => {

    image1 = $('#number_' + blocNumber + ' .firstCase img');
    descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    image2 = $('#number_' + blocNumber + ' .secondCase img');
    descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    image3 = $('#number_' + blocNumber + ' .thirdCase img');
    descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    descriptionProjet3 = $('#number_' + blocNumber + ' description_projet_image_3');

    image1.hover(
        function () {
            descriptionSite1.css({"opacity": "1", "z-index": "50"});
            descriptionProjet1.css({"opacity": "1", "z-index": "50"});
            descriptionSite2.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
            descriptionSite3.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        }, function () {
            descriptionSite1.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet1.css({"opacity": "0", "z-index": "-5"});
            descriptionSite2.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
            descriptionSite3.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        }
    )
}

const dynamicHoverPerBloc2 = (blocNumber) => {
    image1 = $('#number_' + blocNumber + ' .firstCase img');
    descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    image2 = $('#number_' + blocNumber + ' .secondCase img');
    descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    image3 = $('#number_' + blocNumber + ' .thirdCase img');
    descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    descriptionProjet3 = $('#number_' + blocNumber + ' description_projet_image_3');

    image2.hover(
        function () {
            descriptionSite1.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet1.css({"opacity": "0", "z-index": "-5"});
            descriptionSite2.css({"opacity": "1", "z-index": "50"});
            descriptionProjet2.css({"opacity": "1", "z-index": "50"});
            descriptionSite3.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        }, function () {
            descriptionSite1.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet1.css({"opacity": "0", "z-index": "-5"});
            descriptionSite2.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
            descriptionSite3.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        }
    )
}

const dynamicHoverPerBloc3 = (blocNumber) => {
    image1 = $('#number_' + blocNumber + ' .firstCase img');
    descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
    descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
    image2 = $('#number_' + blocNumber + ' .secondCase img');
    descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
    descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
    image3 = $('#number_' + blocNumber + ' .thirdCase img');
    descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
    descriptionProjet3 = $('#number_' + blocNumber + ' description_projet_image_3');

    image3.hover(
        function () {
            descriptionSite1.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet1.css({"opacity": "0", "z-index": "-5"});
            descriptionSite2.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
            descriptionSite3.css({"opacity": "1", "z-index": "50"});
            descriptionProjet3.css({"opacity": "1", "z-index": "50"});
        }, function () {
            descriptionSite1.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet1.css({"opacity": "0", "z-index": "-5"});
            descriptionSite2.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
            descriptionSite3.css({"opacity": "0", "z-index": "-5"});
            descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        }
    )
}

const blocCreation = (firstCase, secondCase, thirdCase) => {

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