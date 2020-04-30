let oneBlocForStyle = (numberOfTheBloc, numberOfTheCase) => { return ('#number_' + numberOfTheBloc + ' .' + numberOfTheCase)};
let oneBlocForStyleImage = (numberOfTheBloc, numberOfTheCase) => { return ('#number_' + numberOfTheBloc + ' .' + numberOfTheCase + ' img')};

let getAllTheBlocsForStyle = (repeats) => {
    document.querySelector(oneBlocForStyle(repeats, "firstCase")).addEventListener("mouseenter", function() {
        document.querySelector(oneBlocForStyleImage(repeats, "secondCase")).setAttribute('style', 'opacity: 0;');
        document.querySelector(oneBlocForStyleImage(repeats, "thirdCase")).setAttribute('style', 'opacity: 0;');
    })  
} 


for (let i = 0; i < howManyBlocsHasBeenCreated; i++) {
    getAllTheBlocsForStyle(i);
}


