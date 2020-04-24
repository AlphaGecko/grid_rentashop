/************************************************************************************************/
/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/
/************************************************************************************************/


const caseNumber = allCases.length; 
let howManyBlocsHasBeenCreated = 0;
let howManyBlocsGonnaBeCreated = (caseNumber / 3);
let arrayBlocStorage = [];
let arrayCursor1 = 0;
let arrayCursor2 = 1; 
let arrayCursor3 = 2; 

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

/* Création d'un objet pour chaque bloc de trois cases, stockage des valeurs dans un tableau */ 

const blocCreation = (firstCase, secondCase, thirdCase) => {

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

/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

while (howManyBlocsGonnaBeCreated > 0) {
    blocCreation(allCases[arrayCursor1], allCases[arrayCursor2], allCases[arrayCursor3]); 
    howManyBlocsGonnaBeCreated--
    arrayCursor1 = arrayCursor1 + 3;
    arrayCursor2 = arrayCursor2 + 3;
    arrayCursor3 = arrayCursor3 + 3;
}

/* Lancement des tests avant d'insérer les éléments au DOM */ 

let testingUserEntries = new BlocsTest ();
testingUserEntries.initializeTests(); 

/* Si les tests sont bons, intégration des blocs au DOM */ 

if (testingUserEntries.gridTest === "ok") {
    console.log("Fin des tests. Ajout des éléments au DOM");
    arrayBlocStorage.forEach(bloc => {
        $('#ref_container').append(bloc);
    });
} else {
    console.log("Fin des tests. Erreur");
    $('#ref_container').append(testingUserEntries.testError);
}