const numbers = [10, 20, 30, 15, 56];
const student = {
    name: 'farhad',
    age: 24,
    books: ['handsOn', 'let us c', 'compiler design']
};

//1.template string(backtik)->heavily used for dynamically load data
const myInfo = `My name is ${student.name} and my age is ${student.age}. My favourite books is ${student.books[0]} and currently remembering the number ${numbers[2]}`;
console.log(myInfo);

//2. arrow function

const test = singleParameter => singleParameter;//while single param no need to give () and if single line automatically return
const watchTest = test(65);
console.log(watchTest);

//multiple parameter but single line return
const multiPara = (num1, num2) => num1 * num2;//must give parametrs inside ()
const watchMultiParam = multiPara(9, 10);
console.log(watchMultiParam);

//multile line arrow function in this case we need to give {} and explicitly return something from inside the function body
const multiLine = (x, y, z) => {
    if (x > y) {
        const sum = x + z;
        return sum;
    }
}
const watchMultiLine = multiLine(10, 5, 50);
console.log(watchMultiLine);

//spread operator

const newNumbers = numbers;//holds the reference and if older one change new one will also change
console.log(newNumbers);
//numbers.push(99);
const testNumbers = [numbers];//it will make a 2D array
console.log(testNumbers);

//right way to copy an older array to a new one and cut the relation with the older one is---->
const noyaNumbers = [...numbers];
console.log(noyaNumbers);

//create a new array from an older array and add an elemennt

const addNumbers = [...numbers, 55];//it will copy the older array and add 55 at last
console.log(addNumbers);