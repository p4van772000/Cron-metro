
import {Controls} from "./controls.js"
import {Timer} from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import{
    buttonPlay,
    buttonConfig,
    buttonPause,
    buttonStop,
    controlMinutes,
    controlSeconds,
}from "./elements.js"
 
 
 //let play=document.querySelector('.play')  


/* Criar variável que dentro do documento, ele selecione um dos seletores
(querySelector), neste caso, a classe play. 
-document é um objeto que possui propriedades, ou seja, um objeto dentro do documento que possui uma propriedade
que seleciona um seletor */

        //play.classList.add('hide')

/*comandos que influenciam nas classes, como : lenght(quantas classes dentro de play, neste caso); for eache(para tal classe
, faça tal coisa ) etc*/



        //document.querySelector('.pause')
        //.classList.remove('hide')

/* Para selecionar a classe com
querySelector, precisa-se do ponto antes.
(.puase), depois de selecionada, já não 
precisa mais.
*/

//event-driven
//programação imperativa
//callback: 'chamar de volta quando eu fizer tal coisa'
//Refatoração: mudar um codigo para deixa-lo mais compreensivel e performático, sem alterar suas funcionaldades.


// let buttonPlay=document.querySelector('.play'); //cria uma variável 
// let buttonPause=document.querySelector('.pause')
// let buttonStop=document.querySelector('.stop')
// let buttonConfig=document.querySelector('.config')
// let buttonSoundOn=document.querySelector('.sound-on')
// let buttonSoundOff=document.querySelector('.sound-off')
// let controlMinutes=document.querySelector('.minutes')
// let controlSeconds=document.querySelector('.seconds')



let control=Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonConfig
})

const config={
    controlMinutes,
    controlSeconds,
    resetControls:control.reset
    
}

let timer=Timer(config)
// const timer= Timer({
//     controlMinutes,
//     controlSeconds,
//     TimerTimeOut,
//     resetControls
// })

let sounds=Sound()

Events({control,timer,sounds})






