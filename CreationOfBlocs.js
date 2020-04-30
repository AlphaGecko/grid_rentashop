class CreationOfBlocs {
    caseNumber = allCases.length
    howManyBlocsHasBeenCreated = 0;
    howManyBlocsGonnaBeCreated = (this.caseNumber / 3);
    arrayBlocStorage = [];
    arrayCursor1 = 0;
    arrayCursor2 = 1; 
    arrayCursor3 = 2; 

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

    /* Création d'un objet pour chaque bloc de trois cases, stockage des valeurs dans un tableau */ 

    blocCreation = (firstCase, secondCase, thirdCase) => {

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

    /* Ajout des éléments virtuels au DOM */ 

    AddDatasToDom = () => {
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

    getAllTheBlocsForStyle = (repeats) => {

        let oneBlocForStyle = (numberOfTheBloc, numberOfTheCase) => { return ('#number_' + numberOfTheBloc + ' .' + numberOfTheCase)};
        let oneBlocForStyleImage = (numberOfTheBloc, numberOfTheCase) => { return ('#number_' + numberOfTheBloc + ' .' + numberOfTheCase + ' img')};

        document.querySelector(oneBlocForStyle(repeats, "firstCase")).addEventListener("mouseenter", function() {
            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 0; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 0; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
        })  
    
        document.querySelector(oneBlocForStyle(repeats, "firstCase")).addEventListener("mouseleave", function() {
            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
        })  

        document.querySelector(oneBlocForStyle(repeats, "secondCase")).addEventListener("mouseenter", function() {
            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 0; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 0; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
        })  
    
        document.querySelector(oneBlocForStyle(repeats, "secondCase")).addEventListener("mouseleave", function() {
            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
        })  

        document.querySelector(oneBlocForStyle(repeats, "thirdCase")).addEventListener("mouseenter", function() {
            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 0; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 0; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
        })  
    
        document.querySelector(oneBlocForStyle(repeats, "thirdCase")).addEventListener("mouseleave", function() {
            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.5s linear; -webkit-transition: opacity 0.5s linear; -moz-transition: opacity 0.5s linear; -o-transition: opacity 0.5s linear;');
        })  
    } 
}