Title: Two-Sum Problem
Objective:
In this challenge, your task is to create a function `findTwoSum` that takes an array of numbers and a target sum. Your function should find two different numbers in the array that, when added together, give the target sum. You are encouraged to solve this problem using a brute-force approach.

Here's an example of how you might call your function and what the output should look like:
```js
const numbers = [2, 7, 11, 15];
const target = 9;
const result = findTwoSum(numbers, target);
console.log(`Two-sum result for target ${target}:`, result);
```

After implementing your `findTwoSum` function, you should get output similar to the following:
```js
Two-sum result for target 9: [0, 1]
```

Helpful resources:
- The concept of time complexity in algorithms: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- A guide to JavaScript arrays and their methods: https://www.w3schools.com/js/js_array_methods.asp

<details>
<summary>Hints</summary>

1. Write a function `findTwoSum(nums, target)` where `nums` is an array of integers, and `target` is the sum you're checking for.
2. Loop through each element `x` in `nums` using a `for` loop.
3. Inside this loop, start another loop to go through each of the remaining elements `y` in `nums`.
4. Check if `x + y` equals the `target`. If it does, return their indices in an array.
5. If no pairs add up to the target, return an empty array.
6. Test your function with different arrays and target sums to ensure it works correctly.
7. Avoid using the same element twice; ensure the inner loop starts from the current index of the outer loop plus one.
</details>