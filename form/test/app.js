// 下の行は編集しないでください！
const form = document.querySelector('form');

// この下にコードを書いてください
form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const product = form.elements.product
    const qty = form.elements.qty
    
    const newListElement = document.createElement('li')
    const List = document.getElementById('list')
    List.appendChild(newListElement)
    newListElement.textContent = `${product.value}, ${qty.value}`
    //newList.appendChild(`${product.value}, ${qty.value}`)
    
    product.value = ''
    qty.value = ''
})