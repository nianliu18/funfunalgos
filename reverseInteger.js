//Given a 32-bit signed integer, reverse digits of an integer.
//example: input: 123 output:321 || input: -123 output: -321 || input: 120 output: 21




/* 
Before we begin, lets do some pseudo code: 
- what is a 32-bit signed integer? what does unsigned mean? 
    - a signed integer means it can have a negative or positive to the left of their integers while unsigned represents only positive integers. 
    - a 32-bit signed integer just means 32 separate ones and zeros and landing on integers anywhere within 2^32 or 4,294,967,296
    - since signed integers have positives and negatives it halves the positive numbers to 2,147,483,647 because its lowest integer is -2,147,483,647 thus totally to max 4,294,967,296 integers
    - unsigned has a total of 4,294,967,296 postive integers. represents from 0-4,294,967,296


    - okay with that said (i didnt know what they were until now a little research clears a lot of things up) we now know that when we read "signed integer" it just simply means we're dealing with negatives and positives. 
    - another thing to look out for is 0's and flipping for example 100 would leave us with 1 i.e 100 = 001. 
    -with the edge cases and understanding set, lets begin 
*/
let num = -123;

function reverseInteger(x) {
    //to see if the first is negative or positive
    console.log(x.toString()[0])
    let newNum = '';
    let newx = x.toString(); 
    for(let i = newx.length-1 ; i >= 0; i--) {
        console.log(newx[i], 'newx')
        // console.log(newx[i])
        newNum += newx[i];
        console.log(newNum, 'this is new num');
    }
    return newNum;
}
reverseInteger(num);