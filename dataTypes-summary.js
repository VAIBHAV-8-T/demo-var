// primitive data types
// 7types
// -String,Number,Boolean,null,undefined,Symbol,BigInt

// java script is dynamically type language

//  const score = 100
//  const scoreValue =100.3
  
//  const isLoggedIn = false
 const outsideTemp = null
//  let userEmail;

//  const id = Symbol('123')
//  const anotherId = Symbol('123')
//  console.log(id===anotherId);
 
// const bigNumber = 34565435n

// Reference(Non Primitive)
// Array,Objects,Function

// const heroes =["shaktiman","naagraj","doga"]



// let myObj ={
//     name:"vaibhav",
//     age:24,
// }


// const myFunction = function(){
//     console.log("hello");
    
// }

// console.log(typeof outsideTemp);


// ==============//
// memory
// 
// Stack(primitive),Heap(Non Primitive)

// let myName = "vaibhav"
// let anothername = myName

// anothername = "harshit"
// console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "vav@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

