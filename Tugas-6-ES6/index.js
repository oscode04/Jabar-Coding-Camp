// Soal 1
// function untuk luas persegi panjang
const luasPersegiPanjang = (a, b) => a*b;

// function untuk keliling persegi panjang
const kelilingPersegiPanjang = (p, l) => 2*(p+l);

let panjang = 8;
let lebar = 9;

console.log(luasPersegiPanjang(panjang, lebar));
console.log(kelilingPersegiPanjang(panjang, lebar));

// Soal 2
// arrow function dan object literal es6
const newFunction = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: () => console.log(`${firstName}, ${lastName}`)  
    }
}
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

// Soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const {firstName, lastName, address, hobby} = newObject
console.log(firstName, lastName, address, hobby)

// Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)


// Soal 5
const planet = "earth" 
const view = "glass" 
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
console.log(before)