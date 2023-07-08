const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const answerButton = document.getElementById("result");
const ageOutput = document.getElementB;

yId("end");

//const errorMessage = document.getElementById("message");

answerButton.addEventListener("click", calculateAge);

const calculateAge = () => {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  if (isNaN(day)) {
    displayError = "Please enter valid day, month, and year values.";
    clearResults();
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  //console.log (today);
};
