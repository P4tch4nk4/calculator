var calc
function button(value){
    calc = document.forCalculator.inputDisplay.value += value
}
function calculate(){
    calc = eval(calc)
    document.forCalculator.inputDisplay.value = calc
}