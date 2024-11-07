/**
 * Simples simulador de uma Lampada
 *  @author Camila
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: copiar o arquivo de audio para o projeto
    // Passo 2: Usar a classe Audio(biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
}