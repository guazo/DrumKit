var buttons = document.querySelectorAll(".drum");

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
}

function playAudio(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

function handleButtonClickOrKeyPress(inputKey) {
    buttonAnimation(inputKey);
    switch (inputKey) {
        case "w":
            playAudio("sounds/tom-1.mp3");
            break;
        case "a":
            playAudio("sounds/tom-2.mp3");
            break;
        case "s":
            playAudio("sounds/tom-3.mp3");
            break;
        case "d":
            playAudio("sounds/tom-4.mp3");
            break;
        case "j":
            playAudio("sounds/crash.mp3");
            break;
        case "k":
            playAudio("sounds/kick-bass.mp3");
            break;
        case "l":
            playAudio("sounds/snare.mp3");
            break;
        default:
            console.log("Invalid key or button");
    }
}

document.addEventListener('keydown', (event) => {
    var keyValue = event.key.toLowerCase();
    console.log(keyValue);
    handleButtonClickOrKeyPress(keyValue);
});

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        handleButtonClickOrKeyPress(buttonInnerHTML);
    });
}

