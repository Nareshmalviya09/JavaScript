
// object litral

let mydetails ={
    name:  "naresh",
    price:  3999,
    isEmpty: false,
    lacNum: 14,
    courses: {
        js: "javaScript",
        py: "python"
    }
}

// we can access data by to ways

// dot notation =>   
    console.log(mydetails.price);

// bracket notation
// console.log(mydetails["course"]);


mydetails.isEmpty=true;
// console.log(mydetails.isEmpty);

// delete mydetails.name

console.log(mydetails.courses.js);


for(let key in mydetails)
{
    console.log(mydetails[key]);
    
}

// let person =new Object()     using new keyword

