/* Question 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to each 
person, inviting them to dinner.

Geest List */

let guestList = ["Sana", "Maryam", "Azeem"];
let message1 = (" You are inviting for dinner");
console.log(guestList);
for(let i = 0; i < guestList.length; i++){
    console.log(guestList[i] + message1);
}