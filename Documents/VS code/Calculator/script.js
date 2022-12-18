function clearScreen(){
    document.getElementById("screen").value = " ";
}

function display(value){
    document.getElementById("screen").value += value;
    }

function calculate(){
const screenInput = document.getElementById("screen").value;
const evaluateScreenInput = eval(screenInput);
document.getElementById("screen").value = evaluateScreenInput;

}