"use strict";

/************************************************************************************************/

/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/

/************************************************************************************************/

var screenWidth = "";
var windowWidth = "";
var deviceDetection = "";
const caseNumber = allCases.length;

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

function UXSquareValidation() {
    $('#UX_square').css('border-color', 'black');

    setTimeout(() => {
        $('#UX_square').css('border-color', 'white');
    }, 100);
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

var goBackToOpacity1 = 0;

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
            $('<div id="UX_square"></div>').prependTo('.ref_container');
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