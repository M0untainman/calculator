//dom elements declaration
const formulaScrn = document.getElementById("formula");
const currentScrn = document.getElementById("current");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const add = document.querySelector(".add");
const min = document.querySelector(".min");
const mult = document.querySelector(".mult");
const div = document.querySelector(".div");
const bck = document.querySelector(".bck");
const C = document.querySelector(".C");

//event listeners
one.addEventListener("click", () => {
    scrnUpdate(1)
});
two.addEventListener("click", () => {
    scrnUpdate(2)
});
three.addEventListener("click", () => {
    scrnUpdate(3)
});
four.addEventListener("click", () => {
    scrnUpdate(4)
});
five.addEventListener("click", () => {
    scrnUpdate(5)
});
six.addEventListener("click", () => {
    scrnUpdate(6)
});
seven.addEventListener("click", () => {
    scrnUpdate(7)
});
eight.addEventListener("click", () => {
    scrnUpdate(8)
});
nine.addEventListener("click", () => {
    scrnUpdate(9)
});
zero.addEventListener("click", () => {
    scrnUpdate(0)
});
C.addEventListener("click", () => {
    clear()
});
bck.addEventListener("click", () => {
    back();
});
div.addEventListener("click", () => {
    getOp("/")
});
mult.addEventListener("click", () => {
    getOp("*")
});
min.addEventListener("click", () => {
    getOp("-")
});
add.addEventListener("click", () => {
    getOp("+")
});
equal.addEventListener("click", () => {
    getAns();
});
decimal.addEventListener("click", () => {
    addDec()
});

//keypress functionality
document.addEventListener('keyup', (event) => {
    let code = event.code;
    console.log(code);
      switch(code) {
        case ("Numpad1" || "digit1"):
            scrnUpdate(1);
            break;
        case ("Numpad2" || "digit2"):
            scrnUpdate(2);
            break;
        case ("Numpad3" || "digit3"):
            scrnUpdate(3);
            break;
        case ("Numpad4" || "digit4"):
            scrnUpdate(4);
            break;
        case ("Numpad5" || "digit5"):
            scrnUpdate(5);
            break;
        case ("Numpad6" || "digit6"):
            scrnUpdate(6);
            break;
        case ("Numpad7" || "digit7"):
            scrnUpdate(7);
            break;
        case ("Numpad8" || "digit8"):
            scrnUpdate(8);
            break;
        case ("Numpad9" || "digit9"):
            scrnUpdate(9);
            break;
        case ("Numpad0" || "digit0"):
            scrnUpdate(0);
            break;
        case "Backspace":
            back();
            break;
        case "Delete":
            clear();
            break;
        case "NumpadDivide":
            getOp("/");
            break;
        case "NumpadMultiply":
                getOp("*");
            break;
        case "NumpadSubtract":
                getOp("-");
            break;
        case "NumpadAdd":
                getOp("+");
            break;
        case "NumpadEnter":
            getAns();
            break;
        case "NumpadDecimal" || "Period":
            addDec();
            break;
};
});

//variables
let ans = 0;
let x = 0;
let y = 0;
let operator = null;
let isDecimal = false;

//functions
//takes user input and creates the current number being entered
function scrnUpdate(inNum){
    let prev = currentScrn.innerHTML;
    let newNum = prev.concat(inNum);
    currentScrn.innerHTML = newNum;
}

//adds a decimal point so that float calcs can be done
function addDec(){
    if (!isDecimal){
        isDecimal = true;
    let num = currentScrn.innerHTML;
    currentScrn.innerHTML = num + ".";
    }
    else {
        isDecimal = false;
        let num = currentScrn.innerHTML;
        currentScrn.innerHTML = num.slice(0,-1);
    }
}    

//set the operator which will determine what type of math will be performed
function getOp(inOp) {
    if (currentScrn.innerHTML != ""){
        x = currentScrn.innerHTML
        formulaScrn.innerHTML = x.toString() + " " + inOp;
        currentScrn.innerHTML = "";
        operator = inOp;
    }
    else { //allows user to change what the current operator is
        formulaScrn.innerHTML = x.toString() + " " + inOp;
        currentScrn.innerHTML = "";
        operator = inOp;
    }
    
}

//evaluates the current expression
function getAns(){
    y = currentScrn.innerHTML;
    if (operator == "+") {
        ans = parseFloat(x) + parseFloat(y);
        formulaScrn.innerHTML = x.toString() + " + " +y.toString() + " ="
        currentScrn.innerHTML = Math.round(ans * 100000) / 100000
        ;
    }
    else if (operator == "-") {
        ans = parseFloat(x) - parseFloat(y);
        formulaScrn.innerHTML = x.toString() + " - " +y.toString() + " ="
        currentScrn.innerHTML = Math.round(ans * 100000) / 100000;
    }
    else if (operator == "*") {
        ans = parseFloat(x) * parseFloat(y);
        formulaScrn.innerHTML = x.toString() + " * " +y.toString() + " ="
        currentScrn.innerHTML = Math.round(ans * 100000) / 100000;
    }
    else if (operator == "/") {
        ans = parseFloat(x) / parseFloat(y);
        formulaScrn.innerHTML = x.toString() + " / " +y.toString() + " ="
        currentScrn.innerHTML = Math.round(ans * 100000) / 100000;
    }
    
    
}

//refreshes the calculator so that no variables are in memory
function clear() {
    current = "";
    formula = "";
    formulaScrn.innerHTML = "";
    currentScrn.innerHTML = "";
    x = 0;
    y = 0;
    ans = 0;
    operator = null;
    isDecimal = false;
}

//allows for a backspace of current number
function back(){
    let needsfixing = currentScrn.innerHTML;
    let fixed = needsfixing.slice(0, -1);
    currentScrn.innerHTML = fixed;
}
