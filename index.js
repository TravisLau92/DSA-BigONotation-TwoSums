// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findTwoSums(nums, target) {
  let operationCount = 0; // Initialize a counter for the operations

  // Loop through each element in the array

  for (let i = 0; i < nums.length; i++) {
    // Check each other element in the array
    for (let j = i + 1; j < nums.length; j++) {
      operationCount++; // Increment the operation counter
      console.log('Operation executed', operationCount);
      // Determine if these two elements sum to the target
      if (nums[i] + nums[j] === target) {
        console.log(`Operations required: ${operationCount}`);
        // If they do, return their indices
        return [i, j];
      }
    }
  }
  console.log(`Opetations required to find the target: ${operationCount}`);
  // If no pair sums to the target, return an empty array
  return [];
}

const numbers = [1, 2, 3, 4];
const target = 7;
const result = findTwoSums(numbers, target);
console.log(`Two-sum result for target ${target}:`, result);
