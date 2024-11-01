const buttons = document.querySelectorAll('.buttons')
const body =  document.querySelector('body')

buttons.forEach( (btn) => {
    btn.style.backgroundColor = btn.id
})


buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
            body.style.backgroundColor = e.target.id
    })    
});