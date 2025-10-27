

function coding(num){
    if(num ===0 ){
        console.log("coding has bees done");
        
    }
    else{
        console.log("i m doing coding");
        coding(num-1)
        
    }

}

// coding(5)


function factoriol(n){
if(n === 1){
    return 1
}
    let fact = n*factoriol(n-1)
    return fact

}

console.log(factoriol(5));
