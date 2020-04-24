class BlocsTest  {

    gridTest = "Tests en cours"
    testError
    testGrid = []
    addToGrid = 1
    modulo3Test
    imageTest

    initializeTests() {

        if (caseNumber % 3 !== 0) {
            this.testError = "<strong>Le nombre de case doit être un multiple de 3.</strong>"; 
            console.log("Echec")
            this.modulo3Test = "Erreur"
        } else {
            this.modulo3Test = "ok"
            console.log("Le nombre de cases est bien un multiple de 3")
        }
        
        const regex_image = (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)
        
        for (const [key, value, index] of Object.entries(allCases)) {
            if (value["lien_image"] === "" || value['lien_image'] === undefined || value['lien_image'] === null) {
                this.imageTest = "Erreur"; 
                this.testError = "<strong>il doit obligatoirement y avoir une image par case, même si elle est vide.</strong>"; 
            } else if (regex_image.test(value['lien_image']) === false) {
                this.imageTest = "Erreur"; 
                this.testError = "<strong>l'image numéro " + this.addToGrid + " n'a pas un format d'image correct.</strong>"; 
            } else {
                this.imageTest = "ok"; 
                console.log("la case " + this.addToGrid + " possède une image valide")
            }
            this.addToGrid++;
        }
        
        /* Lancement du script ou de l'erreur */ 
        
        this.modulo3Test === "ok" && this.imageTest === "ok" ? this.gridTest = "ok" : this.gridTest = "Erreur";
    }
}





