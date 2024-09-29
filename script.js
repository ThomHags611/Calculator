const display = document.getElementById("display");
let input;
let firstNum = 2;
let secondNum = 2;
console.log(firstNum + secondNum);

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
        secondNum = parseFloat(display.value);

        console.log(firstNum + secondNum);
        try{
            switch(input)
            {
                case '+':
                    display.value = (firstNum + secondNum);
                    break;
                case '-':
                    display.value = firstNum - secondNum;
                    break;
                case '*':
                    display.value = firstNum * secondNum;
                    break;
                case '/':
                    display.value = firstNum / secondNum;
                    break;
                case '%':
                    display.value = firstNum % secondNum;
                default:
                    break;
            }
        }catch(error){
            display.value() = "error";

        }
            
        
        
    
    try{
       display.value = eval(display.value); 
    }
    catch(error){
        display.value = "error";
    }
}

function negate(){
    display.value *= -1;
}

function callAdd(){compute('+');}
function callSub(){compute('-');}
function callMul(){compute('*');}
function callDiv(){compute('/');}
function callMod(){compute('%');}

function compute(input2){
    firstNum = parseFloat(display.value);
    input = input2;
    display.value = "";
}
