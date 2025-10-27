// DRY:-  do not repeat yourself

function name(){

    console.log("funcation is called");
    
}

function naresh(){
    console.log("this is js course");
    console.log("i a learning jjavascript");
    
    
}
function squre(num){
    console.log(num*num);
    
}

function simpleIntrest(p, r, t){
    let resul =(p*r*t)/100
        // console.log(resul);
        return resul
        
}
let ans = simpleIntrest(10000, 2,3)
console.log(ans);


squre(5)


name();
naresh();