let dataString = "data string"
console.log(dataString)

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'ali berkata "hallo guyssssss"'
console.log(data1)
let data2 = "ardi berkata\"halo jugaaaaaaa\""
console.log(data2)
let data3 = "ali \tmemakan nasi goreng, \nenakkkkk"
console.log(data3)  

// 2. literal string (template literal spring)
let namaDepan = "aydin"
let namaTengah = "akmal"
let namaBelakang = "daffa"
let umur = 30
let namaLengkap = namaDepan + " " + namaTengah + " " + namaBelakang + " " + umur // ini menjadi string
console.log(namaLengkap)

// yang benar
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`
console.log(biodata)