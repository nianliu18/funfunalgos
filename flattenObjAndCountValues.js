//flatten this object and count the amount of times a string appears in this object.
//i.e countFlatObj(obj, 'foo') //3

let obj = {
  a: 'foo',
  b: {
    c: {
      d: 'bar',
      e: 'hello',
      f: {
        g: {
          h: 'world',
          i: 'hi',
          j: 'hi',
          k: 'foo',
          l: {
            m: 'foo'
          }
        }
      }
    }
  }
}

function flattenObjCount(obj, str, returnedObj={}, count=0) {
    for(let key in obj) {
        if((typeof obj[key] === 'object' && obj[key] !== null)) {
          return flattenObjCount(obj[key], str, returnedObj, count);
        } else {
          returnedObj[key] = obj[key];
          console.log(returnedObj, 'returned obj')
        }
    }
    for(let i in returnedObj) {
      if(returnedObj[i] === str) {
        count++
      }
    }
    return count;
}
flattenObjCount(obj, 'foo');

/*
Previously I had my function written like this

function flattenObj(obj) {
  let returnedObj = {};
  for(let k in obj) {
    //a constructor is a special method in creating and initializing an object created within a class.
    // console.log(obj[k].constructor === Object)
    console.log(typeof obj[k] === 'object');
    //if value is an object we'll run flatten again and store in variable flatObj
    if(typeof obj[k] === 'object') {
      return flattenObj(obj[k]);
    } else {
      console.log(returnedObj, 'do you see?')
      returnObj[key] = obj[key];
    }
  }
}

function keywordCount(obj, keyword) {
    let returnedObj;
    let count = 0;
    returnedObj = flattenObj(obj);
    console.log(returnedObj, 'flatted obj')
    for(let k in returnedObj) {
      let objValue = returnedObj[k];
      console.log(objValue);
      if(returnedObj[k] === keyword) {
        count++
      }
    }
    return count;
  }

Problem with above solution:
- I started getting problems where my recursive algoritm wasn't remembering the previous returnedObj and their keys + values. I noticed it was because I had my returnedObj within my flattenedObjCount function, so everytime i recursively ran the flattenObj function i wasn't bringing back the original object data that I had previously saved with returnObj[key] = obj[key];
- Secondly it was just hidious having two functions to solve something that could've been done in just one. So experimenting with recursion I figured out a way to put everything together and it worked for me.
- There is a better way to do this with reduce but ill save that for another time.

*/





