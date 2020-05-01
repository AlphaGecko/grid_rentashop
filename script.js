/************************************************************************************************/
/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/
/************************************************************************************************/


/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

let creationOfBlocs = new CreationOfBlocs();
creationOfBlocs.AddDatasToArray();

/* Lancement des tests avant d'insérer les éléments au DOM */ 

let testingUserEntries = new BlocsTest();
testingUserEntries.initializeTests(); 

/* Si les tests sont bons, intégration des blocs HTML du tableau au DOM */ 

if (testingUserEntries.gridTest === "ok") {
    console.log("Fin des tests. Ajout des éléments au DOM");
    creationOfBlocs.arrayBlocStorage.forEach(bloc => {
        $('.ref_container').append(bloc);
    });
} else {
    console.log("Fin des tests. Erreur");
    $('.ref_container').append(testingUserEntries.testError);
}

/* Rajout du style dynamique, sauf pour les téléphones et tablettes */ 

if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi)) {

    console.log('Téléphone ou tablette detecté, annulation des styles dynamiques')

} else {

     /* Modification dynamique des différentes opacités selon l'élément au survol de la souris */ 

     dynamicExit = (blocNumber) => {
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

    dynamicEnter1 = (blocNumber) => {

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

    dynamicEnter2 = (blocNumber) => {

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

    dynamicEnter3 = (blocNumber) => {

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

    /* Ajout des styles dynamiques au DOM */

    for (let i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
        creationOfBlocs.getAllTheBlocsForStyle(i);
    }       
}




