-inicio de DOM

-querySelector: comando que seleciona dentro do de .document um seletor.
Exemplo : let play= document.querySelector('.play')

-classList: fazer algo em relação a classe, como contar o numero de classes(length, entre outros.)
Exemplo : neste caso a intenção e esconder o botão play e colocar o pause, então:
    play.classList.add('hide')

* Agora precisamos colocar o botão de pause :
    document.querySelector('.pause').classList.remove('hide')


Contudo, esse botão de pause é para aparecer, enquanto o de play some, apenas quando clicarmos.

-PROGRAMAÇÂO IMPERATIVA
*ordens passo a passo do que deve ser feito(mais a frente vamos ver sobre declarativa(react, em sua maioria))

 -Event-driven:
 -Programação relacionada a eventos.
 Ou seja, qualquer tipo de atitude na pagina
: um clique, uma rolagem, um hover, enfim. 



***PASSO A PASSO DA APLICAÇÃO DE FORMA ESCRITA :

-Criar variáveis que contenham (selecionando) os seletores que desejamos manipular(aqueles que foram criados no css e organizados no html). Então precisamos usar comandos que selecionem e que indiquem onde selecionar: 


let buttonPlay=document.querySelector('.play'); //cria uma variável 
let buttonPause=document.querySelector('.pause')
let buttonStop=document.querySelector('.stop')
let buttonConfig=document.querySelector('.config')
let buttonSoundOn=document.querySelector('.sound-on')
let buttonSoundOff=document.querySelector('.sound-off')
let minutes; (neste caso, minutes vai ser a variável que será utilizada para configurar futuramente o click de configurações)
let controlMinutes=document.querySelector('.minutes')
let controlSeconds=document.querySelector('.seconds')



