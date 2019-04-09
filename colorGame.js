var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click",function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");

    numSquares = 3;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "SteelBlue";
    resetButton.textContent = "New Colors"
});
hardBtn.addEventListener("click", function () {
    this.classList.add("selected")
    easyBtn.classList.remove("selected")

    numSquares = 6;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (i>=3){
            squares[i].style.display = "block"
        }
        squares[i].style.backgroundColor = colors[i];
        
        
    }
    h1.style.backgroundColor = "SteelBlue";
    resetButton.textContent = "New Colors"
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor()
    colorDisplay.textContent=pickColor();
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent ="";
    h1.style.backgroundColor = "SteelBlue";
    this.textContent = "New Colors";
});

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
            resetButton.textContent = "Play Again?"
            messageDisplay.textContent = "Correct!";
            h1.style.backgroundColor=clickedColor;
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
    // Randomize RGB colors
    // RED
    var r = Math.floor(Math.random() * 256)
    // GREEN
    var g = Math.floor(Math.random() * 256)
    // BLUE
    var b = Math.floor(Math.random() * 256)

    return ("rgb(" + r + ", " + g + ", " + b + ")")
}

