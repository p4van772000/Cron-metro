
import {
    buttonPlay,
    buttonConfig,
    buttonPause,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,

}from"./elements.js"

export default function Events({control,timer,sounds })
{

/*
    Neste caso, basta criar a função construtora "Events" que será executada no index.js. Aqui nesse 
    diretório, não existe control, timer e sounds, e nem precisa, pois não será executada aqui, então
    a importação não é necessária.Neste caso então, basta colocar um objeto como parâmetro da execução,
    pois essas funções, mesmo que complexas, já estão dentro de uma variável lá no index. Assim, ao
    executar Events no index, basta passar control, timer e sounds dentro de um objeto que esta 
    sendo parametro, ou seja: Events é um função construtora que irá fazer com que essas três funções
    que também são construtoras sejam executadas todas de uma vez no index.
*/


buttonPlay.addEventListener('click', function(){
    control.play()
    timer.countDown()
    sounds.buttonPressAudio.play()
    }
)


buttonPause.addEventListener('click', function(){
    control.pause()
    timer.hold()
    // Sounds.buttonPressAudio()
    sounds.buttonPressAudio.play()

    }
)


buttonStop.addEventListener('click', function(){
    control.reset()
    timer.reset()
    sounds.buttonPressAudio.play()
}  
)





buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.bgAudio.play()
})





buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sounds.bgAudio.pause()
})




buttonConfig.addEventListener('click', function(){
    let newMinutes=control.getMinutes()
    if(!newMinutes ){
        return timer.reset()
         
    }
    if (isNaN(newMinutes)){
        return timer.reset()
    }
    

    timer.updateMinutes(newMinutes)
    timer.updateDisplay(newMinutes,0)
    

    }
)
}