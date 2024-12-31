function chuva(){
    let coracao = document.querySelector(".coracao")
    let e = document.createElement("div")
    e.classList.add("drop")
    coracao.appendChild(e)

    let left = Math.floor(Math.random()*300)
    let duracao = Math.random()*0.5

    e.style.left = left + 'px'
    e.style.animationDuration = 1 + duracao+'s'

    setTimeout(function(){
        coracao.removeChild(e)
    },1000)
}

setInterval(function(){
    chuva()
},170)//50