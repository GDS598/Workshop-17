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

const fiveOrBelow = coffeeMenu.filter(fiveOrLess) // <--- Filters coffeeMenu based on the function fiveOrLess and stores returned values to new variable

console.log(fiveOrBelow) // <--- Logs the new array of items whose prices are less than or equal to 5 from the coffeeMenu data


const evenPriced = (item) => {
    return item.price % 2 === 0 
}

const evenPrice = coffeeMenu.filter(evenPriced)

console.log(evenPrice)


const prices = (item) => {
    return item.price
}

const priceArr = coffeeMenu.map(prices)

console.log(priceArr)

const addEmUp = (accumulator, currentValue) => {
    return accumulator + currentValue
}

const totalPrice = priceArr.reduce(addEmUp)

console.log(totalPrice)

const seasonalDrinks = (item) => {
    if(item.seasonal === true) {
        return item.name
    }
}

const allSeasonals = coffeeMenu.(seasonalDrinks)

console.log(allSeasonals)