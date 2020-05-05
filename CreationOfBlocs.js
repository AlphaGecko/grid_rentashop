class CreationOfBlocs {

    constructor() {
        this.caseNumber = allCases.length;
        this.howManyBlocsHasBeenCreated = 0;
        this.howManyBlocsGonnaBeCreated = (this.caseNumber / 3);
        this.arrayBlocStorage = [];
        this.arrayCursor1 = 0;
        this.arrayCursor2 = 1;
        this.arrayCursor3 = 2;
    }

    /* Création d'un objet pour chaque bloc de trois cases, stockage des valeurs dans un tableau */

    blocCreation(firstCase, secondCase, thirdCase) {

        let virtualBloc = new OneBlocOf3Cases(
            firstCase["lien_image"], firstCase["lien_partenaire"], firstCase["alt"], firstCase["description_1"], firstCase["description_2"], 
            secondCase["lien_image"], secondCase["lien_partenaire"], secondCase["alt"], secondCase["description_1"], secondCase["description_2"], 
            thirdCase["lien_image"], thirdCase["lien_partenaire"], thirdCase["alt"], thirdCase["description_1"], thirdCase["description_2"], 
            this.howManyBlocsHasBeenCreated
        );  

        let blocContent = virtualBloc.addOneBlocToDOM();
        this.arrayBlocStorage[this.howManyBlocsHasBeenCreated] = blocContent;
        this.howManyBlocsHasBeenCreated++
    }

    /* Ajout les éléments dans un tableau */

    AddDatasToArray() {
        while (this.howManyBlocsGonnaBeCreated > 0) {
            this.blocCreation(
                allCases[this.arrayCursor1],
                allCases[this.arrayCursor2],
                allCases[this.arrayCursor3]
            );
            this.howManyBlocsGonnaBeCreated--
            this.arrayCursor1 = this.arrayCursor1 + 3;
            this.arrayCursor2 = this.arrayCursor2 + 3;
            this.arrayCursor3 = this.arrayCursor3 + 3;
        }
    }

    /* Styles dynamiques */


    AddStyleEventsToBlocs(repeats) {

        function oneBlocForStyle(numberOfTheBloc, numberOfTheCase) { return ('#number_' + numberOfTheBloc + ' .' + numberOfTheCase) };
        function oneBlocForStyleImage(numberOfTheBloc, numberOfTheCase) { return ('#number_' + numberOfTheBloc + ' .' + numberOfTheCase + ' img') };

        /* Modification dynamique des différentes opacités selon l'élément au survol de la souris ou le click*/ 

        // let isItADevice; 

        // if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi)) {
        //     isItADevice = true;
        // }


        // function dynamicExit(blocNumber) {
        //     let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
        //     let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
        //     let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
        //     let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
        //     let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
        //     let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');
        
        //     return(
        //     descriptionSite1.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet1.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionSite2.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet2.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionSite3.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet3.css({"opacity": "0", "z-index": "-5"})
        //     )
        // }
        
        // function dynamicEnter1(blocNumber) {
        
        //     let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
        //     let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
        //     let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
        //     let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
        //     let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
        //     let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');
        
        //     descriptionSite1.css({"opacity": "1", "z-index": "50"});
        //     descriptionProjet1.css({"opacity": "1", "z-index": "50"});
        //     descriptionSite2.css({"opacity": "0", "z-index": "-5"});
        //     descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
        //     descriptionSite3.css({"opacity": "0", "z-index": "-5"});
        //     descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        // }
        
        // function dynamicEnter2(blocNumber) {
        
        //     let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
        //     let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
        //     let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
        //     let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
        //     let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
        //     let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');
        
        //     return(
        //     descriptionSite1.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet1.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionSite2.css({"opacity": "1", "z-index": "50"}),
        //     descriptionProjet2.css({"opacity": "1", "z-index": "50"}),
        //     descriptionSite3.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet3.css({"opacity": "0", "z-index": "-5"})
        //     )
        // }
        
        // function dynamicEnter3(blocNumber) {
        
        //     let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1');
        //     let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
        //     let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
        //     let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
        //     let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3');
        //     let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');
        
        //     return(
        //     descriptionSite1.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet1.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionSite2.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionProjet2.css({"opacity": "0", "z-index": "-5"}),
        //     descriptionSite3.css({"opacity": "1", "z-index": "50"}),
        //     descriptionProjet3.css({"opacity": "1", "z-index": "50"})
        //     )
        // }
        
        // function dynamicClick1(blocNumber) {
        //     let descriptionSite1 = $('#number_' + blocNumber + ' .description_site_image_1'); 
        //     let descriptionProjet1 = $('#number_' + blocNumber + ' .description_projet_image_1');
        //     let allOtherDescriptions = $('.description_image');
        
        //     allOtherDescriptions.css({"opacity": "0 !important", "z-index": "-5 !important"}); 
        //     descriptionSite1.css({"opacity": "1 !important", "z-index": "50 !important"});  
        //     descriptionProjet1.css({"opacity": "1 !important", "z-index": "50 !important"}); 
        // }
        
        // function dynamicClick2(blocNumber) {
        //     let descriptionSite2 = $('#number_' + blocNumber + ' .description_site_image_2'); 
        //     let descriptionProjet2 = $('#number_' + blocNumber + ' .description_projet_image_2');
        //     let allOtherDescriptions = $('.description_image');
        
        //     allOtherDescriptions.css({"opacity": "0 !important", "z-index": "-5 !important"}); 
        //     descriptionSite2.css({"opacity": "1 !important", "z-index": "50 !important"});  
        //     descriptionProjet2.css({"opacity": "1 !important", "z-index": "50 !important"}); 
        // }
        
        // function dynamicClick3(blocNumber) {
        //     let descriptionSite3 = $('#number_' + blocNumber + ' .description_site_image_3'); 
        //     let descriptionProjet3 = $('#number_' + blocNumber + ' .description_projet_image_3');
        //     let allOtherDescriptions = $('.description_image');
        
        //     allOtherDescriptions.css({"opacity": "0 !important", "z-index": "-5 !important"}); 
        //     descriptionSite3.css({"opacity": "1 !important", "z-index": "50 !important"});  
        //     descriptionProjet3.css({"opacity": "1 !important", "z-index": "50 !important"}); 
        // }

        // case 1

        $(oneBlocForStyle(repeats, "firstCase")).mouseenter(function() {
            $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0;');
            $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0;');
        })

        $(oneBlocForStyle(repeats, "firstCase")).mouseleave(function () {

            $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 1;');
            $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 1;');
        })

        $(oneBlocForStyle(repeats, "firstCase")).click(function() { 
            $(".oneBloc img").attr('style', 'opacity: 1; z-index: 50;');
            $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0; z-index: -5;');
            $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0 ; z-index: -5;');
        });

        // case 2

        $(oneBlocForStyle(repeats, "secondCase")).mouseenter(function() {
            $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0;');
            $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0;');
        })

        $(oneBlocForStyle(repeats, "secondCase")).mouseleave(function () {

            $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 1;');
            $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 1;');
        })

        $(oneBlocForStyle(repeats, "secondCase")).click(function() { 
            $(".oneBloc img").attr('style', 'opacity: 1; z-index: 50;');
            $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0; z-index: -5;');
            $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0 ; z-index: -5;');
        });

        // case 3

        $(oneBlocForStyle(repeats, "thirdCase")).mouseenter(function() {
            $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0;');
            $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0;');
        })

        $(oneBlocForStyle(repeats, "thirdCase")).mouseleave(function () {

            $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 1;');
            $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 1;');
        })

        $(oneBlocForStyle(repeats, "thirdCase")).click(function() { 
            $(".oneBloc img").attr('style', 'opacity: 1; z-index: 50;');
            $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0; z-index: -5;');
            $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0 ; z-index: -5;');
        });

    }
}