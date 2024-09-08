// // ch:Alerts

// alert("Peter");
// alert("Parker");
// alert("habece4142@obisims.com");
// alert("+1 (804) 401-0635");
// alert("YoLKuNw7ojyfkIv");

// alert("you're learning JavaScript!");

// alert("Login or Signup for better results!");

// // ch:Variables for string

// var anyNum=17;
// console.log(anyNum); 

// var age;
// age="29-June-2007";
// console.log(age);

// var teamName="Screen Warriors";
// alert(teamName);

// var bestMan="Charlie";
// bestMan="Peter Parker";
// console.log(bestMan);

// // ch:Variable for Numbers

// var  caseQty=0;

// caseQty=144;
// console.log(caseQty);

// var  num=9;

// var a=20;
// a=20-3;
// console.log(a)

// var merchTotal=100;
// var shippingCharge=10;
// console.log(merchTotal + shippingCharge);

// var num=50;
// num=50+5;
// console.log(num)

// ch:Math expressions

document.write("Sum of 3 and 5 is 8 "+"<br>"); 

document.write("The difference between in 3 and 5 is 2 "+"<br>" + "Product of 3 and 5 is 15 " +"<br>"+ "Quotient of 3 and 5 is 0.6 "+"<br>");

var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

var ticketPrise=600 , numberOfTickets=5;
var totalCost= 3000;
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR<br>");

var num=5;
var table="Table of 5";
document.write(table,"<br>");
document.write(num,"x1=5 <br>"+num,"x2=10 <br>"+num,"x3=15 <br>"+num,"x4=20 <br>"+num,"x5=25 <br>"+num,"x6=30 <br>"+num,"x7=35 <br>"+num,"x8=40 <br>"+num,"x9=45 <br>"+num,"x10=50 <br>");

var celsius = 25;
var fahrenheitAns = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheitAns + "°F<br>");
var fahrenheit = 77;
var celsiusAns = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsiusAns + "°C<br>");

var eCommerce="Shopping Cart";
document.write("<h1>",eCommerce,"</h1> <br>");
var Price=650;
document.write("Price of item 1 is"," ",Price,"<br>");
var Quantity=3;
document.write("Quantity of item 1 is"," ",Quantity,"<br>");
price=100;
document.write("Price of item 2 is"," ",Price,"<br>");
Quantity=7;
document.write("Quantity of item 2 is"," ",Quantity,"<br>");
var Charges=100
document.write("Shipping Charges"," ",Charges,"<br><br>");
var Total=2750;
document.write("Total cost of your order is"," ",Total,"<br>");

var maSh="Marks Sheet";
document.write("<h1>",maSh,"</h1>");
var Total=980,Obtained=804;
document.write("Total marks:"," ",Total,"<br>","Marks Obtained:"," ",Obtained,"<br>");
var Percentage=(Total/Obtained)*100;
document.write("Percentage:",Percentage,"<br>");

var IN="Currency in PKR";
document.write("<h1>",IN,"</h1>");
var usDollars = 10;
var saudiRiyals = 25;
var usdToPkr = 104.80;
var srdToPkr = 28;
var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * srdToPkr);
document.write("Total Currency in PKR: " + totalPkr + "<br><br><br><br><br>");

let initialNumber = 7;
let result = ((initialNumber + 5) * 10) / 2;
document.write("The result of the arithmetic operations is: " + result + "<br>");

var Calculator="Age Calculator";
document.write("<h1>",Calculator,"</h1>","<br>"); 
var current=2016,birth=1990;
var ageThisYear=current - birth;
var ageLastYear= --ageThisYear;
document.write("Your are either ",ageLastYear," or ",ageThisYear," years old<br>");

var lifeTime="The Lifetime Supply Calculator";
document.write("<h1>",lifeTime,"</h1><br>");
var favSnack="Chocolate Chip Cookies";
document.write("Favourite Snack:",favSnack,"<br>");
var age=17;
document.write("Current age:",age,"<br>");
var emxAge=70;
document.write("Estimated Maximum Age:",emxAge,"<br>");
var day=4;
document.write("Amount of snacks per day:",day,"<br>");
var total=(emxAge - age) * 365 * day;
document.write("You will nedd",total," ",favSnack," to last you until the ripe old age",emxAge);
