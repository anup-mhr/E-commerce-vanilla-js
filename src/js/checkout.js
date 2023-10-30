let totalBill = document.querySelector('#total-bill')
const popup = document.querySelector('.popup');
let mail = document.querySelector('#mail')
let phNo = document.querySelector('#ph-no')
let shippingAddress = document.querySelector('#s-address')

function summaryCalculation(){
    totalBill.innerHTML = cart.map(item=>{
        qty = item.quantity
        let search = products.find(x=> x.id===item.id)
        price = search.price
        discountPercentage = search.discountPercentage
        let discountedPrice = Math.floor(price - (price * discountPercentage) / 100)
        return qty * discountedPrice
    }).reduce((x,y)=>x+y)
}

function openPopup(e){
    e.preventDefault()
    if(mail.value ==='' || phNo.value==='' || shippingAddress.value===''){
        showToast(invalidInfo)
        return
    }
    popup.classList.add('open-popup')
}

function closePopup(){
    popup.classList.remove('open-popup')
    cart = []
    localStorage.setItem('cart',JSON.stringify(cart))
    window.location.replace('/')
}

summaryCalculation()