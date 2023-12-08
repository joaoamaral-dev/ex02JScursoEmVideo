function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) >ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbmenino.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'kidboy.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'adultman.jpg')
            } else{
                img.setAttribute('src', 'oldman.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbmenina.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'kidgirl.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'adultwoman.jpg')
            } else{
                img.setAttribute('src', 'oldlady.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}