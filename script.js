/************************************************************************************************/
/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/
/************************************************************************************************/

/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

let creationOfBlocs = new CreationOfBlocs();
creationOfBlocs.AddDatasToArray();

/* Lancement des tests avant d'insérer les éléments au DOM */ 

let testingUserEntries = new BlocsTest();
testingUserEntries.initializeTests(); 

/* Tests */ 

if (testingUserEntries.gridTest === "ok") {
  console.log("Tous les tests sont bons.");
} else {
  console.log(testingUserEntries.testError);
}

/* intégration des blocs HTML du tableau au DOM selon si l'utilisateur utiliseur IE ou un autre navigateur */

creationOfBlocs.arrayBlocStorage.forEach(bloc => {
  $('.ref_container').append(bloc);
});

/* Ajout des styles dynamiques au DOM */

for (let i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
  creationOfBlocs.AddStyleEventsToBlocs(i);
}     

/* suppression des liens pour les téléphones et mobiles pour prévenir les bugs et améliorer l'UX */ 

let isItADevice; 

if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi)) {
    isItADevice = true;
}

if (isItADevice === true) {
  $('.oneBloc a').attr('href', '#'); 
  $('.oneBloc a').attr('target', '_self');
}