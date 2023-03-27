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

  // Output an alert box if no inputs
  // check if input of weight is empty or not
  if (inputWeightDOM.value === null || inputWeightDOM.value === "") {
    // check if input of height is empty or not
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
      alert("Please fill in the height!");
    }
    // check if input of height not empty
    else {
      height = inputHeightDOM.value;
    }
  }

  //   Calculate the bmi
  //   Round bmi to 1 d.p
  if (weight !== 0 && height !== 0) {
    bmi = weight / (height * height);
  }
  bmiRounded = Math.round(bmi * 10) / 10;

  //   Output the bmi advice based on value of bmi
  //   1. invalid value
  if (bmi === 0) {
    return;
  }
  // 2. Underweight
  else if (bmi < 18.5) {
    bmiAdviceDOM.innerText =
      "BMI is " +
      bmiRounded +
      ". \r\n Underweight : You need to eat more or consult a doctor";
  }
  // 3. Ideal
  else if (bmi >= 18.5 && bmi < 25) {
    bmiAdviceDOM.innerText =
      "BMI is " +
      bmiRounded +
      ". \r\n Ideal : Good job for taking care of your health";
  }
  // 4. Overweight
  else if (bmi >= 25 && bmi < 30) {
    bmiAdviceDOM.innerText =
      "BMI is " + bmiRounded + ". \r\n Overweight : You need to exercise";
  }
  // 5. Obesity
  else if (bmi >= 30) {
    bmiAdviceDOM.innerText =
      "BMI is " +
      bmiRounded +
      ". \r\n Obesity : You need to eat healthy, exercise or consult a doctor";
  }
});
