
const myNumbers = [10, 20, 30];
console.log(myNumbers);
console.log("Array length:", myNumbers.length);

const myColors = ["red", "green"];
myColors.push("blue");
console.log(myColors);
console.log("Array length:", myColors.length);

const myNames = ["Tom", "Ann", "Bob"];
myNames.pop();
console.log(myNames);
console.log("Array length:", myNames.length);

const myEmptyArray: number[] = [];
myEmptyArray.push(5);
console.log("Array length after first add:", myEmptyArray.length);
myEmptyArray.push(15);
console.log("Array length after second add:", myEmptyArray.length);



const fiveNums = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNums.length; i++) {
    console.log(fiveNums[i]);
}

let sum = 0;
for (let i = 0; i < fiveNums.length; i++) {
    sum += fiveNums[i];
}
console.log("Sum of numbers:", sum);

const threeNums = [2, 4, 6];
const newNums: number[] = [];
for (let i = 0; i < threeNums.length; i++) {
    newNums.push(threeNums[i] * 2);
}
console.log(newNums);

for (let i = threeNums.length - 1; i >= 0; i--) {
    console.log(threeNums[i]);
}


const numbers = [10, 5, 20, 8, 15];
let maxNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}
console.log("Maximum number:", maxNum);
let minNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
        minNum = numbers[i];
    }
}
console.log("Minimum number:", minNum);
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Even numbers count:", evenCount);
const mixedNums = [-5, 7, -2, 10];
const positiveNums: number[] = [];
for (let i = 0; i < mixedNums.length; i++) {
    if (mixedNums[i] > 0) {
        positiveNums.push(mixedNums[i]);
    }
}
console.log("Positive numbers array:", positiveNums);
