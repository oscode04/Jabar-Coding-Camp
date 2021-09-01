// soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

// jawaban soal 1
var saya = pertama.substr(0,4);
var senang = pertama.substr(12,6);
var belajar = kedua.substr(0,7);
var javascript = kedua.substr(8,10).toUpperCase();

var hasil = saya + " " + senang + " " + belajar + " " + javascript
console.log(hasil)

// soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// jawaban soal 2
var a = parseInt(kataPertama);
var b = parseInt(kataKedua);
var c = parseInt(kataKetiga);
var d = parseInt(kataKeempat);

var jml = a + d + (b*c);
console.log(jml);

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 

// jawaban soal 3
var kataKedua = kalimat.substring(4,14);
var kataKetiga =  kalimat.substring(15,18); 
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);