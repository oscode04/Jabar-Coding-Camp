const readBooks = require('./callback.js')
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Jawaban soal 2
const buku = true
const bacaBuku2 = new Promise((resolve, reject) => {
    if(buku){
        resolve(readBooks(10000, books[0], sisaWaktu => {
                    readBooks(sisaWaktu, books[1], sisaWaktu => {
                        readBooks(sisaWaktu, books[2], sisaWaktu => {
                            readBooks(sisaWaktu, books[3], sisaWaktu => {sisaWaktu})
                        })
                })
        }))
    } else {
        reject()
    }
})

bacaBuku2
    .then(Response => Response)
    .catch(Response => Response)