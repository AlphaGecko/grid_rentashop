"use strict";

/************************************************************************************************/

/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/

/************************************************************************************************/

var screenWidth = "";
var windowWidth = "";
var deviceDetection = "";

/* Valeurs initiales de l'application */

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
    $('<div id="UX_square"></div>').prependTo('.ref_container');
    $('<div id="description_container"></div>').appendTo('#ref_mobile_child');
    $('.oneImage_device').prependTo('#draggable_container'); 
    $('.oneText_device').prependTo('#description_container');

    /* Ajout des styles dynamiques au DOM */

    creationOfBlocs.AddMobileStyleToBlocs();

} else if (deviceDetection === false) {

    /* Ajout des styles dynamiques au DOM */

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

$("#draggable_container").draggable({
    axis: "x", scroll: false, 
});

// containment: "#ref_mobile_child"

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
    newScreenWidth = $(document).width();

    console.log(newScreenWidth)

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

    // if (newWindowWidth === "small" && newScreenWidth > 620) {
    //     $(".draggable_content").css("left", "200vw"); 
    // } else if (newWindowWidth === "small" && newScreenWidth <= 620) {
    //     $(".draggable_content").css("left", "200vw");
    // };

    if (windowWidth !== newWindowWidth) {

        $('.oneBloc').remove();
        $('.oneText_device').remove();
        $('#draggable_container').remove();

        var creationOfBlocs = new CreationOfBlocs();
        creationOfBlocs.AddDatasToArray();

        creationOfBlocs.arrayBlocStorage.forEach(function(bloc) {
            $('.ref_container').append(bloc);
        });

        if (deviceDetection === true) {
            $('<div id="draggable_container"></div>').prependTo('.ref_container');
            $('<div id="UX_square"></div>').prependTo('.ref_container');
            $('<div id="description_container"></div>').appendTo('.ref_container');
            $('.oneImage_device').prependTo('#draggable_container'); 
            $('.oneText_device').prependTo('#description_container');
        } else if (deviceDetection === false) {
            for (var i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
                creationOfBlocs.AddStyleEventsToBlocs(i);
            }
        }

        windowWidth = newWindowWidth;
        screenWidth = newScreenWidth;

        $(".draggable_content").disableSelection();

        $("#draggable_container").draggable({
            axis: "x",
            containment: ".ref_container.device",
            scroll: false
        });
    }
});