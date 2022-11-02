function carregar (){
    var mensagem = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    var hora = 22
  
    mensagem.innerHTML = `Agora são <strong> ${hora} horas</strong>.`


    if (hora >= 0 && hora < 12) {
    //Buenos días
    foto.src = "./fotos/imgmanha.jpg"
    document.body.style.background = '#66d9ff'
    mensagem.innerHTML += 'O Sol iluminará um <strong>bom dia!</strong>'
    } else if (hora >= 12 && hora <=18) {
    //Buenas tardes
    foto.src = "./fotos/imgtarde.jpg"
    document.body.style.background = '#ffb366'
    mensagem.innerHTML += ' Uma <strong>boa tarde</strong> lhe aguarda!'
    } else {
    // Buenas noches
    foto.src = "./fotos/imgnoite.jpg"
    document.body.style.background = '#001133'
    mensagem.innerHTML += 'Que as estrelas lhe concedam uma <strong>boa noite!</strong>'
    }
}