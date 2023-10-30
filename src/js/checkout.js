let totalBill = document.querySelector('#total-bill')

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

summaryCalculation()