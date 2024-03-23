/* Question 17

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
a name from your list, print a message to that person letting them know you’re sorry you can’t invite them 
to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.
Shrinking Guest List */

let message2 = ["For the lack of space we can invite only two peson"];
let message3 = ("sorry, you can't make dinner with us due to lack of space")

console.log(message2);
console.log(guestList);
let removed = guestList.pop();
console.log(removed, message3);
let removed2 = guestList.shift();
console.log(removed2, message3);
let removed3 = guestList.pop();
console.log(removed3, message3);
let removed4 = guestList.pop();
console.log(removed4, message3);

console.log(guestList);

let removedAll = guestList.splice(0,2);
console.log(guestList);

