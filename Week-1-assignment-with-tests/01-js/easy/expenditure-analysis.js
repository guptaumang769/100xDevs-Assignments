/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    let categoryMap = new Map();
  
    // Iterate over each transaction
    for (let transaction of transactions) {
      let { category, price } = transaction;
  
      // Check if the category already exists in the map
      if (categoryMap.has(category)) {
        // If it exists, update the total price spent
        let totalSpent = categoryMap.get(category);
        totalSpent += price;
        categoryMap.set(category, totalSpent);
      } else {
        // If it doesn't exist, add a new category with the price spent
        categoryMap.set(category, price);
      }
    }
  
    // Convert the map to an array of objects
    let result = [];
    for (let [category, totalSpent] of categoryMap) {
      result.push({ category, totalSpent });
    }
  
    return result;

}

module.exports = calculateTotalSpentByCategory;
