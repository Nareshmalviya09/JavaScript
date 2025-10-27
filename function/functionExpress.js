// arrow function

// let arrowfunc = (username) => console.log(`my name is ${username}`);
// arrowfunc("naresh")

//IIFE -> immediatly invoked function expression
// (function(){
//     console.log("this course is good");
    
// })();


// nested function

// function outer(){
//     function inner(){
//         console.log("this is inner function"); 
//     }
//     console.log("this is outer");
//     inner();
// }

// outer();


// question 1 ->swap number

function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
    console.log(a +" "+b);
}
// swap(10,50)

function countVowles(str){
 const vowle ="aeiouAEIOU"
 let count=0;
 for(let char of str){
    if(vowle.includes(char)){
        count++;
    }
 }
console.log(count);
}

countVowles("aeiou")