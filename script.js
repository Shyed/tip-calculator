// Get input elements
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-per-person");
const calculateBtn = document.getElementById("calculate-btn");

// Calculate tip and total
calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  // Validation
  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || bill <= 0 || people <= 0) {
    alert("Please enter valid positive numbers.");
    return;
  }

  // Calculate tip and total
  const tipValue = (bill * tipPercent) / 100;
  const total = bill + tipValue;
  const perPerson = total / people;

  // Update the DOM
  tipAmount.textContent = tipValue.toFixed(2);
  totalPerPerson.textContent = perPerson.toFixed(2);
});
