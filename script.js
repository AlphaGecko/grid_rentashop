"use strict";

/************************************************************************************************/

/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/

/************************************************************************************************/

var screenWidth = "";
var windowWidth = "";
var deviceDetection = "";

/* Valeurs initiales de l'application */

screenWidth = $(window).width();

if (screenWidth < 1280 && screenWidth >= 620) {
    windowWidth = "small";
} else if (screenWidth < 620) {
    windowWidth = "Xsmall";
} else {
    windowWidth = "big";
};

if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi) || windowWidth === "small" || windowWidth === "Xsmall") {
    deviceDetection = true;
} else {
    deviceDetection = false;
};

/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

var creationOfBlocs = new CreationOfBlocs();
creationOfBlocs.AddDatasToArray();

/* intégration des blocs HTML du tableau au DOM selon si l'utilisateur utiliseur IE ou un autre navigateur */

creationOfBlocs.arrayBlocStorage.forEach(function (bloc) {
    $('.ref_container').append(bloc);
});

/* Ajout des styles dynamiques au DOM */

for (var i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
    creationOfBlocs.AddStyleEventsToBlocs(i);
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

$(".draggable_content").draggable({
    axis: "x",
    containment: ".draggable_container",
    scroll: false
});

/* Detection dynamique des modifications de tailles d'écran */

$(window).resize(function () {

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
    newScreenWidth = $(window).width();

    if (newScreenWidth < 1280 && newScreenWidth >= 620) {
        newWindowWidth = "small";
    } else if (newScreenWidth < 620) {
        newWindowWidth = "Xsmall";
    } else {
        newWindowWidth = "big";
    };
    

    if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi) || newWindowWidth === "small" || newWindowWidth === "Xsmall") {
        deviceDetection = true;
    } else {
        deviceDetection = false;
    };

    if (newWindowWidth === "small" && deviceDetection === true) {
        $(".draggable_content").css("left", "200vw"); 
    } else if (newWindowWidth === "Xsmall" && deviceDetection === true) {
        $(".draggable_content").css("left", "500vw");
    };

    if (windowWidth !== newWindowWidth) {
        $('.oneBloc').remove();
        $('.one_bloc_device').remove();
        var creationOfBlocs = new CreationOfBlocs();
        creationOfBlocs.AddDatasToArray();
        creationOfBlocs.arrayBlocStorage.forEach(function (bloc) {
            $('.ref_container').append(bloc);
        });

        for (var i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
            creationOfBlocs.AddStyleEventsToBlocs(i);
        }

        windowWidth = newWindowWidth;
        screenWidth = newScreenWidth;
        $(".draggable_content").disableSelection();

        $(".draggable_content").draggable({
            axis: "x",
            containment: ".draggable_container",
            scroll: false
        });
    }
});