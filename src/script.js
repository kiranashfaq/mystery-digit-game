var input_btn_div = document.getElementById("input-btn-div");
let flip_btn = document.querySelectorAll(".flip-btn");
var input = document.getElementById("input");
var enter = document.getElementById("inp-btn");
var back_side = document.querySelectorAll(".back-side");
var score = document.getElementById("score");

// console.log(input.value);
var trials = 0;
var currentCardId = null;
var currentRandomNumber = null;
var scoreBoard = 0;

enter.addEventListener("click", function () {
  if (input.value == "") {
    // alert("Please enter a number");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a number",
    });
    return;
  }
  var userInput = parseInt(input.value); // get the user's input

  trials++;
  if (userInput == currentRandomNumber) {
    // alert("Congratulations!!! You guessed the number correctly");
    Swal.fire("Congratulations!!! You guessed the number correctly");

    document.getElementById(currentCardId).classList.toggle("flipped");
    input_btn_div.style.display = "none";
    scoreBoard++;
  } else {
    // alert(`Wrong!!! You have ${3 - trials} chances left`);
    Swal.fire({
      title: `Wrong!!! You have ${3 - trials} chances left`,
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
    input.value = "";
    if (trials == 3) {
      // alert("Game Over!!! The correct number is " + currentRandomNumber);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Game Over!!!",
        footer: " The correct number is " + currentRandomNumber,
      });
      document.getElementById(currentCardId).classList.toggle("flipped");
      input_btn_div.style.display = "none";
    }
  }
});

function flipCard(cardId) {
  input.value = "";
  // alert("You have 3 chances to guess the number. Good luck!");
  Swal.fire("You have 3 chances to guess the number. Good luck!");

  input_btn_div.style.display = "flex";
  var card = document.getElementById(cardId);

  currentRandomNumber = Math.floor(Math.random() * 20 + 1);
  card.querySelector(".back-side").innerHTML = currentRandomNumber;
  console.log(currentRandomNumber);
  currentCardId = cardId;
  trials = 0;
}
score.addEventListener("click", function () {
  Swal.fire({
    title: "Score Board",
    text: "Your current score is " + scoreBoard,
    footer: "",
  });
});
