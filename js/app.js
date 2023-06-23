// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Five arrays (Subject, Verbs, Adjectives, Nouns, Nouns)
var first = ["The Turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"]
var second = ["sat on","ate","danced with","saw","doesn't like","kissed"]
var third = ["a funny","a scary","a goofy","a slimy","a braking","a fat"]
var four = ["goat","monkey","fish","cow","frog","bug","worm"]
var five = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"]


//Import all the important tags to access
let firstBtn = document.querySelector("#first")
let secondBtn = document.querySelector("#second")
let thirdBtn = document.querySelector("#third")
let fourthBtn = document.querySelector("#fourth")
let fifthBtn = document.querySelector("#fifth")
let createStory = document.querySelector("#create")
let resetStory = document.querySelector("#reset")
let para = document.querySelector("#para")
let reset = document.querySelector("#reset")


// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('button');
let textToSpeak = "";

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(textToSpeak);
	para.textContent = textToSpeak;
});

/*
I implemented eventlistners so whenever a use click on any button then corresponding random value of that array 
will generate and store in textToSpeack variable.

Everytime user click on any of the 5 button it concate that random text in textToSpeak variable




*/

//Listener for the first button
firstBtn.addEventListener('click',function(){
	textToSpeak += first[Math.floor(Math.random()*first.length)] + " ";
})

//Listener for the second button
secondBtn.addEventListener('click',function(){
	textToSpeak += second[Math.floor(Math.random()*second.length)] + " ";
})

//Listener for the third button
thirdBtn.addEventListener('click',function(){
	textToSpeak += third[Math.floor(Math.random()*third.length)] + " ";
})

//Listener for the forth button
fourthBtn.addEventListener('click',function(){
	textToSpeak += four[Math.floor(Math.random()*four.length)] + " ";
})

//Listener for the fifth button
fifthBtn.addEventListener('click',function(){
	textToSpeak += five[Math.floor(Math.random()*five	.length)] + " ";
})

/*

The below function generate the random story using the above five arrays values and return it.

Now, when user click on the Creare story button the createStory listener activate and use 
makeRandomStory function to generate a story and speak using speakNow function and write on 
the HTML page with using para tag element.

In the last, the rest listener assign empty string to para and textToSpeak variable.

*/
function makeRandomStory()
{
	let result = "";
	let totalArray = [first,second,third,four,five]
	for(let array = 0;array<totalArray.length;array++)
	{
		result+=totalArray[array][Math.floor(Math.random()*totalArray[array].length)]
		result+=" "
	}

	return result
}

//Create listener
createStory.addEventListener('click',function(){
	let story = makeRandomStory()
	speakNow(story)
	para.textContent = story
})

//Reset event listener
reset.addEventListener('click', function(){
	para.textContent = "";
	textToSpeak = "";
})