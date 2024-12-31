
let p = document.querySelector(".p")
let a =  document.querySelector('.triangulo')
let msg = document.querySelector('.imagem')
let quadrado = document.querySelector(".quadrado")
let click = document.querySelector(".click")

p.addEventListener("click", ()=>{
    click.style.display="none"
    msg.classList.remove("reverse-msg")
    quadrado.classList.remove("reverse-quadrado")
    a.classList.remove("reverse-animacao")

    a.classList.add("animacao")
    msg.classList.add("anima-msg")
    quadrado.classList.add("anima-quadrado")
})


msg.addEventListener("click",()=>{
    msg.classList.add("reverse-msg")
    quadrado.classList.add("reverse-quadrado")
    a.classList.add("reverse-animacao")

    a.classList.remove("animacao")
    msg.classList.remove("anima-msg")
    quadrado.classList.remove("anima-quadrado")
    setTimeout(() => {
        click.style.display = "block";
    }, 4000); // 3000 milissegundos = 3 segundos
})