/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */

  let myFavoriteSong = "Stranger by Blanks";
  console.log(`My favorite song is ${myFavoriteSong}`);

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */

  // So before I started this code. I was confused on what the difference between them
  // const and let. I knew const is basically in another word of a waterfall.
    // waterfall = endless without changing (in my own words)
  // For let I wasn't sure so I did a google search 
    // By google: In programming, let and const are both used to declare variables.
    // The main difference between them is that let allows the variable to be reassigned multiple times, 
    // while const creates a variable that cannot be reassigned after it has been assigned a value.
  
  // Honestly, I'm still confused on how to go by doing a const and let together.
  // I decided to search up some examples on google.
  // The video that explain both to me a little more for me
    // link: https://youtu.be/pobWEaHNChY?si=3WhIllgmbg3gTStj&t=281
  
      // const italianSandwhichRecipe = ["Baguette",
      //                           "Black Forest Ham",
      //                           "Salami",
      //                           "Provolone",
      //                          "House-roasted multicolored peppers",
      //                           "spring mix",
      //                           "Tomato",
      //                           "Red Onion",
      //                           "Black Olives",
      //                           "Olive Oil",
      //                           "Balsamic Vinaigrette",
      //                           "Spicy Brown Mustard"];

  // stil confused just put it off for now...
    // Over thinked. Just had to declare let and const variables
  
  const waterFall = "Water is endless, just like the function const.";
  let rainFall = "Rain fall can always change. By the way of the wind or just anything that can effect the rain drops itself. Exactly like how the function let can be changed.";
  let weatherCast = "Today's weather cast will be sunny!"

  console.log(waterFall);
  console.log(rainFall);
  console.log(weatherCast);
  /*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

  // let accBal = 40750;
  // console.log(`Your current balance is $${accBal}!`);

  // let newComputer = 7649;

    // Unsure how to have the values that are changed to hold it.

  // let updatedAccBal = accBal - newComputer;
  // console.log(`Your new balance is now $${updatedAccBal}!`);
  
    // The way I figured this out was actually using the same method on prompt four.
    // Not sure if that's the correct way but it worked!
  
  // let payDay = updatedAccBal * 3;
  // console.log(`You've recieved a deposit. Your total balance is now $${payDay}!`);
   
  // let taxes = payDay / 7;
  // console.log(`You've just paid you're taxes! This is your balance now $${taxes}!`)

  // let afterOneMonth = accBal % taxes * 2;
  // console.log(`This is the account transcript of today's month ${afterOneMonth}.`);

    // So holding values is not declaring over and over again.
    // Instead you would use (mathematical symbol) + (equals sign)
    // Example for adding: +=
    // The equals is basically recalling the variable and to change it to the sum of the equation.

  let accBal = 450;
  let borrrowLoan = 550;
  let transaction = 750;
  let payDay = 3;
  let loanPayment = 7;

  accBal += borrrowLoan;
  console.log(`Account Balance: $${accBal}.`);

  accBal -= transaction;
  console.log(`Account Balance: $${accBal}.`);

  accBal *= payDay;
  console.log(`Account Balance: $${accBal}.`);

  accBal /= loanPayment;
  console.log(`Account Balance: $${accBal}.`);

  console.log(`Account Balance: $${accBal % 2}.`);

  // This here is so much cleaner to what I did up above. 100% using this as notes for the future. :D

  /*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */
  
  let firstName = "Pedro";
  let lastName = " Cruz";
  let fullName = firstName + lastName;
  console.log(`Hello my name is ${fullName}!`);
  

/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array

  const favoriteMovies = [" Pacific Rim ", " Dawn of the Planet of the Apes", " Hacksaw Ridge", " Monkey King 2", " Brightburn"]

  console.log(favoriteMovies[1]);
  favoriteMovies.unshift(' Super Size Me');
  // console.log(favoriteMovies.toString());
  favoriteMovies.push(' Afraid');
  // console.log(favoriteMovies);
  favoriteMovies.splice(1, 0, ' Sonice The Hedgehog');
  console.log(favoriteMovies);
/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
console.log(array1[2]);

let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
console.log(array2[1] [1]);

let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
console.log(array3[1] [1] [1]);

  // I'm not sure if [ 'Marty Mcfly' ] is the correct answer.
/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4.length);
/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".
console.log(thom.shift());
console.log(thom.unshift('Tom'));
console.log(thom);
  // In terminal for some reason a '3' is showing up. Unsure what that is about...

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
console.log(karolin.splice(1, 0, 17));
console.log(karolin.pop());
console.log(karolin.pop());
console.log(karolin.push(`New York`));
console.log(karolin);

// Change Cathleen's hometown from New York to "Gotham City".
console.log(cathleen.pop());
console.log(cathleen.push('Gotham City'));
console.log(cathleen);

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
console.log(kristyn.pop());
console.log(kristyn.push('Oakland'));
console.log(kristyn);