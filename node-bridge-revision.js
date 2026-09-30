// const student={
//     'name':'John',
//     'age':21,
//     'branch':"Data Science",
//     'skills':['Python','SQL','JavaScript'],
// };

// console.log(student.name);
// console.log([student.age]);

// student.city='New York';
// student.age=22;

// delete student.branch;
// const [skill1, skill2, skill3]=student.skills;
// console.log(skill1);
// console.log(skill2);
// console.log(skill3);

// const users=[
//     {name:"John",age:21,salary:50000},
//     {name:"Jane",age:25,salary:60000},
//     {name:"Jack",age:30,salary:70000},
//     {name:"Jill",age:28,salary:80000}
// ]

// users.forEach(user=>{
//     return console.log(user.name)
// });

// const name=users.map(user=>user.name);
// console.log(name);

// const filterdUsers= users.filter(user=>user.age>21);
// console.log(filterdUsers);

// const findUser=users.find(user=>user.name==="Jill");
// console.log(findUser);

// const salaries=users.map(user=>user.salary);
// console.log(salaries);

// const totalSalary=salaries.reduce((sum,salary)=>{
//     return sum+salary;},0);

// console.log(totalSalary);

// const total_user=name.length;
// console.log(total_user);

// const avg_salray=totalSalary/total_user;
// console.log(avg_salray);

// const user = {
//     name: "Tushar",
//     age: 21,
//     city: "Mangalore"
// };

// const {name,age,city}=user;
// console.log(name);
// console.log(age);
// console.log(city);

// const user={
//     name:"Tushar",
//     age:21
// }
// const newUser={
//     ...user,
//     city:"Mangalore"
// }
// console.log(newUser);

// function calculateTotal(...numbers){
//     return numbers.reduce((sum,num)=>{
//         return sum+num;
//     },0);
// }

// console.log(calculateTotal(1, 2, 3, 4, 5));

function greet(name,callback){
    console.log("hello "+name);
    callback();
}
function done(){
    console.log("Task completed!");
}

console.log(greet("Tushar",done));