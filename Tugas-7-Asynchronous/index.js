var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Jawaban soal 1
const bacaBuku = () => readBooks(10000, books[0], sisaWaktu => {
    readBooks(sisaWaktu, books[1], sisaWaktu=>{
        readBooks(sisaWaktu, books[2], sisaWaktu=> {
            readBooks(sisaWaktu, books[3], sisaWaktu =>{
                sisaWaktu
            })
        })
    })
})

bacaBuku()

