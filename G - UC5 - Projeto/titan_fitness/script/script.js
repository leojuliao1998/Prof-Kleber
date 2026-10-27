document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        { imagem: "imagens/1.jpg", posicao: "center 55%", tamanho: "cover" },
        { imagem: "imagens/2.jpg", posicao: "center 25%", tamanho: "cover"},
        { imagem: "imagens/3.jpg", posicao: "center 80%", tamanho: "cover" }
    ]

    let indiceAtual = 0
    const heroSection = document.getElementById("heroSlider")

    if (heroSection) {
        heroSection.style.backgroundImage = `url('${slides[0].imagem}')`
        heroSection.style.backgroundPosition = slides[0].posicao
        heroSection.style.backgroundSize = slides[0].tamanho

        setInterval(function () {
            indiceAtual = (indiceAtual + 1) % slides.length
            
            heroSection.style.backgroundImage = `url('${slides[indiceAtual].imagem}')`
            heroSection.style.backgroundPosition = slides[indiceAtual].posicao
            heroSection.style.backgroundSize = slides[indiceAtual].tamanho
        }, 2000)
    }
})