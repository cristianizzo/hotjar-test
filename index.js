var clients = [
    {name:"Cristian", age:30, gender:"M"},
    {name:"Marco", age:36, gender:"M"},
    {name:"Jack", age:29, gender:"M"},
    {name:"Roberts", age:41, gender:"M"},
    {name:"Sindy", age:26, gender:"F"},
    {name:"Marisa", age:50, gender:"F"},
    {name:"Monica", age:24, gender:"F"}
];

var result = clients.filter(function (person) {
   return  person.gender === "M" && person.age >= 30 && person.age <= 40;
});

console.log(result);