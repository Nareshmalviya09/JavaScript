let nums=[1,2,3,4,5,6,7,8,9]
// map()

// function double(nums) { 
//     return nums*2;
// }
// =================================================
// let d = nums.map((nums) => { 
//       nums*2;
// })
// =======================================================
// let d = nums.map((nums) => nums*2)
// console.log(d);


//fillter

// let numbers=nums.filter((num)=>{
     
//         return num >5
 
// })

// console.log(numbers);


//reduce *****************************************************************

let sum =nums.reduce((accumulator, currentvalue )=>{
    accumulator = accumulator + currentvalue
    return accumulator

},0)
// console.log(sum);


// *********************chaining **************************************************
let max = nums.filter((five)=>{
    return five>=5
}).reduce((acc, curV)=>{
  return acc+ curV;
},0)
console.log(max);

