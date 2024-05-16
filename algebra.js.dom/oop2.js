// 1. dodajte dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta
// i oznacava ime psa. defaultna vrijednost imena psa je "Rex".
//
// 2. kreirajte objekt iz dog funkcije
//
// 3. dodajte dog funkciji metodu koja vraca postavljeno ime psa.
// pozovite ju iz novostvorenog objekta i ispisite rezultat.

// 1.
function Dog (name){
    // this.dogName = name || "Rex";
    //console.log("name= " + name);
   if (!name) {
        this.dogName = "Rex";
    } 
    else {
        this.dogName = name;
     }
}

//2. -> defaultno ime psa ukoliko ne proslijedimo ime psa
var dog = new Dog();
console.log("ime psa default name = " + dog.dogName);

//2.B -> ako proslijedimo ime psa
var dog1 = new Dog("Loki");
console.log("ime psa= " + dog1.dogName);

//3.

Dog.prototype.imePsa = function (){
    return this.dogName;
};

console.log("ime psa1 (dog) preko metode = " + dog.imePsa());
console.log("ime psa2 (dog2) preko metode = " + dog1.imePsa());

Dog.prototype.bark = function (){
    return "Wuf wuf";
};

print("pas1 (dog) se glasa = " + dog.bark());
print("pas2 (dog2) se glasa = " + dog1.bark());


function print (intext){
    console.log(intext);
}