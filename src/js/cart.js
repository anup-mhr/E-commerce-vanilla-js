const cartDOM = document.querySelector('.cart-inner')
const summaryTotal = document.querySelector('#summaryTotal')
const summaryContainer = document.querySelector('#summaryContainer')
const discount = document.querySelector('#discount')
const checkoutBtn = document.querySelector('#checkoutBtn')

function addCartItem(e) {
    e.preventDefault()
    console.log('adding')
    let selectedItem = e.target;
    let selectedId = parseFloat(selectedItem.dataset.id)
    let search = cart.find(x => x.id === selectedId);
    let quantity = parseFloat(document.querySelector('#pro-quantity')?.value || 1)
    if(quantity<1){
        showToast(invalidInfo)
        return
    }
    if (search === undefined) {
        cart.push({
            id: selectedId,
            quantity: quantity
        });
    }
    console.log(cart)
    cartStorage(cart)
    showToast(addProduct)
    selectedItem.disabled = true
    selectedItem.innerHTML = 'Already in cart'
    calculateTotalItems()
}

function cartStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function generateCart() {
    if(cart.length<1){
        cartDOM.innerHTML = '<p><i class="bi bi-cart-x"></i>Cart is Empty</p>'
        return
    }
    cartDOM.innerHTML = cart.map(item => {
        let search = products.find(x => x.id === item.id);
        let { id, title, price, discountPercentage } = search
        let discountedPrice = Math.floor(price - (price * discountPercentage) / 100)

        return `<ul data-id='${id}'>
        <li>${title}</li>
        <li>$ ${discountedPrice}</li>
        <li><i onclick='decrement(${id})' class="bi bi-chevron-down"></i>${item.quantity}<i onclick="increment(${id})" class="bi bi-chevron-up"></i></li>
        <li>$ ${item.quantity * discountedPrice}</li>
        <li><button class="btn" onclick='removeCart(${id})'>remove</button></li>
    </ul>`
    }).join('')
}

function removeCart(id) {
    let selectedItem = document.querySelector(`[data-id='${id}']`)
    cart = cart.filter(item => item.id !== id)
    cartStorage(cart)
    selectedItem.remove()
    showToast(removeProduct)
    summaryCalculation()
    calculateTotalItems()
}

function increment(id) {
    let search = cart.find((x) => x.id === id)
    if (search) search.quantity += 1;
    cartStorage(cart);
    calculateTotalItems()
    generateCart()
    summaryCalculation()
    showToast(addProduct)
}

function decrement(id) {
    let search = cart.find((x) => x.id === id)
    if (search === undefined) return
    if (search.quantity === 0) return
    else {
        search.quantity -= 1;
    }
    cart = cart.filter(x => x.quantity !== 0)
    cartStorage(cart);
    generateCart()
    calculateTotalItems()
    summaryCalculation()
    showToast(removeProduct)
}

function summaryCalculation() {
    if(cart.length<1) return
    let totalPrice = 0
    let discountPercentage = ''
    let discountedPrice = cart.map(item => {
        let qty = item.quantity
        let search = products.find(x => x.id === item.id)   
        let price = search.price
        totalPrice += qty * price
        discountPercentage = search.discountPercentage
        let discountedPrice = Math.floor(price - (price * discountPercentage) / 100)
        return qty * discountedPrice
    }).reduce((x, y) => x + y)
    summaryTotal.innerHTML = discountedPrice
    summaryContainer.innerHTML = totalPrice
    discount.innerHTML = Math.floor(totalPrice * discountPercentage / 100)
}

checkoutBtn?.addEventListener('click', () => {
    if(cart.length<1){
        showToast(cartEmpty)
        return
    }
    let users = JSON.parse(localStorage.getItem('users')) || []
    if (!users) {
        showToast(pleaseLogin)
        return
    }
    let isAuth = users.find(user=> user.isAuth===true);
    if(!isAuth){
        showToast(pleaseLogin)
        return
    }
    window.location.replace('/pages/checkout.html')
})

generateCart()
summaryCalculation()