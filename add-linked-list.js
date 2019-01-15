/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

 /*
  Before we begin, a little bit of pseudo code.
  Facts:
  • we are given numbers represented by two linked lists, where each node has its own single digit stored in reverse order
  • we need to create a function that adds the two numbers in their respected indexes and return the sum in the same linked list structure.

  Steps:
  • we need to first set our current Node to null and set the head to current to keep track of the head to ultimately return its "next"

  • we declare sum variable and set to 0 where we will frequently be adding current values from both lists, also we will be checking the sum in case of carryovers from end of lists

  • we will be solving this problem with a while loop where if(list1, list2, or sum) is not null we plus equal sum with each list and their value, that way the first value in list1, "2" will add with first value in list2 "5" thus giving us the sum total of 7

  • we need to add the new Node to the returned list, so modulo 10 will give us either the number itself or the number minus 10 if greater than 9.

  • we then set current with current.next to move to the next digit in the list we're making.

  • if there ever is a carryover we start the next iteration with a sum of 1 if we need to carry a 1

  • lastly return head.next to get the end result

 */


function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(list1, list2) {
  let current = new Node(null);
  const head = current;
  let sum = 0;
  while(list1 || list2 || sum) {
    if(list1) {
      sum += list1.value;
    }
    if(list2) {
      sum += list2.value;
    }
    current.next = new Node(sum % 10);
    current = current.next;
    sum = sum > 9 ? 1 : 0;
  }
  return head.next;
}















