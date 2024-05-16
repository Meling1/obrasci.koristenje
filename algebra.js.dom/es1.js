"use strict";

//1. postavite "use strict" direktivu na pocetak programa u scriptu.js
// ispravite sve greske koje se javljaju.
//2. dodajte polje "user" u "users" pomocu spread operatora.
//spremite rezultat u novu varijablu i ispisite rezultat.
//3. koju vrijednost vracaju console.log izjave? probajte zamijeniti let sa var.


//1.
var a = 78;
var b = 34;

//delete a;

//delete window.b;

var myObject = { property1: 1, property2: 2, property1: 1};

//2.
const users= [
    {name: "fabio", surname: "biondi"},
    {name: "mario", surname: "rossi"}
];
const user = { name: "Lorenzo", surname: "verdi"};

var allUsers = [...users, user];

console.log(`drugi user= ${allUsers[2].name} i prezime= ${allUsers[2].surname}`);



//3
for (let i = 0; i < 10; i++) {
    setTimeout(function() {

        console.log("the number is " + i);},
         1000); // 1000 -> tisucu milisekundi aka 1 sek

         console.log(i);
}
