// let cart = JSON.parse(localStorage.getItem('cart')) || []

function addCartItem(e) {
    console.log('adding')
    let selectedItem = e.target;
    let selectedId = parseFloat(selectedItem.dataset.id)
    let search = cart.find(x => x.id === selectedId);
    if (search === undefined) {
        cart.push({
            id: selectedId,
            quantity: 1
        });
    }
    console.log(cart)
    cartStorage(cart)
    selectedItem.disabled = true
    selectedItem.innerHTML = 'Already in cart'
    calculateTotalItems()
}

function cartStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
