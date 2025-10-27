let employees = [
  { id: 1, name: "Amit", department: "IT", salary: 55000, year: 2021 },
  { id: 2, name: "Priya", department: "HR", salary: 48000, year: 2020 },
  { id: 3, name: "Rohit", department: "Finance", salary: 60000, year: 2022 },
  { id: 4, name: "Sneha", department: "Marketing", salary: 52000, year: 2023 },
  { id: 5, name: "Vikram", department: "Admin", salary: 45000, year: 2021 }
];


// we can access and manipulate data with the help of map() method

let salary = employees.map((emp)=>{
    return emp.id + "0" 
})
// console.log(salary);

let a = employees.filter((emp)=>{

    return emp.salary >50000
}).map((name)=>{

  return name.name
})

// console.log(a);

let totatl=employees.reduce((acc,curr)=>{
  return acc+ curr.salary
},0)

console.log(totatl);


