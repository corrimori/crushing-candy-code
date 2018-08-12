var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  return store3[1]['inventory sold']['Berry Bites']
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  return store3[3]['inventory sold']['Mint Wafers']['quantity']
}

// Return total number of dates included in the dataset.
function accessesingData3() {
  let numberOfDates = store3.length
  return numberOfDates
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  let newArrDates = []
  for (var i = 0; i < store3.length; i++) {
    newArrDates.push(store3[i]['date'])
  }
  return newArrDates
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {

  let inventory = store3[4]['inventory sold']
  let candyNames = Object.keys(inventory)
  let costArr = []
  let candyList = {}

  for (let key in inventory) {
      costArr.push(inventory[key]['cost'])
  }

  for (let i = 0; i< candyNames.length; i++) {
      // go through each item in array
      // assign candy name array : cost array
      candyList[candyNames[i]] = costArr[i]
  }

  return candyList
}

// console.log(store3[4]['inventory sold']['Mint Wafers']['cost'])
console.log(store3[0]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'])


// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  let totalPeanutButterSold = 0
  for (var i = 0; i < store3.length; i++) {
    totalPeanutButterSold += store3[i]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity']
  }
  return totalPeanutButterSold
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
