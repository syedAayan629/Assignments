// STRING METHODS

// var firstName = prompt("Please enter your first name");
// var lastName = prompt("Please enter your last name");
// var fullName =  `${firstName} ${lastName}`;
// console.log(fullName);



// const favoritePhone = prompt("Please enter your favorite mobile phone model: ");
// const inputLength = favoritePhone.length;
// console.log(`My favorite Phone is:${favoritePhone}. Lenght of string:${inputLength}`) 



// const word = "Pakistani";
// const index = word.indexOf("n");
// console.log("string:",word,"index:",index);



// const word = "Hello World";
// const lastIndex = word.lastIndexOf("l");
// console.log(`The last index of the letter "l" is: ${lastIndex}`);



// const word = "Pakistani";
// const charAt3rdIndex = word.charAt(2);
// console.log(`The character at the 3rd index is: ${charAt3rdIndex}`);



// const firstName = prompt("Please enter your first name: ");
// const lastName = prompt("Please enter your last name: ");
// const fullName = firstName.concat(" ", lastName);
// console.log(`Hello, ${fullName}!`);



// const originalWord = "Hyderabad";
// const newWord = originalWord.replace("Hyder", "Islam");
// console.log(`The new word is: ${newWord}`);



// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// console.log(`The new message is: ${newMessage}`);



// const userInput = prompt("Please enter a string: ");
// const capitalInput = userInput.toUpperCase();
// alert(`Original Input: ${userInput} (Type: ${typeof userInput})`);
// alert(`Capital Input: ${capitalInput} (Type: ${typeof capitalInput})`);



// const userInput = prompt("Please enter a string: ");
// const titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// console.log(`Original Input: ${userInput} (Type: ${typeof userInput})`);
// console.log(`Title Case Input: ${titleCaseInput} (Type: ${typeof titleCaseInput})`);



// var num = 35.36;
// var numStr = num.toString();
// var numStrWithoutDot = numStr.replace('.', '');
// console.log(`Original Number: ${num} (Type: ${typeof num})`);
// console.log(`String without Dot: ${numStrWithoutDot} (Type: ${typeof numStrWithoutDot})`);



// let username = prompt("Enter your username:");
// if (/[.@,!]/.test(username)) {
//     alert("Invalid username. Please enter a valid username without special symbols.");
//   } else {
//     console.log(`Username stored: ${username}`);
//     let storedUsername = username;
//   console.log(`Stored username: ${storedUsername}`);
// }



// let password = prompt("Enter your password:");
// if (!/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(password)) 
//     {
//         alert("Invalid password. Please enter a valid password that meets the requirements.");
//     }
//      else {
//         console.log(`Password stored: ${password}`);
//         let storedPassword = password;
//         console.log(`Stored password: ${storedPassword}`);
//       }



// let userInput = prompt("Enter a string:");
// let lastChar = userInput[userInput.length - 1];
// document.write(`The last character of the input string is: ${lastChar}`);



// // MATH METHODS

// let num = parseInt(prompt("Enter a positive integer:"));
// if (isNaN(num) || num <= 0) {
//   alert("Invalid input. Please enter a positive integer.");
// } else {
//   document.write(`a. Number: ${num}<br>`);
//   document.write(`b. Round off value: ${Math.round(num)}<br>`);
//   document.write(`c. Floor value: ${Math.floor(num)}<br>`);
//   document.write(`d. Ceil value: ${Math.ceil(num)}<br>`);
// }



// let num = parseFloat(prompt("Enter a negative floating point number:"));
// if (isNaN(num) || num >= 0) {
//   alert("Invalid input. Please enter a negative floating point number.");
// } else {
//   document.write(`a. Number: ${num}<br>`);
//   document.write(`b. Round off value: ${Math.round(num)}<br>`);
// } 



// let num = parseFloat(prompt("Enter a number:"));
// let absValue = Math.abs(num);
// document.write(`The absolute value of ${num} is ${absValue}`);



// let diceValue = Math.floor(Math.random() * 6) + 1;
// console.log(`You rolled a ${diceValue}!`);



// let coinValue = Math.random();
// if (coinValue < 0.5) {
//   coinValue = "Heads";
// } else {
//   coinValue = "Tails";
// }
// console.log(`You flipped a ${coinValue}!`);



// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(`Random number between 1 and 100: ${randomNumber}`);



// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userInput = parseInt(prompt("Enter a number between 1 and 10:"));
// if (userInput === secretNumber) 
//     {
//   alert("Congratulations! You guessed the secret number!");
// }
//  else 
// {
//   alert(`Sorry, the secret number was ${secretNumber}. Try again!`);
// }
