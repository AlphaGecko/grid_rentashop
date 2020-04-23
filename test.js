/***** Tests ****/

let gridTest = "Tests en cours";
let testError;
let testGrid = []; 
let addToGrid = 1;
let modulo3Test;
let imageTest;

if (caseNumber % 3 !== 0) {
    testError = "<strong>Le nombre de case doit être un multiple de 3.</strong>"; 
    console.log("Echec")
    modulo3Test = "Erreur"
} else {
    modulo3Test = "ok"
    console.log("Le nombre de cases est bien un multiple de 3")
}

const regex_image = (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)

for (const [key, value, index] of Object.entries(allCases)) {
    if (value["lien_image"] === "" || value['lien_image'] === undefined || value['lien_image'] === null) {
        imageTest = "Erreur"; 
        testError = "<strong>il doit obligatoirement y avoir une image par case, même si elle est vide.</strong>"; 
    } else if (regex_image.test(value['lien_image']) === false) {
        imageTest = "Erreur"; 
        testError = "<strong>l'image numéro " + addToGrid + " n'a pas un format d'image correct.</strong>"; 
    } else {
        imageTest = "ok"; 
        console.log("la case " + addToGrid + " possède une image valide")
    }
    addToGrid++;
}

/* Lancement du script ou de l'erreur */ 

modulo3Test === "ok" && imageTest === "ok" ? gridTest = "ok" : gridTest = "Erreur";

if (gridTest === "ok") {
    console.log("Fin des tests. Ajout des éléments au DOM");
    arrayBlocStorage.forEach(bloc => {
        $('#ref_container').append(bloc);
    });
} else {
    console.log("Fin des tests. Erreur");
    $('#ref_container').append(testError);
}


