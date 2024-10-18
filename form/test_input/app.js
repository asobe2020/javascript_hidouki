const h1 = document.querySelector('h1')
const input = document.querySelector('input')

input.addEventListener('input', function(){
    h1.innerText = `Welcome, ${input.value}`
    if(input.value === ''){
        h1.innerText = 'Enter Your Username'
    }
})