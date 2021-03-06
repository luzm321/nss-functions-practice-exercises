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

// ------------------Passenger Counter Exercise----------------------------------------------------------------------------------

/*Passenger Counter App: */
// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el")
// let count = 0;

// const increment = () => {
//     count += 1;
//     countEl.textContent = count;
// };

// const save = () => {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0;
//     count = 0;
//     //console.log(count)
// };

// -------------------------Calculator Exercise:--------------------------------------

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let sumEl = document.getElementById("sum-el");

// const add = () => {
//     result = num1 + num2;
//     sumEl.textContent = "Sum: " + result;
// };

// const subtract = () => {
//     result = num1 - num2;
//     sumEl.textContent = "Sum: " + result;
// };

// const divide = () => {
//     result = num1 / num2;
//     sumEl.textContent = "Sum: " + result;
// };

// const multiply = () => {
//     result = num1 * num2;
//     sumEl.textContent = "Sum: " + result;
// };

// Blackjack Game Exercise:


// let player = {
//     name: "Luz",
//     chips: 500
// };

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");
// let playerEl = document.getElementById("player-el");

// playerEl.textContent = `${player.name}: $${player.chips}`;

// const getRandomCard = () => {
//     let randomNumber = Math.floor( Math.random() *13 ) + 1;
//     if (randomNumber > 10) {
//         return 10;
//     } else if (randomNumber === 1) {
//         return 11;
//     } else {
//         return randomNumber;
//     };
// };

// const startGame = () => {
//     isAlive = true;
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();
//     cards = [firstCard, secondCard];
//     sum = firstCard + secondCard;
//     renderGame();
// };

// const renderGame = () => {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     };
    
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     };
//     messageEl.textContent = message;
// };


// const newCard = () => {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard();
//         sum += card;
//         cards.push(card);
//         renderGame();      
//     };
// };

// Rock Paper Scissors Exercise:
// let hands = ["rock", "paper", "scissors"];

// function returns a random item from the array:
// const getHand = () => {
//     let randomIndex = Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// };

// console.log( getHand() );


//Emoji Battle Practice:

// const fighters = ["????", "????", "????","????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????","????", "????", "????"];

// const stageEl = document.getElementById("stage");
// const fightButton = document.getElementById("fightButton");

// fightButton.addEventListener("click", () => {
//     // When the user clicks on the "Choose Fighters" button, two random 
//     // emoji fighters are chosen and displayed: i.e. "???? vs ????" in the "stage" <div>.
//     const firstRandomFighter = Math.floor( Math.random() * fighters.length);
//     const secondRandomFighter = Math.floor( Math.random() * fighters.length);
//     stageEl.textContent = `${fighters[firstRandomFighter]} vs ${fighters[secondRandomFighter]}`; 
// });

//Sorting Fruits Exercise:

// let fruits = ["????", "????", "????", "????", "????"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// Function puts the apples onto the appleShelf
// and the oranges onto the orangeShelf.

// const sortFruits = () => {
//     for (let i = 0; i < fruits.length; i++) {
//         if (fruits[i] === "????") {
//             appleShelf.textContent += fruits[i]
//         } else if (fruits[i] === "????") {
//             orangeShelf.textContent += fruits[i]
//         }
//     };
// };

// sortFruits();

//----------------------------------URL Tracker Chrome Extension---------------------------------------------

//URL Tracker Chrome Extension:

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
};

tabBtn.addEventListener("click", () => {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
    });
});

// Display leads array as lists to the DOM
const render = (leads) => {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    };
    ulEl.innerHTML = listItems;
};

// clear localStorage
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

// set myLeads array as string to localStorage
inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
});

// String Generator Function:
// The function takes two parameters: a description and an array.
// It returns a string based upon the description and array.
const generateSentence = (desc, arr) => {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString;
};

const sentence = generateSentence("best fruits", ["mango", "strawberry", "apple"]);
console.log(sentence);