let noOfButtons = document.querySelectorAll(".drum").length;

// adding the eventListener to all the button press
for (let i = 0; i < noOfButtons; ++i) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // here "this" refers to the button object itself
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

}

// event listener for keyboard press
document.addEventListener("keydown", function (e) {
    // here "e" => "event" refers to the key pressed event itself
    let k = e.key;
    makeSound(k);
    buttonAnimation(k);
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}