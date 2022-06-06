export function Controls({
    buttonPlay, 
    buttonPause,
    buttonConfig,
    buttonStop
})




{                  // refatoração: uma função que irá dentro da condicional de minutos e segundos=0
    // vai resetar todas as estilizações para o padrão pré click
    
    
    function getMinutes(){
        let newMinutes=prompt('Quantos minutos ?')
        if(!newMinutes){
           return false;
          
        }
    return newMinutes;
    }

    
    function pause()
        
        {
            buttonPause.classList.add('hide')
            buttonPlay.classList.remove('hide')

            
            
        }
    
      


    function play()
       
        {
            buttonPlay.classList.add('hide')     
            buttonPause.classList.remove('hide')
            buttonConfig.classList.add('hide')
            buttonStop.classList.remove('hide')
        }
    
    
    function reset(){   
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStop.classList.add('hide')
        buttonConfig.classList.remove('hide')

        }
    
    return {
        reset,
        play,
        pause,
        getMinutes,
       

    }
}
