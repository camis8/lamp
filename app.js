/**
 * Simples simulador de uma Lampada
 *  @author Camila
 */

// variaveis de apoio lógica
let chave = false
let lampada = true // a lampada está ok 

// Pré carregamento do arquivo de audio PIXABAY
let som = new Audio("sound/breaking-glass.mp3")

// lanterna pré carregamento
let stream, track // variaveis de apoio
inicializarLanterna()
// tr-cath (tratamento de excesões)
try {
    // Solicita acesso à câmera traseira sem exibir o vídeo
    stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
    })
    
    // Obtém o track do vídeo para controlar a lanterna
    track = stream.getVideoTracks()[0]
    
    // Verifica se o dispositivo suporta o uso da lanterna
    const capabilities = track.getCapabilities()
    if (!capabilities.torch) {
        console.log("Lanterna não suportada no dispositivo.")
        return
    }
} catch (error) {
    console.error(`Erro ao inicializar a lanterna: ${error}`)
}



function quebrar() {
    if (lampada === true) { }
    document.getElementById('lamp').src = "img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: copiar o arquivo de audio para o projeto
    // Passo 2: Usar a classe Audio(biblioteca interna do JS)
    // Passo 3: pré arregar o arquivo de audio para sincronizar com a troca de imagem(UX Experiencia do usuário)
   
    som.play()
    // apoio a lógica para o JS indentificar a lampada quebrada
    lampada = false
}

function onoff() {
    if (chave === false) {
        // ligar a chave
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // o JS agora sabr que a chave está ligada
        // acender a lampada
        // Verificar se a lampada está intacta antes de acender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
        
    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        // verificar se a lampada esta intacta antes de apagar
        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}

// Estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e telas touch
//  Passo 1 - capturar os elementos do HTML que quero manipular
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

// Passo 2 - manipular o evento mouse pressionado
// addEventListener ("escuta de eventos em tempo real")
// mousedown (mouse pressionado constantemente)
// mouseup (soltar o botao do mouse)
// touchstart (tocar na tela e manter)
//touchend (deixar de pressionar a tela)

// pressionar o botão do mouse e manter
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    // console.log("botão do mouse pressionado")
    // se a lâmpada estiver intatcta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/on.jpg" //trocar a imagem 
    }
})

// soltar o botao do mouse
botao.addEventListener('mouseup', (event) =>{
    event.preventDefault() //ignorar o comportamento padrao
    //console.log("botao do mouse solto")
   // se a lâmpada estiver intatcta e o interruptor principal estiver desligado
   if (lampada === true && chave === false) {
    lampadaImg.src = "img/off.jpg" //trocar a imagem 
}
})


// pressionar a tela touch e manter
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    // console.log("tela pressionada")
    // se a lâmpada estiver intatcta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/on.jpg" //trocar a imagem 
    }
})

// deixar pressionado a tela touch
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    // console.log("tela pressionada")
    // se a lâmpada estiver intatcta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/on.jpg" //trocar a imagem 
    }
})

// lanterna (torch)
async function inicializarLanterna() {
    //try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })

        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]

        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

// Função para ligar a lanterna (torch)
async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

// Função para desligar a lanterna sem parar o stream
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}
