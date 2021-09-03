// Soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

// Jawaban soal 1
var urut = daftarHewan.sort()
 urut.forEach(function(item){
     console.log(item)
 });

// Soal 2
// Jawaban soal 2
var data = {
    name : "John" ,
    age : 30  ,
    address : "Jalan Pelesiran" ,
    hobby : "Gaming"
}

function introduce(org){
    var nama = "Nama saya " + org.name + ", ";
    var umur = "umur saya " + org.age + " tahun, ";
    var alamat = "alamat saya di " + org.address + ", ";
    var hobi = "dan saya punya hobby yaitu " + org.hobby + "!";

    return nama + umur + alamat + hobi
}

var perkenalan = introduce(data)
console.log(perkenalan)

// Soal 3
// Jawaban soal 3
function hitung_huruf_vokal(masukanKata){
    masukanKata.split("");
    var cekHurufVokal = ["a", "e", "i", "o", "u"]
    var jumlahVokal = 0;
    for(var i = 0;  i < masukanKata.length; i++){
        if (cekHurufVokal.indexOf(masukanKata.toLowerCase()[i]) !== -1){
            jumlahVokal++}
    }
    return jumlahVokal;
}

var hitung_1 = hitung_huruf_vokal("Muhammad") // 3
var hitung_2 = hitung_huruf_vokal("Iqbal") // 2
console.log(hitung_1, hitung_2)

// soal 4
// jawaban soal 4
function hitung(masukanAngka){
    return (masukanAngka - 1) * 2
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8