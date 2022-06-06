
/* 
    modulação e dependencias : separar em arq
    objetos com padrão Factory
*/


import Sound from "./sounds.js"
export function Timer({
    controlMinutes,
    controlSeconds,
    resetControls,
})



{ 
    
    let TimerTimeOut;
    let minutes = Number(controlMinutes.textContent);
    
    function updateDisplay(newMinutes,seconds){   // colocar isso na addEventListener, click : quando clicar no config.
        newMinutes=newMinutes===undefined ? minutes:newMinutes
        seconds=seconds===undefined ? 0:seconds
        
        controlMinutes.textContent= String(newMinutes). padStart(2, "0") // caixa de texto do seletor: numbers(minutes, seconds) para
                                // strings que serão preenchidas caso necessário(padStart)
        controlSeconds.textContent=String(seconds).padStart(2,"0")
        }


    function reset(){
         updateDisplay(minutes,0)
        clearTimeout(TimerTimeOut)
    }
    

    function countDown(){
        TimerTimeOut=setTimeout(function(){
            let seconds=Number(controlSeconds.textContent) 
            let minutes=Number(controlMinutes.textContent)
            let finish=minutes<=0 && seconds<=0
        
           updateDisplay(minutes,seconds)
            // if(minutes<=0){
            
            //     resetControls(); //resetando estilizações para a forma pré-click.; PROGRAMAÇÃO DECLARATIVA
            //     return // retornando vazio para interrompar a execução, caso as variáveis estejam nos valores desta condicional.
                    
            // }    
               
            if(finish){
                resetControls() 
                Sound().kitchenTimer.play()
                updateDisplay()
                return
            }
           
                
                
            
            if (seconds<=0){
                seconds=5
                --minutes // = minutes=minutes-1
                // controlMinutes.textContent= String(minutes - 1). padStart(2, "0") //subtracao de minutos quandos sec chega em 0
                
            }  
           
                /* Esta seria a opção imperativa para diminuir os segundos a cada repetição de countDown : 
            
                /*controlSeconds.textContent=String(seconds-1).padStart(2,"0"):
                - preenchimento da caixa de segundos.
                -  "padStart" : so pode ser usado quando é um string, primeiro argumento= numero de digitos, segundo é 
                    com o que vai preencher*/
                                
            

            updateDisplay(minutes, seconds-1)     // declarativa : já transforma em string, preenche com 0 se necessário, 
                                                    // subtrai 1 de seconds e minutes sem operação, já que ele só subtrai se 
                                                    // seconds=0.       
            
            countDown() /* execucao da funcao dentro de si mesma para repetir infinitamente, a não ser que chefe na condição de return
            que será lida no código antes dessa execução de função*/
        },1000) 

        
        
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
      }

    function hold(){
        clearTimeout(TimerTimeOut)
    }

    

    return{
        countDown, // ele está sendo retornado como um objeto que tem a propria funcao nos valores.(shorthand)
        reset,
        updateDisplay,
        hold,
        updateMinutes
    }
}