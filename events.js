/* Combien de cases voulez vous intégrer ? */ 

const caseNumber = 3

/* Mettez les liens relatifs de chacune de vos images suivi d'une virgule. Celle-ci doivent impérativement être carrées pour éviter toute déformation */ 

const imageArray = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
]

/* Lancement du script selon les données entrée */ 

const oneBloc = '<div class="oneBloc"><div class="firstCase"></div><div class="secondCase"></div><div class="thirdCase"></div></div>'

const oneGrid = () => {
    document.getElementById('ref_container').innerHTML = oneBloc;
}

