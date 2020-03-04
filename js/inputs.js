"use-strict";


(function () {
  const showDate = () => {
    let d = new Date(datePicker.value);
    theDate.innerText = d.toDateString();
  }
  datePicker.addEventListener("change", showDate);
  // shows today's date on load:
  let today = new Date();
  theDate.innerHTML = today.toDateString();



  const showColour = () => {
    let c = theColour.value;
    colourBox.style.backgroundColor = c;
  }
  theColour.addEventListener("change", showColour);
  // shows the colour on load:
  showColour();



  const showRange = () => {
    let r = theRange.value;
  	// note: the '%' unit is essential
  	let rangeUnit = `${r}%`;
    colourBox.style.width = rangeUnit;
  	colourBox.innerText = rangeUnit;
  }
  theRange.addEventListener("input", showRange);

})();
