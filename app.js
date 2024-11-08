/**
 * Simples simulador de uma Lampada
 *  @author Camila
 */

// variaveis de apoio lógica
let chave = false
let lampada = true // a lampada está ok 


function quebrar(){
    if (lampada === true) {}
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: copiar o arquivo de audio para o projeto
    // Passo 2: Usar a classe Audio(biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    // apoio a lógica para o JS indentificar a lampada quebrada
    lampada = false
}

function onoff() {
    if (chave === false && lampada === true) {
        // ligar a chave
        document.getElementById('interruptor').src="img/swon.png"
        chave = true // o JS agora sabr que a chave está ligada
        // acender a lampada
        document.getElementById('lamp').src="img/on.jpg"
    } else {
        document.getElementById('interruptor').src="img/swoff.png"
        chave = false
        // desligar a lampada
        document.getElementById('lamp').src="img/off.jpg"

    }

}