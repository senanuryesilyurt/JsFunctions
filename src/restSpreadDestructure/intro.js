//REST Parameter
//...products ifadesinin kendisi bir arraydir. Buradaki ... rest parametrresi diyoruz.
let showProducts= function (id,...products) {
    console.log(id)
    console.log(products)
 }
 showProducts( 10,"Nergis","Papatya","Karanfil")
 
 //SPREAD Parameter
 //Bir array'i virgül ile ayrıştırmayı sağlıyor.
 let points=[20,15,43,48,70]
 console.log(Math.max(...points))
 console.log(..."ABC","D",..."EFG","H")
 
 //DESTRUCTURING
 //Bir array in elemanlarını tek tek değişkenlere atar.
 let populations=[10000,4000,15000,[195000,25000]]
 // let [medium,small,high,[veryHigh,other]]=populations
 // console.log(small)
 // console.log(medium)
 // console.log(high)
 // console.log(other)
 // console.log(veryHigh)
 
 //OR
 
 let [medium,small,high,arry]=populations
 console.log(small)
 console.log(medium)
 console.log(high)
 let veryHigh=(arry[0])
 let other=arry[1]
 console.log(other)
 console.log(veryHigh)
 