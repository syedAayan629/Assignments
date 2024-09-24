// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// function checkCharacter(char) {
//   // Check if the character is a number
//   if (!isNaN(char)) {
//     console.log( "The character is a number." );
//   }
  
//   // Check if the character is an uppercase letter
//   else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     console.log ("The character is an uppercase letter.");
//   }
  
//   // Check if the character is a lowercase letter
//   else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//     console.log ("The character is a lowercase letter.");
//   }
  
//   else {
//     console.log("The character is neither a number nor a letter.");
//   }
// }

// var char = prompt("Enter a character: ");
// console.log(checkCharacter(char));



// function findLarger(a, b) {
//   // Check if the two integers are equal
//   if (a === b) {
//     console.log ("The two integers are equal.");
//   }
  
//   // Check which integer is larger
//   else if (a > b) {
//     console.log ("The larger integer is " + a + "." );
//   }
  
//   else {
//     console.log("The larger integer is " + b + "." );
//   }
// }

// let num1 = parseInt(prompt("Enter the first integer: "));
// let num2 = parseInt(prompt("Enter the second integer: "));

// console.log(findLarger(num1, num2));



// function checkNumber(num) {
//   // Check if the number is positive
//   if (num > 0) {
//     console.log(  "The number is positive.");
//   }
  
//  // Check if the number is negative
//   else if (num < 0) {
//     console.log("The number is negative.");
//   }
  
//   // If the number is neither positive nor negative, it must be zero
//   else {
//     console.log ("The number is zero.");
//   }
// }

// var number = parseInt(prompt("Enter a number: "));

// console.log(checkNumber(number));




// function isVowel(char) {
//   // Convert the character to lowercase to make the check case-insensitive
//   char = char.toLowerCase();
  
//   // Check if the character is a vowel
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log(true);
//   }
  
//   // If the character is not a vowel, return false
//   else {
//     console.log(false);
//   }
// }

// var char = prompt("Enter a character: ");

// console.log(isVowel(char));



// // Store the correct password in a variable
// let correctPassword = "mySecretPassword";

// // Ask the user to enter their password
// let userInput = prompt("Enter your password: ");

// // Validate the two passwords
// if (userInput === "") {
//   console.log("Please enter your password");
// } else if (userInput === correctPassword) {
//   console.log("Correct! The password you entered matches the original password");
// } else {
//   console.log("Incorrect password");
// }



// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }



// let time = prompt("Enter time in 24-hour format (HHMM): ");
// let hour = parseInt(time.substring(0, 2));
// let minute = parseInt(time.substring (2, 4));

// if (hour < 12) {
//   alert(`The time is ${hour}:${minute} AM`);
// } else if (hour === 12) {
//   alert(`The time is ${hour}:${minute} PM`);
// } else {
//   let pmHour = hour - 12;
//   alert(`The time is ${pmHour}:${minute} PM`);
// }


// ARRAYS

// let studentNames = ["Rowan atkinson","Ron periman","Jhonny depp",""];
// studentNames.unshift("bruce wayne");
// studentNames.push("peter parker");
// console.log(studentNames)



// let studentNames = ["John Doe", "Jane Smith", "Alice Johnson"];
 
// let studentGrades = [90, 85, 95, 78, 92];

// let studentStatus = [true, false, true, false, true];

// let mixedArray = ["John Doe", 25, true, "New York", 3.5, false];



// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// for (let i = 0; i < educationQualifications.length; i++) {
//     console.log(`$educationQualifications[i]`);
//   }



// let studentNames = ["Ali", "Ahmed", "Hassan"];
// let studentScores = [420, 380, 450];

// for (let i = 0; i < studentNames.length; i++) {
//   let score = studentScores[i];
//   let percentage = (score / 500) * 100;
//   console.log(`Student Name: ${studentNames[i]}`);
//   console.log(`Score: ${score} / 500`);
//   console.log(`Percentage: ${percentage.toFixed(2)}%`);
//   console.log("------------------------");
// }



// let studentScores = [85, 92, 78, 95, 88, 76, 99];

// console.log("Original Array:");
// console.log(studentScores);

// studentScores.sort((a, b) => a - b);

// console.log("Sorted Array in Ascending Order:");
// console.log(studentScores);



// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

// console.log("Original Array:");
// console.log(cities);

// let selectedCities = cities.slice(2, 5);

// console.log("Selected Cities Array:");
// console.log(selectedCities);



// var arr = ["This ", " is ", " my ", " cat"];

// console.log("Original Array:");
// console.log(arr);

// var singleString = arr.join("");

// console.log("Single String:");
// console.log(singleString);



// let arr = [];

// // Store values one by one
// arr.unshift("Elderberry");
// arr.unshift("Date");
// arr.unshift("Cherry");
// arr.unshift("Banana");
// arr.unshift("Apple");

// console.log("Original Array:");
// console.log(arr);

// // Access values in reverse order
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Element at index ${i}: ${arr[i]}`);
// }



// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>Select a manufacturer</option>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write(`<option>${phoneManufacturers[i]}</option>`);
// }
// document.write("</select>");