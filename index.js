let counter = 0;
let inrease = 0;
let decrease = 0;
let myCounter = document.getElementById('count');
var input = parseFloat(myCounter.textContent);
// buttons
let btn_increase = document.getElementById('increase');
let btn_decrease = document.getElementById('decrease');
let btn_reset = document.getElementById('reset');
// increase button action
btn_increase.addEventListener('click', function() {
    input++;
    myCounter.textContent = input;
    changeColor(input);
});
// decrease button action
btn_decrease.addEventListener('click', function() {
    input--;
    myCounter.textContent = input;
    changeColor(input);

});
// reset button action
btn_reset.addEventListener('click', function() {
    input = 0;
    myCounter.textContent = input;
    changeColor(input)

})



// color
function changeColor(a) {
    if (input > 0) {
        myCounter.style.color = 'green'
    } else if (input < 0) {
        myCounter.style.color = 'red'
    } else if (input == 0) {
        myCounter.style.color = 'black'
    }
}