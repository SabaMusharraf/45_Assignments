"use strict";
/* Question 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
MoreGuests:*/
guestList.unshift("Hina");
guestList.splice(3, 0, "Bisma");
guestList.push("Afsheen");
console.log(guestList);
for (i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + message1);
}
