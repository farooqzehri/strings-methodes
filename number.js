// 1. Round a Number 
// Round the number 4.7 using Math.round(). 

console.log(Math.round(4.7));


// 2. Ceil a Decimal 
// Use Math.ceil() to round 5.3 up to the next whole number.
console.log(Math.ceil(5.3));


// 3. Floor a Decimal 
// Use Math.floor() to round 8.9 down to the previous whole number.

console.log(Math.floor(8.9));


// 4. Generate a Random Number (0–1) 
// Create a function that returns a random number between 0 and 1 using 
// Math.random(). 
function randomnum(num){
    return Math.random()*1
}
console.log(randomnum());


// 5. Random Integer (0–9) 
// Generate a random whole number between 0 and 9.
function randominteger(){
    return Math.floor(Math.random()*9 )
}
console.log(randominteger());

// 6. Random Integer (1–100) 
// Generate a random integer between 1 and 100. 

console.log(Math.floor(Math.random()*100));

// 7. Convert String to Integer 
// Use parseInt() to convert the string "42" into a number.

let num2 = "42"
console.log(parseInt(num2));


// 8. Convert String to Float 
// Use parseFloat() to convert "3.14159" into a floating point number.
function stringfloat(){
    let num = "3.1324123"
    return parseFloat(num)
}
console.log(stringfloat());


// 9. Round User Input 
// Take a number from a form input, round it, and display the result on the page.
const input = document.querySelector("#input")
const output = document.querySelector("#output")
function roundinput(){
    input.innerHTML = ""
   Math.random(input.value)
    console.log(input.value);
    output.innerHTML +=input.value
    
}
console.log(roundinput());
