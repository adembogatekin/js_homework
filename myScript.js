// 1- Belirlediğimiz sayı aralığında rasgele sayı üreten fonksiyonu yazınız
// örnek :  console.log(rasgele(1,10)) -> 1 ile 10 arasında rasgele sayı üretir.

console.log (Math.ceil(Math.random()*10))


// 2- Elimizdeki people dizisiyle people2 yi oluşturalım.
// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people2)  -> ["Greg", "Elizabeth", "Mary", "Artie", "James"]

let people = ["Greg", "Mary", "Devon", "James"];
people.splice(1,2,"Elizabeth", "Mary", "Artie")
let people2 = people
console.log(people2)

// 3- 
// function dönüştürücü(text1) text1= mustafa_selman@gmail.com -> Mustafa Selman
// function dönüştürücü(text2) text1= mehmet_colak@hotmail.com -> Mehmet Colak
// function dönüştürücü(text3) text1= yasin_sezer@yandex.com -> Yasir Sezer
// bu üç veriyi de yanda yazılan çıktılara dönüştüren fonksiyonu yazın. (üç ayrı fonksiyon değil tek fonksiyon istiyoruz.)

function donusturucu (emailadresi) {
    const splitName = emailadresi.split("@")[0];
    const text1 = splitName.split("_");
    let ad = text1[0][0].toUpperCase() + text1[0].substring(1);
    let soyad = text1[1][0].toUpperCase() + text1[1].substring(1);
    let fullName = ad +" "+ soyad;
   
    console.log(emailadresi, "adresi", fullName, "'a aittir.")
    return  
 }
console.log(donusturucu("mustafa_selman@gmail.com"))
console.log(donusturucu("mehmet_colak@hotmail.com"))
console.log(donusturucu("yasin_sezer@yandex.com"))



// 4- let sayilar = [12,34,2,3,67,66,5,24]
// function maxSecond(sayilar) -> elimizdeki dizinin en büyük ikinci değerini veren fonksiyon
// function minSecond(sayilar) -> elimizdeki dizinin en küçük ikinci değerini veren fonksiyon
// yukarıdaki fonksiyonları oluşturunuz.

let sayilar = [12,34,2,3,67,66,5,24];

function maxSecond (sayilar){
    yenisira = sayilar.sort( function(a,b) {return b-a})
    return yenisira[1]
}

function minSecond () {
    yenisira2 = sayilar.sort(function(a,b) {return a-b});
    return yenisira2[1]
}
 console.log(maxSecond(sayilar));
 console.log(minSecond(sayilar));