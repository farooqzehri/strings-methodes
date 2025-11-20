// 1. Lowercase Name 
// Write a function that takes a name as input and returns it all in lowercase.

function UpperCaseName(name){
    return name.toLowerCase();
}
console.log(UpperCaseName("FAROOQ ZEHRI"));     // task 1


// 2. Uppercase Shouting 
// Convert a given string into uppercase to simulate shouting. Example: "hello" → 
// "HELLO".

function shout(text){
    return text.toUpperCase();
}
console.log(shout("hello"));   // task 2 

//3. Count Characters 
// Given a string, return the number of characters in it.
//

let str = "Hello-world";
console.log(str.length);   // task 3

//4. First Character 
//Write a function that returns the first character of a string using charAt().


function firstcharacter(word){
    return word.charAt(1);
}
console.log(firstcharacter("Hello dunya"));  // taskk 4 

// 5. Last Character 
// Return the last character of any string using .charAt() and .length. 

function lastcharacter(text){
    return text.charAt(text.length - 1);
}
console.log(lastcharacter("hello dunya")); // task 5 finished



// 6. Find Position of Word 
// Given a sentence, find the position (index) of the word "apple" using indexOf.

let sentence = "the tast of apple is very good."
console.log(sentence.indexOf("apple"));  // task 6 

// 7. Extract First Word 
// Use slice() and indexOf() to extract the first word from a sentence.
let firstword = " i live in quetta balochistan"
console.log(firstword.indexOf("quetta"));
console.log(firstword.slice(11));  //  task  7 complete


// 8. Replace a Word 
// Replace the word "bad" with "good" in a given sentence using replace().

let replace = "bad";
console.log(replace.replace("bad", "good")); // task 8 complete


// 9. Replace All Vowels 
// Replace all occurrences of vowels in a string with "*" using replaceAll(). 
function replacevowels(text){
    return text.replaceAll(/[aeiouAEIOU]/g , "*")
}
console.log(replacevowels("Balochistan is such a beatifull "));

let words = "i love  balochistan "
console.log(words.replaceAll(/[aeiouAEIOU]/g , "*"));  // task 9 complete 

// 10. Split Sentence into Words 
// Convert a sentence into an array of words using split(" ").

function spliteword(text){
    return text.split(" ");
}
console.log(spliteword("my name is farooq."));    // task 10 complete

// 11. Capitalize First Letter 
// Capitalize only the first letter of a given word. 
let letter = "apple";
console.log(letter.charAt(0).toUpperCase() + letter.slice(1)); // task 11 complete


// 12. Find Second Word 
// Write a function that returns the second word of a sentence using split(). 
 function findword(text){
    let words = text.split(" ")
    return words[2]
 }
 console.log(findword("i love javascsript.")); // task 12 complete

 //13. Censor a Word 
// Replace all instances of a bad word like "dumb" in a string with "****".

function replaceword(sentence){
   return sentence.replaceAll("dumb", "****")
}
console.log(replaceword("he is a dumb and dumbs are crazy ")); // task 13 complete 



 