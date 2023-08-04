const button = document.querySelector("#btn-main");

const buttonHandler = () => {
  let input = window.confirm("Are you sure you want go to Google?");

  if (input) {
    window.location.href = "https://www.google.com";
  } else {
    alert("You have cancelled the redirection");
  }
};

button.addEventListener("click", buttonHandler);