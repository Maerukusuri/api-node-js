//create array of number
let userIdArrayEmpty: number[] = []; //empty
let userIdArrayNotEmpty: number[] = [11, 0, 77]; // not empty

//get value by array index
console.log('first element: ' + userIdArrayEmpty [0]); //first element
console.log('second element: ' + userIdArrayNotEmpty [1]); //second element
//get lenght
console.log('length: ' + userIdArrayNotEmpty.length);

//add a new value
userIdArrayNotEmpty.push(88);
console.log('new element: ' + userIdArrayNotEmpty[3]);
console.log('length: ' + userIdArrayNotEmpty.length);

//reassign value by index and provide new value
userIdArrayNotEmpty[3] = 99;
console.log('updated element: ' + userIdArrayNotEmpty[3]);
console.log('whole array: ' + userIdArrayNotEmpty);

//implementing the loop
let loopIterationIndex;
for (loopIterationIndex = 0; loopIterationIndex < 4; loopIterationIndex++) {
    //output the content of each element in iterations
    console.log('index: ' + loopIterationIndex);
    console.log('value of array by index: ' + userIdArrayNotEmpty[loopIterationIndex]);
}


