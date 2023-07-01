console.log("Hunter Peay | Coding Assignment Week 4 | May 2023 FE")
console.log("---------------------------------------------------------------------")
//Question 1

// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

//     Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//         Do not use numbers to reference the last element, find it programmatically.
//         ages[7] - ages[0] is not allowed!
//     Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//     Use a loop to iterate through the array and calculate the average age.
console.log("Question 1")
//MY CODE BELOW 
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
//Use ages.length -1 to access 93, and then using ages[0] to access the first. Subtracting last element from first element.
console.log("The difference of the first age from the last age is " + (ages[ages.length - 1] - ages[0]) + ".");

//Use ages.push(112) to add 112 to the end of the array. Calculate using previous code's format.
ages.push(112)
console.log(ages); //Used this to ensure new age of 112 was added.
console.log("The new difference of the first age from the last age is " + (ages[ages.length - 1] - ages[0]) + ".");


function averageAge(ages)  {
    let sum = 0;  //set the sum equal to zero
    for (let i = 0; i < ages.length; i++){  //looped throught the array and then used sum += ages[i] to add each age to the sum.
        sum += ages[i];
    }
    return sum/ages.length; // returned the sum and divided it by the length of ages.
}

console.log(averageAge(ages));  //Called the function and passed the array through the function. Output: 38

console.log("---------------------------------------------------------------------")
// Question 2
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

//     Use a loop to iterate through the array and calculate the average number of letters per name.
//     Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log("Question 2")
// MY CODE BELOW:
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
// console.log(names)  Checked to see if array prints to console correctly. It passed.

function lettersAverage(names) {
    let count = 0;
    for(let i = 0; i < names.length; i++){
        count += names[i].length;  //names[i].length will count the characters in each element, and thus will add them to the count as the loop iterates.
    }
    return count/names.length; //Divide the total count of 23 letters by the length of the array.
}
console.log(lettersAverage(names));  //Output: 3.8333333333333335


  for(let i = 0; i < names.length; i++){ //Loop to iterate through array
    console.log(names.join(" ")); //Used names.join(" ") to add a space between each element and print to console.
}

console.log("---------------------------------------------------------------------")

// Question 3

// How do you access the last element of any array?
console.log("Question 3")
// MY CODE BELOW:

//To access the last element of an array, you use [array.length - 1] in your console.log.
//Example:
let berMonths = ["September", "October", "November", "December"];
console.log(berMonths[berMonths.length - 1]); //Output: December

console.log("---------------------------------------------------------------------")
//Question 4

//How do you access the first element of any array?
console.log("Question 4")
// MY CODE BELOW:

//To access the first element of an array, you will access it at [0]. Arrays start at 0 and then count forwards.
//Example:
console.log(berMonths[0]); //Output: September

console.log("---------------------------------------------------------------------")
//Question 5

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
console.log("Question 5")
// MY CODE BELOW:

let nameLengths = []; //Create empty function to push integers into.

function nameLengthIntegers(nameLengths){ //Create function to iterate through names.
  for(let i = 0; i < names.length; i++){
     nameLengths.push(names[i].length); //Pushes each name through the iteration and counts each element using .length
  }
  return nameLengths //Returns integers for each iteration.
}

console.log(nameLengthIntegers(nameLengths)) //Output: let nameLengths = [3, 5, 3, 5, 4, 3]

console.log("---------------------------------------------------------------------")
//Question 6

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log("Question 6")
// MY CODE BELOW

function sumOfIntegers(nameLengths){ //Function that sets nameLengths as the parameter.
    let count = 0; //set count to 0
    for(let i = 0; i < nameLengths.length; i++){ //iterate through arrays
        count += nameLengths[i]; //start at 0 and add all the elements of the array as it iterates
    }
    return count; //returns the result
}

console.log(sumOfIntegers(nameLengths)) //Output: 23

console.log("---------------------------------------------------------------------")
//Question 7

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log("Question 7")
// MY CODE BELOW
const hello3 = (word, n) => word.repeat(n); //Create a function that uses .repeat() to repeat the string "word" by "n" number of times.

console.log(hello3("Hello", 3))// "Hello" and 3 are passed through. Output: HelloHelloHello

console.log("---------------------------------------------------------------------")
//Question 8

//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.
console.log("Question 8")
// MY CODE BELOW
const fullName = (firstName, lastName) => firstName + " " + lastName //Function takes in firstName and lastName with a " " between to add a space when returned.

console.log(fullName("Hunter", "Peay")) //Passes through "Hunter" and "Peay"  Output: Hunter Peay

console.log("---------------------------------------------------------------------")
//Question 9

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
console.log("Question 9")
// MY CODE BELOW

const numbersArray = [13, 12, 8, 22, 35, 10]

function isGreaterThan100(numbersArray){
    if (numbersArray > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isGreaterThan100(numbersArray));

console.log("---------------------------------------------------------------------")
//Question 10

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("Question 10")
// MY CODE BELOW

const averageOfNumbersArray = (numbersArray) => { //function created using arrow function
    let count = 0; // set count to 0
    for(let i = 0; i < numbersArray.length; i++) { //iterates through array
        count += numbersArray[i]; //adds each element together
    }
    return count/numbersArray.length; // calculates average
}

console.log(averageOfNumbersArray(numbersArray)); //Output: 16.666666666666668

console.log("---------------------------------------------------------------------")
//Question 11

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of 
//the elements in the second array.

console.log("Question 11")
// MY CODE BELOW

const numbersArray1 = [13, 12, 8, 22, 35, 10]
const numbersArray2 = [3, 5, 3, 5, 4, 3]

function theGreaterArray(numbersArray1, numbersArray2) {
    let total1 = 0;
    let total2 = 0; 
    for(let i = 0; i < numbersArray1.length; i++) { 
        total1 += numbersArray1[i];
    }
     numbersArray1Average = (total1/numbersArray1.length);
    console.log(numbersArray1Average);

    for(let i = 0; i < numbersArray2.length; i++) { 
        total2 += numbersArray2[i];
    }
    let numbersArray2Average = (total2/numbersArray2.length);
    console.log(numbersArray2Average);

    if (numbersArray1Average > numbersArray2Average) {
        return true;
    } else {
        return false;
    }
}

console.log(theGreaterArray(numbersArray1, numbersArray2));

console.log("---------------------------------------------------------------------")
//Question 12

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

console.log("Question 12")
// MY CODE BELOW

const willBuyDrink = (isHotOutside, moneyInPocket) => { //function with conditional.
    if (isHotOutside && moneyInPocket > 10.50) { //Checks if isHotOutside is true, and moneyInPocket is greater than 10.50
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 13.50)); // Output: True
console.log(willBuyDrink(true, 5.50)); // Output: False
console.log(willBuyDrink(false, 17.50)); // Output: False
console.log(willBuyDrink(false, 2.25)); // Output: False
console.log(willBuyDrink(true, 10.51)); // Output: True

console.log("---------------------------------------------------------------------")
//Question 13

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

console.log("Question 13")
// MY CODE BELOW
//My function is set to print the winner with the number of votes in an election between two political parties called the Hawk Party and the Dove Party.
const whoIsTheWinner = (hawkVotes, doveVotes) => { //Parameters are set to accept the number of votes for both parties.
    if(hawkVotes > doveVotes){
       return "The Hawk has won the election with " + hawkVotes + " votes!"; //each conditional returns a string with the votes added in.
    } else if(doveVotes > hawkVotes) {
        return "The Dove has won the election with " + doveVotes + " votes!";
    } else {
        return "The Hawks and Doves have tied the election with " + (hawkVotes || doveVotes)  + " votes each! The election will be decided with a coin flip!";
    } //Final string uses either the Hawk or Dove votes for the tied vote total. Since both are equal amounts, it does not matter which it prints.
}

console.log(whoIsTheWinner(125680, 117508)); //Output: Hawks win!
console.log(whoIsTheWinner(89967, 94285)); //Output: Doves win!
console.log(whoIsTheWinner(96778, 96778)); //Output: Coin flip!

console.log("---------------------------------------------------------------------")
console.log("Week 4 Coding Assignment Complete!")