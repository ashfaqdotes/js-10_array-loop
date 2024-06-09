// #1 Declare and initialize an empty multidimensional array. (Array of arrays):-
let emptyArr = [[], [], []];

// #2 Declare and initialize a multidimensional array representing the following matrix:-
let matrixArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(matrixArr[0] + '<br>' + matrixArr[1] + '<br>' + matrixArr[2]);
for (var i = 0; i < matrixArr.length; i++){
  // console.log(matrixArr[i])
  for (var j = 0; j < matrixArr[i].length; j++){
    document.write(matrixArr[i][j]);
  }
  document.write("<br>")
}


// #3 Write a program to print numeric counting from 1 to 10.
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

// #4 Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.
let table = +prompt('Enter a number to Generates its Table: ','2');
let tableLength = +prompt('Enter the Table Length: ','10');
document.write(`<br> Table of ${table} <br> Table Length: ${tableLength} <br>`);
for (let i = 1; i <= tableLength; i++){
  document.write(`${table} X ${i} = ${table * i} <br>`);
}
document.write('<br><br>');

// #5 Write a program to print items of the following array using for loop:
fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (let i = 0; i<fruits.length; i++){
  document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}
document.write('<br>')

// #6 Generate the following series in your browser.

// Counting:
document.write('<br><b>Counting: </b>');
for (let i = 1; i < 15; i++){
  document.write(`${i}`+',');
}

// Reverse Counting:
document.write('<br><b>Reverse Counting: </b>');
for (let i = 10; i > 0; i--){
  document.write(`${i}`+',');
}

// Even: 
document.write('<br><b>Even: </b>');
for (let i = 0; i < 20; i++){
  if (i % 2 == 0) {
    document.write(`${i}`+',');
  }
}

// ODD: 
document.write('<br><b>Odd: </b>');
for (let i = 0; i < 20; i++) {
  if (i % 2 == 1) {
    document.write(`${i}` + ',');
  }
}

// Series: 
document.write('<br><b>Series: </b>');
for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(`${i + 'k'}` + ',');
  }
}

document.write('<br><br>');

// #7 Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

let itemSearch = prompt("Welcome to ABC Bakery!, what do you want to order sir/ma'am?", "cookie");
let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

let itemFound = false
let itemNumber;
for (let i = 0; i <= A.length; i++) {
    if(itemSearch == A[i]){
        itemFound = true
        itemNumber = i
        break
    }
}

if(itemFound == true){
  document.write(itemSearch + ' is available at index ' + itemNumber + ' in our bakery.');
}
else{
  document.write('We are sorry. ' + itemSearch + ' is not available in our bakery.');
}

document.write('<br><br>');

// #8 Write a program to identify the largest number in the given array.
let numberList = [24, 53, 78, 91, 12];
var largestNumber = numberList[0];
for (var i = 1; i < numberList.length; i++) {
    if (numberList[i] > largestNumber) {
        largestNumber = numberList[i];
    }
}
document.write('The largest number is ' + largestNumber);

document.write('<br><br>');

// #9  Write a program to identify the smallest number in the given array.

let numberList2 = [24, 53, 78, 91, 12];
var smallestNumber = numberList2[0];

for (var i = 1; i < numberList2.length; i++) {
    if (numberList2[i] < smallestNumber) {
        smallestNumber = numberList2[i];
    }
}

document.write('The smallest number is ' + smallestNumber);
document.write('<br><br>')

// #10 Write a program to print multiples of 5 ranging 1 to 100.
for (let i = 1; i <= 20; i++){
    document.write(i*5 + ',');
}