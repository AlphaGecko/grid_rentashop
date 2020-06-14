"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CreationOfBlocs = /*#__PURE__*/function () {
  function CreationOfBlocs() {
    _classCallCheck(this, CreationOfBlocs);

    this.caseNumber = allCases.length;
    this.howManyBlocsHasBeenCreated = 0;
    this.howManyBlocsGonnaBeCreated = this.caseNumber / 3;
    this.arrayBlocStorage = [];
    this.arrayCursor1 = 0;
    this.arrayCursor2 = 1;
    this.arrayCursor3 = 2;
  }
  
  /* Création d'un objet pour chaque bloc de trois cases, stockage des valeurs dans un tableau */


  _createClass(CreationOfBlocs, [{
    key: "blocCreation",
    value: function blocCreation(firstCase, secondCase, thirdCase) {
      var virtualBloc = new OneBlocOf3Cases(firstCase["lien_image"], firstCase["lien_partenaire"], firstCase["alt"], firstCase["description_1"], firstCase["description_2"], secondCase["lien_image"], secondCase["lien_partenaire"], secondCase["alt"], secondCase["description_1"], secondCase["description_2"], thirdCase["lien_image"], thirdCase["lien_partenaire"], thirdCase["alt"], thirdCase["description_1"], thirdCase["description_2"], this.howManyBlocsHasBeenCreated);
      if (deviceDetection === true) {
        $(".ref_container").addClass("device");
        var blocContent = virtualBloc.addOneDeviceBlocToDOM();
      } else if (deviceDetection === false) {
        $(".ref_container").removeClass("device");
        var blocContent = virtualBloc.addOneBlocToDOM();
      };

      this.arrayBlocStorage[this.howManyBlocsHasBeenCreated] = blocContent;
      this.howManyBlocsHasBeenCreated++;
    }
    
  /* Ajout les éléments dans un tableau */

  }, {
    key: "AddDatasToArray",
    value: function AddDatasToArray() {
      while (this.howManyBlocsGonnaBeCreated > 0) {
        this.blocCreation(allCases[this.arrayCursor1], allCases[this.arrayCursor2], allCases[this.arrayCursor3]);
        this.howManyBlocsGonnaBeCreated--;
        this.arrayCursor1 = this.arrayCursor1 + 3;
        this.arrayCursor2 = this.arrayCursor2 + 3;
        this.arrayCursor3 = this.arrayCursor3 + 3;
      }
    }

  /* Styles dynamiques */

  }, {
    key: "AddStyleEventsToBlocs",
    value: function AddStyleEventsToBlocs(repeats) {
      function oneBlocForStyle(numberOfTheBloc, numberOfTheCase) {
        return '#number_' + numberOfTheBloc + ' .' + numberOfTheCase;
      }

      ;

      function oneBlocForStyleImage(numberOfTheBloc, numberOfTheCase) {
        return '#number_' + numberOfTheBloc + ' .' + numberOfTheCase + ' img';
      }

      ;
      var descriptionSite1 = $('#number_' + repeats + ' .description_site_image_1');
      var descriptionProjet1 = $('#number_' + repeats + ' .description_projet_image_1');
      var descriptionSite2 = $('#number_' + repeats + ' .description_site_image_2');
      var descriptionProjet2 = $('#number_' + repeats + ' .description_projet_image_2');
      var descriptionSite3 = $('#number_' + repeats + ' .description_site_image_3');
      var descriptionProjet3 = $('#number_' + repeats + ' .description_projet_image_3'); // case 1

      $(oneBlocForStyle(repeats, "firstCase")).mouseenter(function () {
        $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0;');
        $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0;');
        descriptionSite1.css({
          "opacity": "1",
          "z-index": "50"
        });
        descriptionProjet1.css({
          "opacity": "1",
          "z-index": "50"
        });
        descriptionSite2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite3.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet3.css({
          "opacity": "0",
          "z-index": "-5"
        });
      });
      $(oneBlocForStyle(repeats, "firstCase")).mouseleave(function () {
        $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 1;');
        $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 1;');
        descriptionSite1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite3.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet3.css({
          "opacity": "0",
          "z-index": "-5"
        });
      });
      $(oneBlocForStyle(repeats, "firstCase")).click(function () {
        $(".oneBloc img").attr('style', 'opacity: 1; z-index: 50;');
        $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0; z-index: -5;');
        $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0 ; z-index: -5;');
      }); // case 2

      $(oneBlocForStyle(repeats, "secondCase")).mouseenter(function () {
        $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0;');
        $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0;');
        descriptionSite1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite2.css({
          "opacity": "1",
          "z-index": "50"
        });
        descriptionProjet2.css({
          "opacity": "1",
          "z-index": "50"
        });
        descriptionSite3.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet3.css({
          "opacity": "0",
          "z-index": "-5"
        });
      });
      $(oneBlocForStyle(repeats, "secondCase")).mouseleave(function () {
        $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 1;');
        $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 1;');
        descriptionSite1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite3.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet3.css({
          "opacity": "0",
          "z-index": "-5"
        });
      });
      $(oneBlocForStyle(repeats, "secondCase")).click(function () {
        $(".oneBloc img").attr('style', 'opacity: 1; z-index: 50;');
        $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0; z-index: -5;');
        $(oneBlocForStyleImage(repeats, "thirdCase")).attr('style', 'opacity: 0 ; z-index: -5;');
      }); // case 3

      $(oneBlocForStyle(repeats, "thirdCase")).mouseenter(function () {
        $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0;');
        $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0;');
        descriptionSite1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite3.css({
          "opacity": "1",
          "z-index": "50"
        });
        descriptionProjet3.css({
          "opacity": "1",
          "z-index": "50"
        });
      });
      $(oneBlocForStyle(repeats, "thirdCase")).mouseleave(function () {
        $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 1;');
        $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 1;');
        descriptionSite1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet1.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet2.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionSite3.css({
          "opacity": "0",
          "z-index": "-5"
        });
        descriptionProjet3.css({
          "opacity": "0",
          "z-index": "-5"
        });
      });
      $(oneBlocForStyle(repeats, "thirdCase")).click(function () {
        $(".oneBloc img").attr('style', 'opacity: 1; z-index: 50;');
        $(oneBlocForStyleImage(repeats, "secondCase")).attr('style', 'opacity: 0; z-index: -5;');
        $(oneBlocForStyleImage(repeats, "firstCase")).attr('style', 'opacity: 0 ; z-index: -5;');
      });
    }
  }, {
    key: "AddMobileStyleToBlocs",
    value: function AddMobileStyleToBlocs() {

      /* Mise en place des dimensions et des positions des différents blocs */ 

      let oneScreenRatio = (allCases.length / 3);
      let oneScreen = $(window).width();
      let oneImage = oneScreen / 3;
      let draggableWidth =  oneScreenRatio * oneScreen;
      let sideRef = (oneImage * (allCases.length / 2)) - (oneImage / 2);
      let containerWidth = (draggableWidth + (sideRef * 2));
      let squareSize = (oneScreen / 3) + 5;
      let leftContainerPercentage = 50;
      let leftDraggablePercentage = 50;
      let halfImagePercentage = ((oneImage / 2) / containerWidth) * 100

      /* Correction de position si le nombre de cases et pair */

      if (allCases.length % 2 === 0) {
        leftDraggablePercentage = leftDraggablePercentage + halfImagePercentage;
      } 

      /* Rajout dans le DOM */

      $('#ref_mobile_child').css({'width': containerWidth + 'px', 'left' : leftContainerPercentage + '%'});
      $('#draggable_container').css({ 'width': draggableWidth + 'px', 'left' : leftDraggablePercentage + '%'});
      $('#UX_square').css({ 'width': squareSize + 'px', 'height' : squareSize });

      /* Debug */
      
      console.log(
        "Debug : \n" + 
        "Total de cases : " + allCases.length + "\n" + 
        "OneScreenRatio : " + oneScreenRatio + "\n" + 
        "OneScreen : " + oneScreen + "\n" +
        "DraggableWidth (container de toutes les images) : " + draggableWidth + "\n" + 
        "Container width (dans lequel aura lieu le scrolling) : " + containerWidth + "\n" 
        )
      
    }
  }
]);

  return CreationOfBlocs;
}();