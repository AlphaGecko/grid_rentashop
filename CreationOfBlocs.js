class CreationOfBlocs {
    caseNumber = allCases.length
    howManyBlocsHasBeenCreated = 0;
    howManyBlocsGonnaBeCreated = (this.caseNumber / 3);
    arrayBlocStorage = [];
    arrayCursor1 = 0;
    arrayCursor2 = 1; 
    arrayCursor3 = 2; 

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

            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 0;');
            document.querySelector(oneBlocForStyle(repeats, "secondCase")).setAttribute('style', ' -webkit-transform: rotateY(180deg);-o-transform: rotateY(180deg); -moz-transform: rotateY(180deg);-ms-transform: rotateY(180deg);transform: rotateY(180deg); transition: transform 0.2s linear; -webkit-transition: transform 0.2s linear; -moz-transition: transform 0.2s linear; -o-transition: transform 0.2s linear;')

            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 0;');
            document.querySelector(oneBlocForStyle(repeats, "thirdCase")).setAttribute('style', ' -webkit-transform: rotateY(180deg);-o-transform: rotateY(180deg); -moz-transform: rotateY(180deg);-ms-transform: rotateY(180deg);transform: rotateY(180deg); transition: transform 0.2s linear; -webkit-transition: transform 0.2s linear; -moz-transition: transform 0.2s linear; -o-transition: transform 0.2s linear;')
        })
    
        document.querySelector(oneBlocForStyle(repeats, "firstCase")).addEventListener("mouseleave", function() {

            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 1;  transition: opacity 0.2s linear; -webkit-transition:  opacity 0.2s linear; -moz-transition:  opacity 0.2s linear; -o-transition:  opacity 0.2s linear;');
            document.querySelector(oneBlocForStyle(repeats, "secondCase")).setAttribute('style', '-webkit-transform: rotateY(360deg);-o-transform: rotateY(360deg); -moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);transform: rotateY(360deg);')

            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.2s linear; -webkit-transition: opacity 0.2s linear; -moz-transition: opacity 0.2s linear; -o-transition: opacity 0.2s linear;');
            document.querySelector(oneBlocForStyle(repeats, "thirdCase")).setAttribute('style', '-webkit-transform: rotateY(360deg);-o-transform: rotateY(360deg); -moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);transform: rotateY(360deg);')
        })  

        //

        document.querySelector(oneBlocForStyle(repeats, "secondCase")).addEventListener("mouseenter", function() {

            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 0;');
            document.querySelector(oneBlocForStyle(repeats, "firstCase")).setAttribute('style', ' -webkit-transform: rotateY(180deg);-o-transform: rotateY(180deg); -moz-transform: rotateY(180deg);-ms-transform: rotateY(180deg);transform: rotateY(180deg); transition: transform 0.2s linear; -webkit-transition: transform 0.2s linear; -moz-transition: transform 0.2s linear; -o-transition: transform 0.2s linear;')

            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 0;');
            document.querySelector(oneBlocForStyle(repeats, "thirdCase")).setAttribute('style', ' -webkit-transform: rotateY(180deg);-o-transform: rotateY(180deg); -moz-transform: rotateY(180deg);-ms-transform: rotateY(180deg);transform: rotateY(180deg); transition: transform 0.2s linear; -webkit-transition: transform 0.2s linear; -moz-transition: transform 0.2s linear; -o-transition: transform 0.2s linear;')
        })
    
        document.querySelector(oneBlocForStyle(repeats, "secondCase")).addEventListener("mouseleave", function() {

            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 1;  transition: opacity 0.2s linear; -webkit-transition:  opacity 0.2s linear; -moz-transition:  opacity 0.2s linear; -o-transition:  opacity 0.2s linear;');
            document.querySelector(oneBlocForStyle(repeats, "firstCase")).setAttribute('style', '-webkit-transform: rotateY(360deg);-o-transform: rotateY(360deg); -moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);transform: rotateY(360deg);')

            document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.2s linear; -webkit-transition: opacity 0.2s linear; -moz-transition: opacity 0.2s linear; -o-transition: opacity 0.2s linear;');
            document.querySelector(oneBlocForStyle(repeats, "thirdCase")).setAttribute('style', '-webkit-transform: rotateY(360deg);-o-transform: rotateY(360deg); -moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);transform: rotateY(360deg);')
        })  

        //

        document.querySelector(oneBlocForStyle(repeats, "thirdCase")).addEventListener("mouseenter", function() {

            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 0;');
            document.querySelector(oneBlocForStyle(repeats, "secondCase")).setAttribute('style', ' -webkit-transform: rotateY(180deg);-o-transform: rotateY(180deg); -moz-transform: rotateY(180deg);-ms-transform: rotateY(180deg);transform: rotateY(180deg); transition: transform 0.2s linear; -webkit-transition: transform 0.2s linear; -moz-transition: transform 0.2s linear; -o-transition: transform 0.2s linear;')

            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 0;');
            document.querySelector(oneBlocForStyle(repeats, "firstCase")).setAttribute('style', ' -webkit-transform: rotateY(180deg);-o-transform: rotateY(180deg); -moz-transform: rotateY(180deg);-ms-transform: rotateY(180deg);transform: rotateY(180deg); transition: transform 0.2s linear; -webkit-transition: transform 0.2s linear; -moz-transition: transform 0.2s linear; -o-transition: transform 0.2s linear;')
        })
    
        document.querySelector(oneBlocForStyle(repeats, "thirdCase")).addEventListener("mouseleave", function() {

            document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 1;  transition: opacity 0.2s linear; -webkit-transition:  opacity 0.2s linear; -moz-transition:  opacity 0.2s linear; -o-transition:  opacity 0.2s linear;');
            document.querySelector(oneBlocForStyle(repeats, "secondCase")).setAttribute('style', '-webkit-transform: rotateY(360deg);-o-transform: rotateY(360deg); -moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);transform: rotateY(360deg);')

            document.querySelector(oneBlocForStyleImage(repeats, "firstCase")).setAttribute('style', 'opacity: 1; transition: opacity 0.2s linear; -webkit-transition: opacity 0.2s linear; -moz-transition: opacity 0.2s linear; -o-transition: opacity 0.2s linear;');
            document.querySelector(oneBlocForStyle(repeats, "firstCase")).setAttribute('style', '-webkit-transform: rotateY(360deg);-o-transform: rotateY(360deg); -moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);transform: rotateY(360deg);')
        })  
        
    }
}