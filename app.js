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


//variables
let current = "0";
let formula = ""

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
    // scrnUpdate()
});
bck.addEventListener("click", () => {
    // scrnUpdate(1)
});
div.addEventListener("click", () => {
    scrnUpdate(1)
});
mult.addEventListener("click", () => {
    // scrnUpdate(1)
});
min.addEventListener("click", () => {
    // scrnUpdate(1)
});
add.addEventListener("click", () => {
    // scrnUpdate(1)
});
equal.addEventListener("click", () => {
    // scrnUpdate(1)
});
perc.addEventListener("click", () => {
    // scrnUpdate(1)
});
decimal.addEventListener("click", () => {
    // scrnUpdate(1)
});

//functions
function scrnUpdate(num){
    formulaScrn.innerHTML = num;
    currentScrn.innerHTML = num;
}
