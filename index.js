const buttons = document.querySelectorAll('.number');
let operator = ""


const  inputConsole= document.querySelector('#input-calc')
for (let i =0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        if (inputConsole.value == '0'){
            inputConsole.value = ""

        } 
        inputConsole.value= inputConsole.value+buttons[i].innerHTML;
        
        });
     
    }
const clearButton = document.querySelector(".bt-clear")
clearButton.addEventListener("click", function(){
    inputConsole.value= ""

})
const backButton = document.querySelector(".bt-backspace")
backButton.addEventListener("click" , function(){
    inputConsoleValue = inputConsole.value
    inputConsole.value  = inputConsoleValue.slice(0,-1)

})
let firstState = 0
let SecondState =0
const divideButton = document.querySelector('.bt-divide')
divideButton.addEventListener('click', function(){
    firstState = Number.parseInt(inputConsole.value)
    inputConsole.value = "0"
    operator = "/"


})
const multbutton = document.querySelector('.bt-multiply')
multbutton.addEventListener('click', function(){
    firstState = Number.parseInt(inputConsole.value)
    inputConsole.value='0'
    operator='*'
})
const addbutton = document.querySelector('.bt-add')
addbutton.addEventListener('click', function(){
    firstState = Number.parseInt(inputConsole.value)
    inputConsole.value='0'
    operator='+'
})
const subbutton = document.querySelector('.bt-subtract')
subbutton.addEventListener('click', function(){
    firstState = Number.parseInt(inputConsole.value)
    inputConsole.value='0'
    operator='-'
})


const equalButton = document.querySelector(".bt-equal")
equalButton.addEventListener('click', function(){
    if (operator=="/"){
        SecondState = Number.parseInt(inputConsole.value)
        inputConsole.value =    firstState/SecondState
    }else if(operator=="*"){
        SecondState = Number.parseInt(inputConsole.value)
        inputConsole.value = firstState*SecondState
    }else if(operator=="+"){
        SecondState = Number.parseInt(inputConsole.value)
        inputConsole.value = firstState+SecondState
    }
    else{
        SecondState = Number.parseInt(inputConsole.value)
        inputConsole.value = firstState-SecondState

    }
    

})
