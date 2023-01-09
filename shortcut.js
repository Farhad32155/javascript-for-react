//falsy and truthy
//falsy->''(empty string),0,false,null,undefirned,NaN --- everything without falsy is truthy

//check any truthy
let myVar = 5;//this is a truthy value
if (myVar) {//here myVar is true since it contains a truthy value.
    myVar = myVar * 50;
}
else {
    myVar = 0;
}

//check any falsy
let myMoney = 50;
if (!myMoney) {
    console.log(myMoney);
}
else {
    console.log(myMoney - 10);
}

//regular if else and shortcut if-else using ternary operator(?)
let food;
const money = 100;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cake';
}
console.log(food);
//ternary operator----if I need a return--since I need a return that is why I am storing that in a variable called food1
let food1 = money <= 100 ? 'biryani' : 'cake';//which conditions staisfy then that value will be set for food1
console.log(food1);

//ternary operator--if I don't need a return
const isActive = true;
const isFalse = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();//I don't need a return here just need execution if isActive true then showUser() else hideUser()

//shortcut && and ||
isActive && showUser();//use && if left side is true then right side will be executed since both need to be true
isFalse || hideUser();//use || if left side false then right side will be executed

//boolean toogle
/* isActive = !isActive; */

//number to string
const num = 52;
console.log(num);
const numStr = num + '';//if I wan to convert a number into a string then just an empty string with number
console.log(numStr);

//string to number
const input = '522';
console.log(input);
const inputNum = +input;//if I want to convert a string into a number then add + before the variable name which conatins that string