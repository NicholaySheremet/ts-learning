var isFetching = true;
var isLoading = false;
var int = 42;
var float = 3.3;
var num = 3e1;
var message = 'Test string';
var numberArray1 = [1, 3, 4, 5];
var numberArray2 = [2, 3, 4, 5];
var words = ['test', 'string'];
//
var contact = ['test', 1];
//any
var variable = 22;
variable = 'string';
function sayName(name) {
    console.log(name);
}
sayName('User');
//never
function throwErr(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        console.log(1);
    }
}
var login1 = 'admin';
var id1 = '321';
var id2 = 321;
// err
// const id3: ID = true
