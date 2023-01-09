//1.//How to declare a variable by using let and const
//1. if the value is fixed then we will use variable-> const
//2. if the value is not fixed then we will use variable-> let

//2.
//6 basic conditions{>, <, ===, !==, <=, >=}
//multiple conditions-> {&&->if both conditions are trure, ||-> if any one conditon is true}
// if, else if, else

const myName = 'farhad';
let myAge = 24;

if (myName === 'Farhad') {
    console.log(myName);
}
else if (myAge === 24) {
    console.log(myAge);
}

if (myName === 'farhad' && myAge === 24) {
    console.log(myName + ' he is ' + myAge + ' years old');
}

//3. Array -> how to declare an array

const numbers = [10, 20, 30, 15, 56];
console.log(numbers.length);//checking the total number of elements in the array by using length method
numbers[0] = 5;//seeting a value by using the index of the array
//how to push element in an array
console.log(numbers.indexOf(30));

//4.loop
//classic for loop, for each, for in, for of
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

//5.function-> declaring a function, giving parameters, making return and store it in a variable
//function key word, function name, parameters, body, return part, calling the function
//writing a function to multiply two numbers

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const myResult = multiply(5, 10);
console.log(myResult);

//6. Object->one of the most important things to know beside array and function

const student = {
    name: 'farhad',
    age: 24,
    books: ['handsOn', 'let us c', 'compiler design']
};

//-> 3 ways to access property by name

//first way-> direct by property
console.log(student.name);
//second way->access via string in that case need to give the property name  as a sting inside array
console.log(student['age']);
//third way->access via property name in a variable and that variable must contain the property name as a string also inside an array
const myPropertyName = 'age';
console.log(student[myPropertyName]);



