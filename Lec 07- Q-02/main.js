let average = 0;
let total = 0;

let gradeElm = document.getElementById("grade");
let btn = document.getElementsByClassName("w3-button")[0];

gradeElm.style.display = "none";

const displayPrompt = function () {
  for (let i = 0; i < 5; i++) {
    let mark = parseInt(
      prompt("Please enter your marks for subject: " + (i + 1))
    );
    total += mark;
    average = total / 5;
  }
};

displayPrompt();

gradeElm.style.display = "block";

const displayGrade = () => {
  if (average > 40) {
    gradeElm.classList.add("w3-green");
    gradeElm.innerHTML = "Congratulations!";
  } else {
    gradeElm.classList.add("w3-orange");
    gradeElm.innerHTML = "Better luck next time!";
  }
};

btn.addEventListener("click", displayGrade);