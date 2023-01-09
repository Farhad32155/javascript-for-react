//Array destructuring
const numbers = [50, 60];
/* const first = numbers[0];
const second = numbers[1]; *///old
// console.log(first, second);

/* const [first, second] = [50, 60];
console.log(first, second); */

/* const [first, second] = numbers;
console.log(first, second); */

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const [first, second] = boxify(90, 34);//boxify returns an array
console.log(boxify(40, 50));
console.log(first, second);
//-----In array destructuring order must be maintained----
const student = {
    name: 'farhad',
    age: 24,
    books: ['handsOn', 'let us c', 'compiler design']
};
const [firstBook, secondBook] = student.books;
console.log(firstBook, secondBook);
//--In right side an array must be present whether a direct array or array in the form of varibale or a function that returns an array

//-----
//->Object destructuring--ordering doesn't matter--2 level at a time is not possible
const { name, age } = { name: 'alu', age: 14 };
const { salary, id } = { id: 1, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specefication: {
        height: 66,
        weight: 70,
        address: 'rayerbag',
        drink: 'water'
    },
    watch: {
        color: 'black',
        price: 500,
        brand: 'garmin'
    }
};

const { machine, ide } = employee;
const { weight, address } = employee.specefication;
const { brand } = employee?.specefication?.watch;//optional chaining(?)

