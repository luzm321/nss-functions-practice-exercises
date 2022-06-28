//---------------- Age in Dog Years Exercise:----------------

// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7;

//     return ageInDogYears;
// };

// const dogAge = calculateAgeInDogYears(45).toFixed(2);
// console.log(dogAge);

//-----------------Best in Show Exercise:--------------------

// const displayFavoritePet = (favoritePet) => {
//     if (favoritePet === "meow") {
//         return "I like cats.";
//     };

//     return `My favorite dog breed is ${favoritePet}.`;
// };

// const myFavoritePet = displayFavoritePet("maltese");
// console.log("When it comes to pets, " + myFavoritePet);

// const myFavoritePet = displayFavoritePet("meow");
// console.log("When it comes to pets, " + myFavoritePet);

//----------------Addition Exercise:--------------------------

// const add = (num1, num2, num3) => {
//     const sum = num1 + num2 + num3;
//     return sum;
// };

// const addedNumbers = add(1, 2, 3);

// console.log(addedNumbers);

//-----------------Self-Driving Cars Exercise:-----------------

// const go = (direction, speed) => {
//     if (speed > 75) {
//         console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`);
//     }
//     console.log(`The car is moving ${direction} at ${speed} mph.`);
// };


// console.log(go("forwards", 45));
// console.log(go("backwards", 8));
// console.log(go("in circles", 12));
// console.log(go("forward", 82));

//-----------------Evens or Odds Exercise:-----------------------

// const evenOrOdd = (number) => {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     };
// };

// console.log(evenOrOdd(4));
// console.log(evenOrOdd(5));

// const numbersArray = [0, 1, 2, 3, 4, 5];

// for (const number of numbersArray) {
//     console.log(evenOrOdd(number));
// };

//-------------------Double Functions Exercise (Using filter method on a function to achieve goal):------------------

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ];

/*
    Function that filters out `k` words and also builds a single string/sentence from the array
 */

// const filterKWords = () => {
//     const filteredWords = words.filter(word => {
//         if (word.startsWith("k")) {
//             //startsWith() method returns true if meets condition so don't need to do anything in if statement
//         } else {
//             return word; // words with the "k" filtered out
//         };
//     });
//     // console.log(filteredWords);
//     const filteredSentence = filteredWords.join(" ");
//     console.log(`${filteredSentence}.`);
// };

// filterKWords();

//----------------------You Can Tune A Piano, But You Can't...Exercise:--------------------------------------

// const catchingTunaProbability = () => {
//     if (Math.round(Math.random() * 2) <= 1) {
//         console.log("Sven hooked a tuna! :)");
//         return true;
//     } else {
//         console.log("Sven came up empty-handed. :(");
//         return false;
//     };
// };

// console.log(catchingTunaProbability());

//----------------------Fast Food (Multiple Parameters) Exercise:---------------------------------------------

// const orderMeal = (sandwich, side, drink, dessert) => {
//     const myMeal = {
//         mySandwich: sandwich,
//         mySide: side,
//         myDrink: drink,
//         myDessert: dessert
//     };

//     console.log(`I would like to order a ${myMeal.mySandwich} sandwich, ${myMeal.mySide}, ${myMeal.myDrink}, and ${myMeal.myDessert} for lunch as a takeout.`);
//     return myMeal;
// };

// const takeOutBag = orderMeal("roast beef", "sweet potato fries", "taro boba", "strawberry cheesecake");
// console.log(takeOutBag);

//----------------------------Same Chores, Different Days Exercises(Higher Order Functions):-------------------------------------------

                                            //*Number function example*:

//Individual functions:
// const twice = number => number * 2;
// console.log(twice(2));

// const timesFive = number => number * 5;
// console.log(timesFive(2));

// const square = number => number * number;
// console.log(square(2));

// const cube = number => Math.pow(number, 3);
// console.log(cube(2));

// *Higher Order Function*:

// const bigify = (number, operationFunction) => {
//     const result = operationFunction(number);
//     return result;
// };

// *Performing all four operations on the same number by invoking bigify()*:

// const number = 2;

// const multiplyByTwo = bigify(number, twice);
// console.log(multiplyByTwo);

// const multiplyByFive = bigify(number, timesFive);
// console.log(multiplyByFive);

// const squaredValue = bigify(number, square);
// console.log(squaredValue);

// const cubedValue = bigify(number, cube);
// console.log(cubedValue);

                                                // *Defining the Chores example*:

// const person = {
//     firstName: "Donald",
//     lastName: "McLelland"
// };

// const groceryShopping = person => `${person.firstName} ${person.lastName} went to the grocery store to shop.`;

// const shopping = groceryShopping(person);
// console.log(shopping);

// const vacuumingCarpet = person => `${person.firstName} ${person.lastName} vacuumed the carpeted floor.`;

// const vacuuming = vacuumingCarpet(person);
// console.log(vacuuming);

// const washingDishes = person => `${person.firstName} ${person.lastName} washed the dishes after dinner.`;

// const washDishes = washingDishes(person);
// console.log(washDishes);

// const cookingDinner = person => `${person.firstName} ${person.lastName} prepared supper.`;

// const madeSupper = cookingDinner(person);
// console.log(madeSupper);

// const mowingLawn = person => `${person.firstName} ${person.lastName} mowed the lawn in the backyard`;

// const mowing = mowingLawn(person);
// console.log(mowing);

// const wateringPlants = person => `${person.firstName} ${person.lastName} watered the plants in the balcony.`;

// const watering = wateringPlants(person);
// console.log(watering);

                                                // *Lazy Day example*:


// const person = {
//     firstName: "Yolanda",
//     lastName: "Johnson"
// };

// const mowingLawn = person => `${person.firstName} ${person.lastName} mowed the lawn in the backyard`;

// const dayPlanner = (chore, day) => `${chore} on ${day}.`;

// const plannedLazyDay = dayPlanner(mowingLawn(person), "Thursday");
// console.log(plannedLazyDay);

                                    // *Busy Day example(Refactoring dayPlanner function to accept more parameters)*:

// const person = {
//     firstName: "Yolanda",
//     lastName: "Johnson"
// };

// const mowingLawn = person => `${person.firstName} ${person.lastName} mowed the lawn in the backyard`;
// const groceryShopping = person => `${person.firstName} ${person.lastName} went to the grocery store to shop`;
// const cookingDinner = person => `${person.firstName} ${person.lastName} prepared supper`;

// const dayPlanner = (firstChore, secondChore, thirdChore, day) => `On ${day}, ${firstChore}, and ${secondChore}, and ${thirdChore}.`;

// const plannedBusyDay = dayPlanner(mowingLawn(person), groceryShopping(person), cookingDinner(person), "Monday");
// console.log(plannedBusyDay);

// ----------------------------------------------------------------------------------------------------

/*Passenger Counter App: */
let innerEl = document.getElementById("count-el");
let count = 0;

const increment = () => {
    count = count + 1;
    innerEl.innerText = count;
};





