export default function Sound(){
    const buttonPressAudio=new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    // "new" cria um objeto e coloca esse objeto na variável que foi criada, assim, consegue-se
    // acessar propriedades de audio utilizando essa variável
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

// function pressButton(){
//     buttonPressAudio.play()
// }

// function timeEnd(){
//     kitchenTimer.play()
// }


bgAudio.loop

return{
    buttonPressAudio,
    kitchenTimer,
    bgAudio

}
}