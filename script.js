const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const headingOne = document.getElementById("headingDay");
const headingTwo = document.getElementById("headingMonth");
const headingThree = document.getElementById("headingYear");

const answerButton = document.getElementById("result");

const yearsOutput = document.getElementById("years");
const monthsOutput = document.getElementById("months");
const daysOutput = document.getElementById("days");

const yearError = document.getElementById("yearError");
const monthError = document.getElementById("monthError");
const dayError = document.getElementById("dayError");

//const errorMessage = document.getElementById("message");

const calculateAge = () => {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // To Check if the input field is empty
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    displayError();
    clearResults();
    return;
  }

  // To Check if day is within the valid range selected for selected month and year.

  const maxDay = new Date(year, month, 0).getDate();

  if (day < 1 || day > maxDay) {
    displayError("Must be a valid day.");
    clearResults();
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  const ageInMilliseconds = today - birthDate;
  const ageDate = new Date(ageInMilliseconds);

  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  displayResults(years, months, days);

  clearError();
};

const displayResults = (years, months, days) => {
  yearsOutput.textContent = years;
  monthsOutput.textContent = months;
  daysOutput.textContent = days;
};

const clearResults = () => {
  yearsOutput.textContent = "";
  monthsOutput.textContent = "";
  daysOutput.textContent = "";
};

const displayError = () => {
  yearError.textContent = "Must be in the past";
  monthError.textContent = "Must be a valid month";
  dayError.textContent = "Must be a valid day";
  
  headingOne.style.color = "red";
  headingTwo.style.color = "red";
  headingThree.style.color = "red";
};

answerButton.addEventListener("click", calculateAge);
