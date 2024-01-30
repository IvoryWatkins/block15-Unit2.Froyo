/* Description: Creates the prompt for the users to enter froyo flavors. 
The comma after example: and new "" put the example text in the input bar. */

const userInput = prompt(
  "Enter your froyo flavors as a list! Separate your items with a comma & no spaces. Example: ",
  "vanilla,strawberry,coffee"
);

/* Takes user's input from the promt and splits into an array of strings. 
    Each represents a flavor*/
let flavors = userInput.split(",");

// Start of counting the flavors
let flavorsCount = {};

// Logic for counting flavors
function getCount(flavors) {
  // Loop to count flavors
  for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i];
    if (flavorsCount[flavor] === undefined) {
      flavorsCount[flavor] = 1;
    } else {
      flavorsCount[flavor]++;
    }
  }
  console.table(flavorsCount);
}
// runs count logic for flavors entered
getCount(flavors);
