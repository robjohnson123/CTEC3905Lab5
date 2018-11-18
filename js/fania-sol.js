"use-strict";

// DATE
const theDate = document.getElementById("datePicker");
const theDateHeader = document.getElementById("date");

theDate.addEventListener("change", showDate);

function showDate() {
    let d = new Date(theDate.value);
    theDateHeader.innerText = d.toDateString();
}


// COLOUR
const theColour = document.getElementById("colour");
const theColourBox = document.getElementById("the-value");

theColour.addEventListener("change", showColour);

function showColour() {
    let c = theColour.value;
    theColourBox.style.backgroundColor = c;
}
showColour(); // so that it shows the colour first time it loads


// RANGE
const theRange = document.getElementById("range");

theRange.addEventListener("input", showRange);

function showRange() {
    let r = theRange.value;
	// note you need % unit too
	let runit = `${r}%`;
  theColourBox.style.width = runit;
	theColourBox.innerText = runit;
}