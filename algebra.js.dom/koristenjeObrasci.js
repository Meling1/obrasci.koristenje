var brojanje = require ("./obrasci");

//krenuli smo, total walk = 0

console.log("total steps= " + brojanje.getTotalSteps()); // 0

brojanje.walk(); 
console.log("total steps= " + brojanje.getTotalSteps()); // 1

brojanje.walk();
console.log("total steps= " + brojanje.getTotalSteps()); // 2

brojanje.walk();
console.log("total steps= " + brojanje.getTotalSteps()); // 3

brojanje.run();


var total = brojanje.getTotalSteps();
console.log("total steps= " + total);

// "spread" operator (...) :
function ispisiImena (prvo, drugo, trece){
    console.log(prvo, drugo, trece);
}

const x = ['Ivan', 'Marija','David', 'Petar'];

ispisiImena(...x);

// "rest" operator (...) :

function ispisiImena1(...imena){
    console.log(imena);
}

const xy = ['Ivan', 'Narija', ' David'];

ispisiImena1(xy);