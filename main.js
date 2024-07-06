let buttons = document.querySelectorAll(".button")
let body = document.querySelector('body')

buttons.forEach((button) =>{
    button.addEventListener("click", (e) =>{
        console.log(e.target.id)
        if(e.target.id ==="red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="orange"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="yellow"){
            body.style.backgroundColor = e.target.id
        }
    })
})