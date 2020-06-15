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
      let halfImagePercentage = ((oneImage / 2) / containerWidth) * 100; 
      
      /* Correction de position si le nombre de cases et pair */

      if (allCases.length % 2 === 0) {
        leftDraggablePercentage = leftDraggablePercentage + halfImagePercentage;
      } 

      /* Rajout dans le DOM */

      $('#ref_mobile_child').css({'width': containerWidth + 'px', 'left' : leftContainerPercentage + '%'});
      $('#draggable_container').css({ 'width': draggableWidth + 'px', 'left' : leftDraggablePercentage + '%'});
      $('#UX_square').css({ 'width': squareSize + 'px', 'height' : squareSize });

      /* Valeurs */
      
      // console.log(
      //   "valeurs attribués aux éléments par le script : \n" + 
      //   "Total de cases : " + allCases.length + "\n" + 
      //   "Nombre d'écrans contenant 3 cases : " + oneScreenRatio + "\n" + 
      //   "largeur d'un écran : " + oneScreen + "\n" +
      //   "Taille du container de toutes les images : " + draggableWidth + "\n" + 
      //   "Taille du container scrollable : " + containerWidth + "\n" 
      //   )
    }
  }
]);

  return CreationOfBlocs;
}();

var OneBlocOf3Cases = /*#__PURE__*/function () {
  function OneBlocOf3Cases(lien_image_1, url_partenaire_1, alt_1, description_site_1, description_projet_1, lien_image_2, url_partenaire_2, alt_2, description_site_2, description_projet_2, lien_image_3, url_partenaire_3, alt_3, description_site_3, description_projet_3, numberOfTheBloc) {
    _classCallCheck(this, OneBlocOf3Cases);

    this.lien_image_1 = lien_image_1;
    this.url_partenaire_1 = url_partenaire_1;
    this.alt_1 = alt_1;
    this.description_site_1 = description_site_1;
    this.description_projet_1 = description_projet_1;
    this.lien_image_2 = lien_image_2;
    this.url_partenaire_2 = url_partenaire_2;
    this.alt_2 = alt_2;
    this.description_site_2 = description_site_2;
    this.description_projet_2 = description_projet_2;
    this.lien_image_3 = lien_image_3;
    this.url_partenaire_3 = url_partenaire_3;
    this.alt_3 = alt_3;
    this.description_site_3 = description_site_3;
    this.description_projet_3 = description_projet_3;
    this.numberOfTheBloc = numberOfTheBloc;
  }

  _createClass(OneBlocOf3Cases, [{
    key: "addOneBlocToDOM",
    value: function addOneBlocToDOM() {
      return "<div class=\"oneBloc\" id=\"number_".concat(this.numberOfTheBloc, "\">\n                <div class=\"firstCase\">\n                    <a href=").concat(this.url_partenaire_1, " target=\"_blank\" rel=\"noopener noreferrer nofollow\">\n                        <p>\n                            <img \n                                src=").concat(this.lien_image_1, " \n                                alt=").concat(this.alt_1, " \n                            \"/>\n                            <span class=\"dynamic_background\"></span>\n                            <span class=\"description_image description_site_image_2\">").concat(this.description_site_1, "</span>\n                            <span class=\"description_image description_site_image_3\">").concat(this.description_projet_1, "</span>\n                        </p>\n                    </a>\n                </div>\n                <div class=\"secondCase\">\n                    <a href=").concat(this.url_partenaire_2, " target=\"_blank\" rel=\"noopener noreferrer nofollow\">\n                        <p>\n                            <img \n                                src=").concat(this.lien_image_2, " \n                                alt=").concat(this.alt_2, " \n                            />\n                            <span class=\"dynamic_background\"></span>\n                            <span class=\"description_image description_site_image_1\">").concat(this.description_site_2, "</span>\n                            <span class=\"description_image description_projet_image_3\">").concat(this.description_projet_2, "</span>\n                        </p>\n                    </a>\n                </div>\n                <div class=\"thirdCase\">\n                    <a href=").concat(this.url_partenaire_3, " target=\"_blank\" rel=\"noopener noreferrer nofollow\">\n                        <p>\n                            <img \n                                src=").concat(this.lien_image_3, " \n                                alt=").concat(this.alt_3, " \n                            />\n                            <span class=\"dynamic_background\"></span>\n                            <span class=\"description_image description_projet_image_1\">").concat(this.description_site_3, "</span>\n                            <span class=\"description_image description_projet_image_2\">").concat(this.description_projet_3, "</span>\n                        </p>\n                    </a>\n                </div>\n            </div>");
    }
  }, {
    key: "addOneDeviceBlocToDOM",
    value: function addOneDeviceBlocToDOM() {
      return "\n      <div class=\"oneImage_device\">\n        <span>\n          <p>\n            <img src=".concat(this.lien_image_1, " alt=").concat(this.alt_1, " class=\"device_image\"/>\n          </p>\n        </span>\n\n        <span>\n          <p>\n            <img src=").concat(this.lien_image_2, " alt=").concat(this.alt_2, " class=\"device_image\">\n          </p>\n        </span>\n        \n        <span>\n          <p>\n            <img src=").concat(this.lien_image_3, " alt=").concat(this.alt_3, " class=\"device_image\"/>\n          </p>\n        </span>\n      </div>\n\n      <div class=\"oneText_device\">\n        <a href=").concat(this.url_partenaire_1, " target=\"_blank\" rel=\"noopener noreferrer nofollow\">\n            <p>\n              <img src=").concat(this.lien_image_1, " alt=").concat(this.alt_1, " class=\"dynamic_image\"/>\n            </p>\n        </a>\n        <p class=\"description_image_device description_site_image_1\">").concat(this.description_site_2, "</p>\n        <p class=\"description_image_device description_projet_image_1\">").concat(this.description_site_3, "</p>\n      </div>\n      <div class=\"oneText_device\">\n        <a href=").concat(this.url_partenaire_2, " target=\"_blank\" rel=\"noopener noreferrer nofollow\">\n          <p>\n            <img src=").concat(this.lien_image_2, " alt=").concat(this.alt_2, " class=\"dynamic_image\"/>\n          </p>\n        </a>\n        <p class=\"description_image_device description_site_image_2\">").concat(this.description_site_1, "</p>\n        <p class=\"description_image_device description_projet_image_2\">").concat(this.description_projet_3, "</p>\n      </div>\n      <div class=\"oneText_device\">\n        <a href=").concat(this.url_partenaire_3, " target=\"_blank\" rel=\"noopener noreferrer nofollow\">\n          <p>\n            <img src=").concat(this.lien_image_3, " alt=").concat(this.alt_3, " class=\"dynamic_image\"/>\n          </p>\n        </a>\n        <p class=\"description_image_device description_site_image_3\">").concat(this.description_projet_1, "</p>\n        <p class=\"description_image_device description_projet_image_3\">").concat(this.description_projet_2, "</p>\n      </div>\n  ");
    }
  }]);

  return OneBlocOf3Cases;
}();

"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BlocsTest = /*#__PURE__*/function () {
  function BlocsTest() {
    _classCallCheck(this, BlocsTest);

    this.testGrid = [];
    this.addToGrid = 1;
  }

  _createClass(BlocsTest, [{
    key: "initializeTests",
    value: function initializeTests() {
      var blocFilledWithDatas = new CreationOfBlocs();

      if (blocFilledWithDatas.caseNumber % 3 !== 0) {
        console.log("Le nombre de case doit être un multiple de 3.");
      } 

      var regex_image = /\.(gif|jpe?g|tiff|png|webp|bmp)$/i;

      for (var _i = 0, _Object$entries = Object.entries(allCases); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), value = _Object$entries$_i[1];

        if (value["lien_image"] === "" || value['lien_image'] === undefined || value['lien_image'] === null ) {
          console.log("il doit obligatoirement y avoir une image par case, même si elle est vide.");
        } else if (regex_image.test(value['lien_image']) === false) {
          console.log("l'image numéro " + this.addToGrid + " n'a pas un format d'image correct.");
        }  else if ($('.ref_container img').width() !== $('.ref_container img').height()) {
          console.log("L'image numéro " + this.addToGrid + " n'est pas carrée");
        }
        this.addToGrid++;
      }


    }
  }]);

  return BlocsTest;
}();

"use strict";

/************************************************************************************************/

/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/

/************************************************************************************************/

/* Vérification que l'utilisateur à bien fait le nécessaire pour le bon fonctionnement du script */

let tests = new BlocsTest; 
tests.initializeTests();

/* Valeurs initiales lors du lancement du script */

var screenWidth = "";
var windowWidth = "";
var deviceDetection = "";
const caseNumber = allCases.length;
var goBackToOpacity1 = 0;

screenWidth = $(document).width();

if (screenWidth < 1280) {
    windowWidth = "small";
} else {
    windowWidth = "big";
};

if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi) || windowWidth === "small") {
    deviceDetection = true;
} else {
    deviceDetection = false;
};

/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

var creationOfBlocs = new CreationOfBlocs();
creationOfBlocs.AddDatasToArray();

/* intégration des blocs HTML du tableau au DOM selon si l'utilisateur utiliseur IE ou un autre navigateur */

creationOfBlocs.arrayBlocStorage.forEach(function(bloc) {
    $('.ref_container').append(bloc);
});

/* Modification dynamique du DOM lors de la detection d'un appareil mobile ou d'un petit écran */ 

if (deviceDetection === true) {

    /* Modification du DOM pour adopter la logique mobile */ 

    $('<div id="ref_mobile_child"></div>').prependTo('.ref_container');
    $('<div id="draggable_container"></div>').prependTo('#ref_mobile_child');
    $('<div id="UX_square"></div>').prependTo('#ref_mobile_child');
    $('<div id="description_container"></div>').appendTo('.ref_container');
    $('.oneImage_device').prependTo('#draggable_container'); 
    $('.oneText_device').prependTo('#description_container');

    /* Ajout des styles dynamiques mobile au DOM */

    creationOfBlocs.AddMobileStyleToBlocs();

} else if (deviceDetection === false) {

    /* Ajout des styles dynamiques écran au DOM */

    for (var i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
        creationOfBlocs.AddStyleEventsToBlocs(i);
    }
}

/* debug des ancres sur IE */

var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
var trident = ua.indexOf('Trident/');

if (msie > 0 || trident > 0) {
    console.log('IE detecté, remise en forme du document');
    var imageWidth = $("body > div > div:nth-child(1) > a > p > img").css("width");
    $(".oneImage_device > a").css("height", imageWidth);
}

/* rend le contenu draggable sur téléphone */

var counts = 0;

$("#draggable_container").draggable({
    axis: "x", scroll: false, containment: "#ref_mobile_child", 
    drag: function() {
        counts = $('#draggable_container').css('left')
        changeOpacityWhileUserDrag();
    } 
});

/* Dynamique téléphone */ 


function oneDescription(wichDescription) {
    $('.oneText_device').css('opacity', '0');
    $('#description_container :nth-child(' + wichDescription + ')').css('opacity', '1');
} 

function changePxValueToInteger(DOMRef, CSSValue) {
    var pxDOMValue = $(DOMRef).css(CSSValue);
    var pxRemove = pxDOMValue.slice(0, -2); 
    var result = parseInt(pxRemove);
    return result;
}

let UXValidation = $('#UX_square').css('color');
let UXReset = $('#UX_square').css('border-color');

function UXSquareValidation() {
    $('#UX_square').css('border-color', UXValidation);

    setTimeout(() => {
        $('#UX_square').css('border-color', UXReset);
    }, 150);
}

function changeOpacityWhileUserDrag() {

    let parsedNewPosNumber = changePxValueToInteger('#draggable_container', 'left')

    if (parsedNewPosNumber > parsedInitialPosNumber) {
        var oldComparate = parsedInitialPosNumber + parsedOneImageWidthNumber;

        if (parsedNewPosNumber > oldComparate) {
            initialDescription--;
            oneDescription(initialDescription);
            parsedInitialPosNumber = parsedNewPosNumber;
            UXSquareValidation();
        } 

    } else if (parsedNewPosNumber < parsedInitialPosNumber) {

        var oldComparate = parsedInitialPosNumber - parsedOneImageWidthNumber;

        if (parsedNewPosNumber < oldComparate) {
            initialDescription++;
            oneDescription(initialDescription);
            parsedInitialPosNumber = parsedNewPosNumber;
            UXSquareValidation();
        } 
    }
}

let oneScreenRatio = (allCases.length / 3);
let parsedInitialPosNumber;
let parsedOneImageWidthNumber;

if (deviceDetection === true) {
    parsedInitialPosNumber = changePxValueToInteger('#draggable_container', 'left');
    parsedOneImageWidthNumber = changePxValueToInteger('#draggable_container > div:nth-child(1) > span:nth-child(1) > p > img', 'width') - 8;
    var initialDescription = allCases.length / 2
    if (initialDescription % 1 !== 0 ) {
        initialDescription = initialDescription + 0.5;
    }
    oneDescription(initialDescription);
}

// 

/* Detection dynamique des modifications de tailles d'écran */

$(window).resize(function () {

    goBackToOpacity1++
    $('.ref_container').css({'opacity' : '0'});
    $('#loader').css({'opacity' : '1', 'z-index' : '1000'}); 

    /* debug des ancres sur IE */

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0 || trident > 0) {
        console.log('IE detecté, remise en forme du document');
        var imageWidth = $("body > div > div:nth-child(1) > a > p > img").css("width");
        $(".oneImage_device > a").css("height", imageWidth);
    }

    var newScreenWidth = "";
    var newWindowWidth = "";
    newScreenWidth = $(document).width();

    // console.log(newScreenWidth)

    if (newScreenWidth < 1280) {
        newWindowWidth = "small";
    } else {
        newWindowWidth = "big";
    };
    
    if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi) || newWindowWidth === "small") {
        deviceDetection = true;
    } else {
        deviceDetection = false;
    };

    if (screenWidth !== newScreenWidth) {

        $('.oneBloc').remove();
        $('.oneText_device').remove();
        $('#UX_square').remove();
        $('#ref_mobile_child').remove();
        $('#draggable_container').remove(); 
        $('#description_container').remove();
        $('.oneImage_device').remove();
        var creationOfBlocs = new CreationOfBlocs();
        creationOfBlocs.AddDatasToArray();

        creationOfBlocs.arrayBlocStorage.forEach(function(bloc) {
            $('.ref_container').append(bloc);
        });

        if (deviceDetection === true) {
            $('<div id="ref_mobile_child"></div>').prependTo('.ref_container');
            $('<div id="draggable_container"></div>').prependTo('#ref_mobile_child');
            $('<div id="UX_square"></div>').prependTo('#ref_mobile_child');
            $('<div id="description_container"></div>').appendTo('.ref_container');
            $('.oneImage_device').prependTo('#draggable_container'); 
            $('.oneText_device').prependTo('#description_container');
            creationOfBlocs.AddMobileStyleToBlocs();
        } else if (deviceDetection === false) {
            for (var i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
                creationOfBlocs.AddStyleEventsToBlocs(i);
            }
        } 

        /* rend le contenu draggable sur téléphone */

       counts = 0;

        $("#draggable_container").draggable({
            axis: "x", scroll: false, containment: "#ref_mobile_child", 
            drag: function() {
                counts = $('#draggable_container').css('left')
                changeOpacityWhileUserDrag();
            } 
        });

        oneScreenRatio = (allCases.length / 3);
        
        if (deviceDetection === true) {
            parsedInitialPosNumber = changePxValueToInteger('#draggable_container', 'left')
            parsedOneImageWidthNumber = changePxValueToInteger('#draggable_container > div:nth-child(1) > span:nth-child(1) > p > img', 'width') - 8
            initialDescription = allCases.length / 2
            if (initialDescription % 1 !== 0 ) {
                initialDescription = initialDescription + 0.5;
            }
            oneDescription(initialDescription);
        }
    }

    setTimeout(() => {
        goBackToOpacity1--
        if (goBackToOpacity1 === 0) {
            $('.ref_container').css({'opacity' : '1'});
            $('#loader').css({'opacity' : '0', 'z-index' : '-1000'}); 
        }
    }, 300);
});
