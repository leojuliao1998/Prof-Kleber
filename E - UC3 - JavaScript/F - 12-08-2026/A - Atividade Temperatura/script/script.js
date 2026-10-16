let tagCidade = document.getElementById("cidade")
let tagTemperatura = document.getElementById("temperatura")
let tagVerificacao = document.getElementById("verificacao")
let tagSituacao = document.getElementById("situacao")
let tagBody = document.querySelector("body")

function temperaturaCidade(){
    let cidade = tagCidade.value
    let temperatura = Number(tagTemperatura.value)

    tagVerificacao.innerHTML = "A temperatura de "+ cidade + " é de " + temperatura.toFixed(1) + " °C."
        if (temperatura > 40){
            tagSituacao.innerHTML = (cidade + "está no nível de temperatura MUITO QUENTE!")
            tagBody.style.backgroundImage = "url('https://static.vecteezy.com/ti/fotos-gratis/p2/4671049-o-sufocante-sol-no-solo-muito-seco-gratis-foto.jpg')"
        }
        else if (temperatura > 30){
            tagSituacao.innerHTML = (cidade + " está no nível de temperatura QUENTE!")
            tagBody.style.backgroundImage = "url('https://primeirapagina.com.br/wp-content/uploads/2025/05/ceu-aberto-em-Cuiaba-sol.jpg')"
        }
        else if (temperatura > 20){
            tagSituacao.innerHTML = (cidade + " está no nível de temperatura AGRADÁVEL!")
            tagBody.style.backgroundImage = "url('https://images.pexels.com/photos/9332668/pexels-photo-9332668.jpeg?auto=compress&w=1260&h=750&dpr=1')"
        }
        else if (temperatura > 10){
            tagSituacao.innerHTML = (cidade + " está no nível de temperatura FRIO!")
            tagBody.style.backgroundImage = "url('https://img.magnific.com/fotos-gratis/bela-foto-da-luz-do-sol-em-uma-floresta-em-um-dia-de-inverno_181624-39471.jpg?semt=ais_test_b&w=740&q=80')"
        }
        else if (temperatura < 10){
            tagSituacao.innerHTML = (cidade + " está no nível de temperatura MUITO FRIO!")
            tagBody.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-BFJJ-EcNYJM2aCJ6I7iw1pdjtpdoPNt8nmdmIyonfYr6RgD2LZAeAU&s=10')"
        }
}