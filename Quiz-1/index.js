// 1.
// Judul : Function Penghitung Jumlah Kata
function jumlah_kata(str){
    var hpsSpasiAwalAkhir = str.trimStart().trimEnd()
    var newArray = hpsSpasiAwalAkhir.split(" ")
    var hitungKata = newArray.length
    return hitungKata;
}

var kalimat_1 = jumlah_kata(" Halo nama saya Muhammad Iqbal Mubarok ");
var kalimat_2 = jumlah_kata("Saya Iqbal");
console.log(kalimat_1, kalimat_2)