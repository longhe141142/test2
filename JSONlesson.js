"use strict";
const JSON_TEXT = `{
    "people" : {
        "age": 18,
        "carrer": {
            "name": "Student",
            "Department": "Software Engineer",
            "Hobbies": ["football","reading book","cars","coding!"] 
        },
        "pet": "Dog"
    }
}`

console.log(JSON_TEXT)

const objPeople  = JSON.parse(JSON_TEXT)

console.log(objPeople)
objPeople.name = "Long"
console.log(`His name is : ${objPeople.name}`)
console.log(`Hobbies: `);
console.log(objPeople.people)
for(const [val,index] of objPeople.people.carrer["Hobbies"].entries()){
    console.log(`val : ${val} index: ${index}`)
}

for(const [val,index] in objPeople.people.carrer["Hobbies"].entries()){
    console.log(`val : ${val} index: ${index}`)
}




