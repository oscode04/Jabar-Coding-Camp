// Soal 1
var nilai;
nilai = 87;

// Jawaban soal 1
if (nilai >= 85) {
   console.log("Selamat anda mendapat nilai A")
} else if (nilai >= 75 && nilai < 85) {
    console.log("Selamat anda mendapat nilai B")
} else if (nilai >= 65 && nilai < 75) {
    console.log("Selamat anda mendapat nilai C")
} else if (nilai >= 55 && nilai < 65) {
    console.log("Selamat anda mendapat nilai D")
} else {
    console.log("Selamat anda mendapat nilai E")
}

// Soal 2
var tanggal = 04;
var bulan = 3;
var tahun = 2001;

// jawaban soal 2
switch(bulan) {
    case 1:
        console.log("04 Januari 2001");
        break;
    case 2:
        console.log("04 Februari 2001");
        break;
    case 3:
        console.log("04 Maret 2001");
        break;
    case 4:
        console.log("04 April 2001");
        break;
    case 5:
        console.log("04 Mei 2001");
        break;
    case 6:
        console.log("04 Juni 2001");
        break;
    case 7:
        console.log("04 Juli 2001");
        break;
    case 8:
        console.log("04 Agustus 2001");
        break;
    case 9:
        console.log("04 September 2001");
        break;
    case 10:
        console.log("04 Oktober 2001");
        break;
    case 11:
        console.log("04 November 2001");
        break;
    default:
        console.log("04 Desember 2001");
}

// Soal 3
// Menampilkan sebuah segitiga dengan tanda pagar (#)
// Jawabn soal 3
var pagar1 = ""
for(var i = 0; i < 3; i++) {
    for(var j = 0; j <= i; j++){
        pagar1 = pagar1 + "# ";
    }
    pagar1 = pagar1 + "\n"
} 
console.log(pagar1)

var pagar2 = ""
for(var i = 0; i < 7; i++) {
    for(var j = 0; j <= i; j++){
        pagar2 = pagar2 + "# ";
    }
    pagar2 = pagar2 + "\n"
} 
console.log(pagar2)

// soal 4
// jawaban soal 4
var m = 10;
var pembatas = "";

for(var i = 1; i<= m; i++) {
    if (i == 1 || i == 4 || i == 7 || i == 10) {
        console.log(i + " - " + "I love programming")
    } else if (i == 2 || i == 5 || i == 8) {
        console.log(i + " - " + "I love Javascript")
    } else if (i == 3 || i == 6 || i == 9) {
        console.log(i + " - " + "I love VueJS")
        for(var j = 1; j <= 3; j++) {
            pembatas = pembatas + "="
        }
        console.log(pembatas)
    }
}