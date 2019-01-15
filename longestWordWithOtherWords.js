/*
Given a list of words, write a program to find the longest word made of other words in the list.
Example: ['dog', 'cat', 'walker', 'dogwalker', 'night', 'nightwalker'] -> 'nightwalker'
*/


/*
Before we begin, some pseudo code:

• we declare an output variable which is going to be the longest word

• we declare a variable named longest and set to zero

• we know that we will be needed a "for loop" to iterate through the list array, as well as inner nested "for loop" because we will be most likley comparing the array[i] (outside loop) with array[j] (inner loop) to see if a specific array[j] element exists inside a specific array[i] element

• if so we want to remove that array[j] word from the given array[i] word. example: if ('dogwalker'.includes('dog')) {'dogwalker' = 'dogwalker'.replace('dog', '')} // we will replace dog in dogwalker with and empty string, leaving our word with 'walker'

• lastly when the given array[i]'s length has been diminished to the length of zero, we know we have a full word within the array, and we will set longest to the array[i]'s length and set output to our array[i] element

*/


const list = ['dog', 'cat', 'walker', 'dogwalker', 'night', 'nightwalker'];

function longestWord(array) {
  let output;
  let longest = 0;
  for(let i = 0; i < array.length; i++) {
    let current;
    for(let j = 0; j < array.length; j++) {
      if(array[i].includes(array[j])) {
        current = array[i];
        current = current.replace(array[j], '')
      }
    }
    if(array[i].length > longest) {
      longest = array[i].length;
      output = array[i];
    }
  }
  console.log(output)
  return output;
}

longestWord(list);

/*
Time complexity for this algorithm is O(n^2) exponential because for element in i we are looping through entirety of j. Thus producing a speed of O of exponention time.
*/


