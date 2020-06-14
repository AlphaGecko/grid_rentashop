"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlocsTest = /*#__PURE__*/function () {
  function BlocsTest() {
    _classCallCheck(this, BlocsTest);

    this.gridTest = "Tests en cours";
    this.testGrid = [];
    this.addToGrid = 1;
    this.modulo3Test;
    this.imageTest;
    this.imageSizeTest;
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

/* Lancement des tests */

// var testingUserEntries = new BlocsTest();
// testingUserEntries.initializeTests();

// if (testingUserEntries.gridTest === "ok") {
//   console.log("Tous les tests sont bons.");
// } else {
//   console.log(testingUserEntries.testError);
// }