"use strict";

/************************************************************************************************/
/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/
/************************************************************************************************/

/* Detection dynamique des tailles et du media */ 

var screenWidth = "";
var windowWidth = "";
var deviceDetection = "";
var newScreenWidth = ""; 
var newWindowWidth = ""; 
var newDeviceDetection = ""; 


/* Valeurs initiales de l'application */

screenWidth = $(window).width();

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

/* Detection dynamique des modifications de tailles d'écran */

$(window).resize(function () {

    newScreenWidth = $(window).width();

    if (newScreenWidth < 1280) {
        newWindowWidth = "small";
    } else {
        newWindowWidth = "big";
    };

    if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi) || newWindowWidth === "small") {
        newDeviceDetection = true;
    } else {
        newDeviceDetection = false;
    };

    if (windowWidth !== newWindowWidth || deviceDetection !== newDeviceDetection) {
        $('.oneBloc').remove();
        $('.oneBloc_device').remove();

        windowWidth = newWindowWidth;
        deviceDetection = newDeviceDetection;
        windowWidth = newWindowWidth;

        var creationOfBlocs2 = new CreationOfBlocs();
        creationOfBlocs2.AddDatasToArray();
        creationOfBlocs2.arrayBlocStorage.forEach(function (bloc) {
        $('.ref_container').append(bloc);
        });
        for (var i = 0; i < creationOfBlocs2.howManyBlocsHasBeenCreated; i++) {
        creationOfBlocs2.AddStyleEventsToBlocs(i);
        }
    }
});

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
