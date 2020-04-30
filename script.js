/************************************************************************************************/
/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/
/************************************************************************************************/



/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

let creationOfBlocs = new CreationOfBlocs();
creationOfBlocs.AddDatasToDom();

/* Lancement des tests avant d'insérer les éléments au DOM */ 

let testingUserEntries = new BlocsTest();
testingUserEntries.initializeTests(); 

/* Si les tests sont bons, intégration des blocs au DOM */ 

if (testingUserEntries.gridTest === "ok") {
    console.log("Fin des tests. Ajout des éléments au DOM");
    creationOfBlocs.arrayBlocStorage.forEach(bloc => {
        $('#ref_container').append(bloc);
    });
} else {
    console.log("Fin des tests. Erreur");
    $('#ref_container').append(testingUserEntries.testError);
}

/* Rajout du style dynamique */ 

for (let i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
    creationOfBlocs.getAllTheBlocsForStyle(i);
}