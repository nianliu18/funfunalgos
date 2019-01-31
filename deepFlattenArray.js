/*
Given an array [1,2,3, [4,5, [6,7,[9,8]]]], flatten the nested arrays into one single array.

Then given an array of var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
Remove all duplicates:
*/

/*
Before we start lets pseudo code:
- we know in reduce native array method executes a reducer function on each element in a given array resulting in a single input.
- [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
- will result in first call accumulater will start at 0 since no intial value was set. then we add acc to currentValue and stop when we've finished iteration.
- in our situation we want our accumulator to start as an empty array, and concat each element into our array if they are not an Array.
- so we set a reduce for each array inside our nested array, and we'll keep using reduce unless the element we iterate upon is not an array. if not then we simply concat that single element into our accumulator array.
*/


function flatten(arr) {
  arr.reduce((acc, e) => {
    //if element is an array, initiate/invoke flatten on it again and take the returned value and concat it.
    if(Array.isArray(e)) {
      return acc.concat(flatten(e));
    } else {
      //if element not array else concat value to acc.
      return acc.concat(e)
    }
  }, []) //initial value to accumulator is []
}

flatten([1,2,3, [4,5, [6,7,[9,8]]]]);



var orderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator
}, [])

// console.log(orderedArray);

orderedArray(['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']);





