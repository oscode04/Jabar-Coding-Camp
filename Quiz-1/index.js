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

// 2.
// Judul : Function Penghasil Tanggal Hari Esok

function next_date(tgl, bln, thn){
    var tglEsok = tgl + 1
    var blnMsk = bln
    var thnMsk = thn
    if (tglEsok == 30) {
        tglEsok = 1
        switch(blnMsk + 1) {
            case 1:
                namabln =  "Januari";
                break;
            case 2:
                namabln = "Februari";
                break;
            case 3:
                namabln = "Maret";
                break;
            case 4:
                namabln = "April";
                break;
            case 5:
                namabln = "Mei";
                break;
            case 6:
                namabln = "Juni";
                break;
            case 7:
                namabln = "Juli";
                break;
            case 8:
                namabln = "Agustus";
                break;
            case 9:
                namabln = "September";
                break;
            case 10:
                namabln = "Oktober";
                break;
            case 11:
                namabln = "November";
                break;
            default:
                namabln = "Desember";
        }
    } else if (tglEsok == 29 && thnMsk == 2021) {
        tglEsok = 1
        switch(blnMsk + 1) {
            case 1:
                namabln =  "Januari";
                break;
            case 2:
                namabln = "Februari";
                break;
            case 3:
                namabln = "Maret";
                break;
            case 4:
                namabln = "April";
                break;
            case 5:
                namabln = "Mei";
                break;
            case 6:
                namabln = "Juni";
                break;
            case 7:
                namabln = "Juli";
                break;
            case 8:
                namabln = "Agustus";
                break;
            case 9:
                namabln = "September";
                break;
            case 10:
                namabln = "Oktober";
                break;
            case 11:
                namabln = "November";
                break;
            default:
                namabln = "Desember";
        }
    } else if (tglEsok == 32 && blnMsk == 12) {
        tglEsok = 1
        switch(blnMsk - 11) {
            case 1:
                namabln =  "Januari";
                break;
            case 2:
                namabln = "Februari";
                break;
            case 3:
                namabln = "Maret";
                break;
            case 4:
                namabln = "April";
                break;
            case 5:
                namabln = "Mei";
                break;
            case 6:
                namabln = "Juni";
                break;
            case 7:
                namabln = "Juli";
                break;
            case 8:
                namabln = "Agustus";
                break;
            case 9:
                namabln = "September";
                break;
            case 10:
                namabln = "Oktober";
                break;
            case 11:
                namabln = "November";
                break;
            default:
                namabln = "Desember";
        }
       thnMsk += 1
    } else {
        switch(blnMsk) {
            case 1:
                namabln =  "Januari";
                break;
            case 2:
                namabln = "Februari";
                break;
            case 3:
                namabln = "Maret";
                break;
            case 4:
                namabln = "April";
                break;
            case 5:
                namabln = "Mei";
                break;
            case 6:
                namabln = "Juni";
                break;
            case 7:
                namabln = "Juli";
                break;
            case 8:
                namabln = "Agustus";
                break;
            case 9:
                namabln = "September";
                break;
            case 10:
                namabln = "Oktober";
                break;
            case 11:
                namabln = "November";
                break;
            default:
                namabln = "Desember";
        }
    }
    var namabln;
    return tglEsok + " " + namabln + " " + thnMsk
}

// contoh 1

var tanggal = 29
var bulan = 2
var tahun = 2020

console.log(next_date(tanggal , bulan , tahun )) // output : 1 Maret 2020

// contoh 2

var tanggal = 28
var bulan = 2
var tahun = 2021

console.log(next_date(tanggal , bulan , tahun )) // output : 1 Maret 2021

// contoh 3

var tanggal = 31
var bulan = 12
var tahun = 2020

console.log(next_date(tanggal , bulan , tahun )) // output : 1 Januari 2021