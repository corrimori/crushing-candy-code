var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4['Dark Chocolate Crunchies']['cost']
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  let totalBerryBites = (store4['Berry Bites']['sold on']).length
  return totalBerryBites
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  candyNamesOver2 = []
  // iterate over candy cost
  // if candy cost > 2, push to new array
  for (let key in store4) {
    let candyCost = store4[key]['cost']
    if ( candyCost > 2.00) {candyNamesOver2.push(key)}
  }
  return candyNamesOver2
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  let candyList = {}
  // candy is [key]
  for (let candy in store4) {
    candyCost = store4[candy]['cost']
    candyList[candy] = candyCost
  }
  return candyList
}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`

function challenge1() {
  totalRevenue = []
  numCandySold = 0

  let cost = store4['Peppermint Poppers']['cost']
  numCandySold = store4['Peppermint Poppers']['sold on'].length
  let totalperCandy = (numCandySold * cost).toFixed(2)
  totalRevenue.push(totalperCandy)

  cost = store4['Caramel Twists']['cost']
  numCandySold = store4['Caramel Twists']['sold on'].length
  totalperCandy = (numCandySold * cost).toFixed(2)
  totalRevenue.push(totalperCandy)

  return totalRevenue
}

//********* function calculates total Revenue for ALL candies
// function challenge1() {
//   totalRevenue = []
//   numCandySold = 0
//   for (let candy in store4) {
//     let cost = store4[candy]['cost']
//     numCandySold += store4[candy]['sold on'].length
//     let totalperCandy = (numCandySold * cost).toFixed(2)
//     totalRevenue.push(totalperCandy)
//   }
//   return totalRevenue
// }


// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {

}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {
    let totalRevenueDCC = 0

    numSoldDCC = store4['Dark Chocolate Crunchies']['sold on'].length
    let costDCC = store4['Dark Chocolate Crunchies']['cost']
    totalRevenueDCC = (numSoldDCC * costDCC).toFixed(2)

    return totalRevenueDCC
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
