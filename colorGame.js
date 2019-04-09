var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");



colorDisplay.textContent = pickedColor
for(var i = 0; i < squares.length; i++ ){
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares 

    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if (clickedColor === pickedColor){
            changeColors(clickedColor)
            messageDisplay.textContent = "Correct!"

        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    });
}

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
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return ("rgb(" + r + ", " + g + ", " + b + ")")
}