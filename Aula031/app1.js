const mudarCor = () =>{
    const paragrafo = document.getElementById('paragrafo1')
    paragrafo.classList.add('verde')
    paragrafo.classList.remove('verde')
    const classeExiste = paragrafo.classList.contains('verde')
    console.log(classeExiste)
}