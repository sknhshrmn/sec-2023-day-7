// Declare dom variable
let inputWeightDOM = document.querySelector("#weight");
let inputHeightDOM = document.querySelector("#height");
let calculateBtnDOM = document.querySelector("#calculate-btn");
let bmiAdviceDOM = document.querySelector("#bmi-advice");

// Declare and initialize value variable
let weight = 0;
let height = 0;
let bmi = 0;

// pseudocode
calculateBtnDOM.addEventListener("click", function (e) {
  e.preventDefault();

  //   check if input of weight is empty or not
  if (inputWeightDOM.value === null || inputWeightDOM.value === "") {
    //   check if input of height is empty or not
    if (inputHeightDOM.value === null || inputHeightDOM.value === "") {
      alert("Please fill in the weight and height!");
    } else {
      alert("Please fill in the weight!");
    }
    // check if input of weight not empty
  } else {
    weight = inputWeightDOM.value;
    //   check if input of height is empty or not
    if (inputHeightDOM.value === null || inputHeightDOM.value === "") {
      alert("Please fill in the height in m!");
    }
    // check if input of height not empty
    else {
      height = inputHeightDOM.value;
    }
  }

  //   Calculate the bmi
  if (weight !== 0 && height !== 0) {
    bmi = weight / (height * height);
  }

  //   Round bmi to 1 d.p
  bmiRounded = Math.round(bmi * 10) / 10;

  //   Output the bmi advice based on value of bmi
  //   invalid value
  if (bmi === 0) {
    return;
  }
  // Underweight
  else if (bmi < 18.5) {
    bmiAdviceDOM.innerText =
      "BMI is " +
      bmiRounded +
      ". \r\n Underweight : You need to eat more or consult a doctor";
  }
  // Ideal
  else if (bmi >= 18.5 && bmi < 25) {
    bmiAdviceDOM.innerText =
      "BMI is " +
      bmiRounded +
      ". \r\n Ideal : Good job for taking care of your health";
  }
  // Overweight
  else if (bmi >= 25 && bmi < 30) {
    bmiAdviceDOM.innerText =
      "BMI is " + bmiRounded + ". \r\n Overweight : You need to exercise";
  }
  // Obesity
  else if (bmi >= 30) {
    bmiAdviceDOM.innerText =
      "BMI is " +
      bmiRounded +
      ". \r\n Obesity : You need to eat healthy, exercise or consult a doctor";
  }
});
