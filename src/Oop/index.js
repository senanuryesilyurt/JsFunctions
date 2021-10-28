/*class Customer{
    constructor(id,customerNumber){
        this.id=id //this === customer
        this.customerNumber=customerNumber
    }
}


let customer=new Customer(1,12345);
customer.name="Sena"
//prototyping
Customer.city="Eskişehir"
console.log(Customer.city);
console.log(customer.id);


class IndividualCustomer extends Customer{
    constructor(id,firstName,customerNumber){
        super(id,customerNumber) //super===Customer
        this.firstName=firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(id,companyName,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}
*/

let products =[
    {id:1, name:"Acer Laptop", unitPrice:15000},
    {id:2, name:"Asus Laptop", unitPrice:16000},
    {id:3, name:"Hp Laptop", unitPrice:13000},
    {id:4, name:"Dell Laptop", unitPrice:12000},
    {id:5, name:"Casper Laptop", unitPrice:17000}
]

//MAP Function

console.log("<ul>")
products.map(product=>console.log("<li>"+product.name+"</li>"))
console.log("<ul>")

// products.map(product=>{
//     console.log(product)
//     console.log(product.name)
// })

//FILTER Function
let filteredproducts=products.filter(product=> product.unitPrice<15000)
console.log(filteredproducts)

//REDUCE Function
let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal);

//MAP Function 2.Kullanımı
let cartTotal2=products
    .filter(p=>p.unitPrice>13000)  
    .map(p=>{p.unitPrice=p.unitPrice*1.18
        return p
    })
    .reduce((acc,product)=>acc+product.unitPrice,0)

    console.log(cartTotal2)
