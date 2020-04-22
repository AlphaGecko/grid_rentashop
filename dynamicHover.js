/* Création des constantes relatives aux différents éléments du DOM */ 

image1 = $('.firstCase');
image2 = $('.secondCase');
image3 = $('.thirdCase');
descriptionSite1 = $('.description_site_image_1')
descriptionSite2 = $('.description_site_image_2')
descriptionSite3 = $('.description_site_image_3')
descriptionProjet1 = $('.description_projet_image_1')
descriptionProjet2 = $('.description_projet_image_2')
descriptionProjet3 = $('.description_projet_image_3')

/* réaction au survol des images */ 

image1.hover(
    function () {
        descriptionSite1.css({"opacity": "1", "z-index": "50"});
        descriptionProjet1.css({"opacity": "1", "z-index": "50"});
        descriptionSite2.css({"opacity": "0", "z-index": "-5"});
        descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
        descriptionSite3.css({"opacity": "0", "z-index": "-5"});
        descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
        console.log("hover de l'image 1");
    }, function () {
        descriptionSite1.css({"opacity": "0", "z-index": "-5"});
        descriptionProjet1.css({"opacity": "0", "z-index": "-5"});
        descriptionSite2.css({"opacity": "0", "z-index": "-5"});
        descriptionProjet2.css({"opacity": "0", "z-index": "-5"});
        descriptionSite3.css({"opacity": "0", "z-index": "-5"});
        descriptionProjet3.css({"opacity": "0", "z-index": "-5"});
    }
);

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
);

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
);