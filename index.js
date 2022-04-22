var numberOfButtons = document.querySelectorAll(".drum").length;


// detecting mouse click
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

// detecting keyboard pressed
document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
});



// Function Make Sound
function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/C hard.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/D hard.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/E hard.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/F hard.mp3");
      tom4.play();
      break;

    case "g":
      var snare = new Audio("sounds/G hard.mp3");
      snare.play();
      break;

    case "h":
      var kick = new Audio("sounds/A hard.mp3");
      kick.play();
      break;

    case "j":
      var crash = new Audio("sounds/B hard.mp3");
      crash.play();
      break;


    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);

}
