"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  }]);

  return OneBlocOf3Cases;
}();