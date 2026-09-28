// const users={
//     'name':'John',
//     'age':30,
//     'skills':['Python','SQL','JavaScript'],
// }

// console.log(users.name);
// console.log(users.age);
// console.log(users.skills[0]);

// users.city='New York';
// console.log(users.city);

// delete users.age;

// console.log(users)

const users=[
    {name:"John",age:21},
    {name:"Jane",age:25},
    {name:"Jack",age:30}

]

const names=users.map(user=> user.name);
console.log(names);

const age= users.filter(user=>user.age <26);
console.log(age);