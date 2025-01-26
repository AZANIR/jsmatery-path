var customVariable = 'Hello World'; //old way
let customVariable2 = 'Let Hello World'; //new way, editable
const customVariable3 = 'Const Hello World'; //new way, uneditable

console.log(customVariable);
console.log(customVariable2);
console.log(customVariable3);

customVariable2 = 'Changed Hello World';

console.log(customVariable2);

let variableString = 'String';
console.log(typeof variableString);
let variableNumber = 1;
console.log(typeof variableNumber);
let variableBoolean = true;
console.log(typeof variableBoolean);
let variableArray = [1, 2, 3];
console.log(typeof variableArray);
let variableObject = {
    key: 'value'
};
console.log(typeof variableObject);
let variableFunction = function() {
    console.log('Function');
}
console.log(typeof variableFunction);
let variableUndefined = undefined;
console.log(typeof variableUndefined);
let variableNull = null;
console.log(typeof variableNull);
let variableNaN = NaN;
console.log(typeof variableNaN);
let variableSymbol = Symbol('Symbol');
console.log(typeof variableSymbol);

// Its a simply comment

/*
    Its a multiline comment
*/

let nameUser = 'Hanna';
let hello = `Hello ${nameUser}!`;
console.log(hello);

