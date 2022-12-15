//Detecing Button Presses (Clicks)

var audio = new Audio('sounds/tom-1.mp3');

for (i = 0; i < document.querySelectorAll(".drum").length; i++) { //Checks for all drum buttons that have class=drum if they have been clicked, instead of typing an (if condition for each button)
  document.querySelectorAll("button")[i].addEventListener("click", function handleclick() {

    var buttonInnerHTML = this.innerHTML; //this(related to constructor function(factory), enables you to deal with the current clone)

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting Keyboard Presses

document.addEventListener("keydown", function(event){ //implementing event input lets you know what triggered the eventlistener
// console.log(event);   and it's an object that has many parameters like (key, keycode..etc), to call one of these parameters we need the dot notation. so, event.key shows you exactly what key was pressed
makeSound(event.key);
buttonAnimation(event.key);
})


function makeSound(key){ //takes current innerHTML and checks if it matches the following letters, if so, it plays the sounds.

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3')
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3')
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3')
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML)
  }
}
function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);//To select the whole button
//currenyKey is the input that can be buttonInnerHTML in case of click or event.key in case of keypressing
//So, we're adding dot notation to the key that's used/selected.
//Now we add the class .pressed to the button using js

activeButton.classList.add("pressed");

setTimeout(function(){ //Function that applies delay to another function, so we made a function that removes the pressed style setTimeout waits for 0.1s before executing the function and remove the "pressed"
  activeButton.classList.remove("pressed");
}, 100);
}
