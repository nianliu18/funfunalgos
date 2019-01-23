/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
**/

/*
Before we begin some pseudo code:
- given an array we want to find out with any two numbers in the array may sum up to the target that we are given, if so provide us their two indexes in a form of an array.
- okay so we need to know 1) the current element and its index as we iterate through our array using a forLoop.
- 2) we need to also know the difference from our target number subtracted from our current number.
- 3) if the value of that difference results in any number from within our array, we can easily conclude the two indices and provide an answer if there exists two numbers that add up to our target.
- 4) To do this, we need a cache object or something to map all of our numbers and their indices as we iterate, so we would need an object to store information as we go. i.e numMap[nums[i]] = i;
- 5) then we will reference back to our object to see if after subtracting target - currentNum and if that value exists in our map object we return the value (aka index) of the key value pair in num map and the current index we are on.
• In conclusion, whichever index we are on, after subtracting from target, we compare with our map object to see if the value of our difference exists in our obj, if it does we will return both indices right away, if not we will keep going until we either traverse through the entire array or we find what we want.
*/


let nums = [3, 8, 11, 2, 15, 4, 7];
let target = 9;

const twoSums = (nums, target) => {
  let numMap = {};
  for(let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    numMap[nums[i]] = i;
    console.log(numMap, 'number map')
    if(numMap[val] > -1) {
      return [numMap[val], i];
    }
  }
}

twoSums(nums, target);

//time complexity O(n)
//space complexity O(n)

























