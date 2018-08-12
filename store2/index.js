 var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  let saleDatesBB = store2['sale dates']['Banana Bunches']
  return saleDatesBB
  }


// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  let totalSaleDatesBB = store2['sale dates']['Banana Bunches'].length
  return totalSaleDatesBB
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let priceMW = store2['inventory prices']['Mint Wafers']
  priceMW = 2.99
  return false
  }

// the price in store2 data does NOT change. The variable points to the original object

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let saleDatesCT = store2['sale dates']['Caramel Twists']
  saleDatesCT.pop()
  return true
}

// the NEW sale dates Carmel Twists array was modified when pop was applied. The last item was removed.


/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  let newobj = {}
  let amtSold = 1
  let saleDatesCT = store2['sale dates']['Caramel Twists']

  for (var i = 0; i < saleDatesCT.length; i++) {
      if (saleDatesCT[i] === saleDatesCT[i+1]) {
          amtSold ++
      } else {
          newobj[saleDatesCT[i]] = amtSold
          amtSold = 1
      }
  }
  return newobj
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
 let highSaleCount = 0
 let candySaleDates = store2['sale dates']

 for (var key in candySaleDates) {
   candySaleDates
 }


 return dateMostSales
}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
