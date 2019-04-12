var numSquares = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init(){
    // Initate the run and "reset" to get everthing working 
    // from no colors to all squares have color
    setUpModeButtons()
    setUpSquares()
    reset();
}

function setUpModeButtons(){
    // SET UP MODE BUTTONS FUNCTION
    // the switch button between easy & hard
    // Easy: 1 by 3 [][][]
    // 
    // Hard: 3 by 3 [][][]
    //              [][][]
    //              [][][]
    //mode button event listener
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
            // figure out how many squares to show
            // pick new colors
            // pick a new picked color
            // update page to reflect changes


        });
    }
}

function setUpSquares(){
    // literally..
    // COLOR ALL SQUARES
    for (var i = 0; i < squares.length; i++) {
        // add initial color to squares
        squares[i].style.backgroundColor = colors[i];
        // add click listeners to squares 

        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color

            console.log(clickedColor, pickedColor)
            if (clickedColor === pickedColor) {
                console.log(clickedColor, pickedColor)
                changeColors(clickedColor)
                resetButton.textContent = "Play Again?"
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                resetButton.style.color = clickedColor;
                messageDisplay.style.color = clickedColor;
                // document.querySelector(".mode.selected").style.color(clickedColor);

                for (var i = 0; i < modeButtons.length; i++)
                {
                    modeButtons[i].style.color = clickedColor;
                    if (modeButtons[i].classList.value === "mode")
                    {
                        modeButtons[i].style.color=(clickedColor);
                    } else{
                        modeButtons[i].style.color = "white"
                        modeButtons[i].style.background=(clickedColor);
                    }
                }
            } else {
                this.style.backgroundColor = "#E5E5E5";
                messageDisplay.textContent = "Try again"
            }
        });
    }
}

function reset(){
    // RESET FUNCTION:
    // generate new colors, generate picked colors
    // this function reset all thhe colors in the squares
    // reset background color, display message, and display button
    

    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "SteelBlue";
    resetButton.textContent = "New Colors";
    resetButton.style.color = "SteelBlue";
    messageDisplay.style.color = "SteelBlue";

    for (var i = 0; i < modeButtons.length; i++) {
        if (modeButtons[i].classList.value === "mode") {
            modeButtons[i].style.color = ("SteelBlue");
            modeButtons[i].style.background = "white";
        } else {
            modeButtons[i].style.color = "white";
            modeButtons[i].style.background = ("SteelBlue");
        }
    }

}



resetButton.addEventListener("click", function(){
    // //generate all new colors
    // numSquares = 6
    // colors = generateRandomColors(numSquares);
    // //pick a new random color from array
    // pickedColor = pickColor()
    // colorDisplay.textContent=pickedColor;
    // //change colors of squares
    // for (var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // messageDisplay.textContent ="";
    // h1.style.backgroundColor = "SteelBlue";
    // this.textContent = "New Colors";
    reset();
});


function changeColors(color){
    // loop through all square
    for (var i = 0; i < squares.length; i++ ){
        squares[i].style.backgroundColor = color
    }
    // change each color to match given color
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length)
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var returncolors = [];
    // add num random colors to array
    for( var i = 0; i < num; i++){
        returncolors.push(randomColors())
    }
    // return that array
    return returncolors;
}

function randomColors(){
    // Randomize RGB colors
    // RED
    var r = Math.floor(Math.random() * 256)
    // GREEN
    var g = Math.floor(Math.random() * 256)
    // BLUE
    var b = Math.floor(Math.random() * 256)

    return ("rgb(" + r + ", " + g + ", " + b + ")")
}

