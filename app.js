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
const perc = document.querySelector(".perc");
const add = document.querySelector(".add");
const min = document.querySelector(".min");
const mult = document.querySelector(".mult");
const div = document.querySelector(".div");
const bck = document.querySelector(".bck");
const mc = document.querySelector(".mc");
const MR = document.querySelector(".MR");
const C = document.querySelector(".C");
const madd = document.querySelector(".mAdd");
const mMin = document.querySelector(".mMin");

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
mc.addEventListener("click", () => {
    //
});
madd.addEventListener("click", () => {
    // scrnUpdate(1)
});
mMin.addEventListener("click", () => {
    // scrnUpdate(1)
});
MR.addEventListener("click", () => {
    // scrnUpdate(1)
});
C.addEventListener("click", () => {
    clear()
});
bck.addEventListener("click", () => {
    // scrnUpdate(1)
});
div.addEventListener("click", () => {
    //scrnUpdate(1)
});
mult.addEventListener("click", () => {
    // scrnUpdate(1)
});
min.addEventListener("click", () => {
    // scrnUpdate(1)
});
add.addEventListener("click", () => {
    getOp("+")
});
equal.addEventListener("click", () => {
    getAns();
});
perc.addEventListener("click", () => {
    // scrnUpdate(1)
});
decimal.addEventListener("click", () => {
    // scrnUpdate(1)
});

//variables
let ans = 0;
let x = 0;
let y = 0;
let operator = null;

//functions
function scrnUpdate(inNum){
    let prev = currentScrn.innerHTML;
    let newNum = prev.concat(inNum);
    currentScrn.innerHTML = newNum;
}

function getOp(inOp) {
    x = currentScrn.innerHTML
    formulaScrn.innerHTML = x.toString() + " " + inOp;
    currentScrn.innerHTML = "";
    operator = inOp;
}

function getAns(){
    y = currentScrn.innerHTML;
    if (operator == "+") {
        ans = parseInt(x) + parseInt(y);
        formulaScrn.innerHTML = x.toString() + " + " +y.toString() + " ="
        currentScrn.innerHTML = ans;
    }
    
    
}

function clear() {
    current = "";
    formula = "";
    formulaScrn.innerHTML = "";
    currentScrn.innerHTML = "";
    x = 0;
    y = 0;
}
