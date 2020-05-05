/************************************************************************************************/
/***** Lancement du script selon les données que vous avez saisies dans custom.js. Enjoy ;) *****/
/************************************************************************************************/

/* Script pour ne plus avoir de bug avec les vieux navigateurs, qui ne prennent pas en charge "prepend" */ 

(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('prepend')) {
        return;
      }
      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
  
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
  
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

/* insère dynamiquement le nombre de blocs dans le tableau en fonction des entrées de l'utilisateur */

let creationOfBlocs = new CreationOfBlocs();
creationOfBlocs.AddDatasToArray();

/* Lancement des tests avant d'insérer les éléments au DOM */ 

let testingUserEntries = new BlocsTest();
testingUserEntries.initializeTests(); 

/* Si les tests sont bons, intégration des blocs HTML du tableau au DOM */ 

if (testingUserEntries.gridTest === "ok") {
    console.log("Fin des tests. Ajout des éléments au DOM");
    creationOfBlocs.arrayBlocStorage.forEach(bloc => {
        $('.ref_container').append(bloc);
    });
} else {
    console.log("Fin des tests. Erreur");
    $('.ref_container').append(testingUserEntries.testError);
}

/* Ajout des styles dynamiques au DOM */

for (let i = 0; i < creationOfBlocs.howManyBlocsHasBeenCreated; i++) {
    creationOfBlocs.AddStyleEventsToBlocs(i);
}     

