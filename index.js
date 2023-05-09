const coffeeMenu = require("./coffee_data.js"); // imports data from coffee_data.js file

console.log(coffeeMenu) // logs all menu items in an array of objects

const names = (item) => {
    return item.name // Returns the Name property values
}

const nameArr = coffeeMenu.map(names) // Stores Name values from coffeeMenu to a new array

console.log(nameArr) // Logs the new arr of Name property values


const fiveOrLess = (item) => { 
    return item.price <= 5  // <--- Returns items whose Price is less than or equal to 5
}

const fiveOrBelow = coffeeMenu.filter(fiveOrLess) // Filters coffeeMenu based on the function fiveOrLess and stores returned values to new variable

console.log(fiveOrBelow) // Logs the new array of items whose prices are less than or equal to 5 from the coffeeMenu data


const evenPriced = (item) => {
    return item.price % 2 === 0  // Divides price by 2 and checks for remainders, even numbers will have no remainder when divided by 2
}

const evenPrice = coffeeMenu.filter(evenPriced) // Filters values from coffeeMenu based on evenPriced function and stores them to new array

console.log(evenPrice) // Logs array of even priced objects


const prices = (item) => {
    return item.price //returns only the prices of all items 
}

const priceArr = coffeeMenu.map(prices) // creates an array that only stores the prices of each item

console.log(priceArr) // logs the array of prices

const addEmUp = (accumulator, currentValue) => {
    return accumulator + currentValue // adds all prices together
}

const totalPrice = priceArr.reduce(addEmUp) // stores final price of all array index values

console.log(`The total price of all items is $${totalPrice}`) // Prints total price

function seasonalDrinks(arr) {
    const seasonalProducts = []; // create new array to store names only
    for (let i = 0; i < arr.length; i++) { // filter through original array, coffeeMenu
      if (arr[i].seasonal === true) { // Check if an objects seasonal property is true indicating the drink is seasonal
        seasonalProducts.push(arr[i].name); // Stores drink names that are seasonal to the seasonalProducts array
      }
    }
    return seasonalProducts; // returns the updated seasonalProducts array 
}

const allSeasonals = seasonalDrinks(coffeeMenu) // Stores value of getSeasonalProducts function when coffeeMenu array is used as the argument

console.log(allSeasonals) // Logs array stored in allSeasonals 

// Checks allSeasonals array indexes for strings and prints the string value at each index and concattenated with phrase
allSeasonals.forEach(str => console.log(str + ' with imported beans')) 