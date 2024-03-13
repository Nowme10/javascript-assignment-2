
// 1.Create an object representin & a car with properties like "make," "model," and "year7" Write a function to
// display all the properties of the car


const car = {
    make: "suzuki",
    model: "Dezire ",
    year: 2024
}

const carDetails = (car) =>{
    for(let keys in car){
    //   console.log(`${keys} ${car[keys]}`)
    }
}
// carDetails(car)

// 2.Define an object that represents a student's information includin& nameu age and grade Implement a
// method to update the student's grade.
const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};

const upgrade = (newGrade) =>{
    if(  typeof newGrade === "string"){
        student.grade = newGrade
        // console.log(`upateGrade to ${newGrade}`)
    }else{
        // console.log(`invalid`)
    }

}
// upgrade("B")

3.

function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
const numberOfProperties = countProperties(myObject);
// console.log(`Number of properties: ${numberOfProperties}`);
4.
s