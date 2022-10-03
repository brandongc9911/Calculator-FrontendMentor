const btn_switch = document.querySelector('.switch')
const display = document.querySelector("#display")
let botones = document.querySelectorAll(".btn")
let array_operando = []
let operando
let operando2
let operador
let resultado
let button

// SWITCH CAMBIO DE THEME
let contador = 0
btn_switch.addEventListener("click", ()=>{

    contador++
    
    if(contador === 3){
        contador = 0
        moveSwitch("theme1","0","unset")
    } 

    if(contador === 1){
        
        moveSwitch("theme2","20px","unset")

    }

    if(contador === 2){
        
        moveSwitch("theme3","40px","unset")

    }
})

function moveSwitch(color,left,right){
    document.body.classList = color
    btn_switch.style.setProperty("--left",left)
    btn_switch.style.setProperty("--right",right)
}
// OPERACIONES DE BOTONES
botones.forEach((btn) =>{
   btn.addEventListener("click", pressButton)
})

function pressButton(e){
    button = e.target.textContent.trim()
    if(button >= 0 && button <= 9){

        if(resultado === undefined){
            display.value += button
            
        }

        if(resultado != undefined){

            operando = resultado
            display.value = button
            resultado = undefined
        }
        if(operador === "+" || operador === "-" || operador === "x" || operador === "/"){
            operando2 = display.value
        // console.log(operando2);

        }else{
            operando = display.value

        }

    }

    else if(button === "+"){
        operador = "+"
        suma()
    }

    else if(button === "-"){
        operador = "-"
        resta()
    }

    else if(button === "x"){
        operador = "x"
        multiplicacion()
    }

    else if(button === "/"){
        operador = "/"
        division()
    }

    else if(button === "="){
        equal()
    }

    else if(button === "DEL"){
        del()
    }
    else if(button === "RESET"){
        reset()
    }

    else{
        point()
    }


}


function suma(){
    display.value = ""
    if(operando2 != undefined){
  
        resultado = parseFloat(operando) + parseFloat(operando2)
        display.value = resultado
    }

    
}
function resta(){
    display.value = ""
    if(operando2 != undefined){
  
        resultado = parseFloat(operando) - parseFloat(operando2)
        display.value = resultado
    }
}
function multiplicacion(){
    display.value = ""
    if(operando2 != undefined){
  
        resultado = parseFloat(operando) * parseFloat(operando2)
        display.value = resultado
    }
    
}

function division(){
    display.value = ""
    if(operando2 != undefined){
  
        resultado = parseFloat(operando) / parseFloat(operando2)
        display.value = resultado

    }
    
}
function equal(){
    
    

   if(operador === "+"){
        resultado = parseFloat(operando) + parseFloat(operando2)
        display.value = resultado
   }

   else if(operador === "-"){
        resultado = parseFloat(operando) - parseFloat(operando2)
        display.value = resultado
   }

   else if(operador === "x"){
        resultado = parseFloat(operando) * parseFloat(operando2)
        display.value = resultado
    }

    else{
        resultado = parseFloat(operando) / parseFloat(operando2)
        display.value = resultado
   }


   if(resultado != undefined){
        operando = resultado
        operando2 = undefined
        resultado = undefined
        
    }


   
}
function reset(){
    operador = undefined
    operando = undefined
    operando2 = undefined
    display.value = ""
    resultado = undefined
}

function point(){
    display.value = display.value + "."
}

function del(){

    if(display.value){
        let borrado = display.value.substring(0,display.value.length -1)
        display.value = borrado
        

        if(operador === undefined){
            operando = borrado
        }else{
            operando2 = borrado
        }
    }
    
}

