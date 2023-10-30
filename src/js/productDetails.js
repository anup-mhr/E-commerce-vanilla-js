const selectedId = parseFloat(new URL(document.location).searchParams.get('id'));
const product = document.querySelector('.product-details')
let products = JSON.parse(localStorage.getItem('products')) || []

function showProductDetails() {
    let selectedProduct = products.find(item => item.id === selectedId)
    let { id, title, description, price, discountPercentage, rating, thumbnail, images } = selectedProduct
    let itemRating = ''
    for (let i = 0; i < Math.round(rating); i++) itemRating += '⭐';
    let search = cart.find(x => x.id === id);
    let discountedPrice = price - (price * discountPercentage) / 100
    product.innerHTML = `
    <div class="product-gallery">
            <img src="${images[0]}" alt="" id="productImg">
            <div class="controls">
                ${images.map((x, i) => {
        return `<span class="control-btn ${i === 0 ? 'active' : ''}"></span>`
    }).join('')}
            </div>
        </div>

        <div class="product-info more-detailed">
            <h1>${title}</h1>
            <div class="stars">${itemRating}</div>
            <h3>$ ${discountedPrice.toFixed(2)}</h3>
            <p><span>$ ${price}</span> -${discountPercentage}%</p>
            <div class="desc-container">
                <h4>Product Description</h4>
                <p class="pro-description">${description}</p>
            </div>
            <form action="">
                <div class="color-select">
                    <p>Color</p>
                    <label for="red">
                        <input type="radio" name="color" id="red">
                        <span class="color-1"></span>
                    </label>
                    <label for="green">
                        <input type="radio" name="color" id="green">
                        <span class="color-2"></span>
                    </label>
                    <label for="blue">
                        <input type="radio" name="color" id="blue">
                        <span class="color-3"></span>
                    </label>
                    <label for="pink">
                        <input type="radio" name="color" id="pink">
                        <span class="color-4"></span>
                    </label>
                </div>
                <div class="quantity-select">
                    <p>Quantity</p>
                    <input type="number" id='pro-quantity' value="1">
                </div>

                <div class="button-choice">
                    <button class="btn">Buy</button>
                    <button class="btn btn-fill" ${search? 'disabled':''} data-id='${id}' onclick='addCartItem(event)'> ${search? 'Already in cart':'Add to Cart <i class="bi bi-cart3"></i>'}</button>
                </div>
            </form>
            <a href="/"><i class="bi bi-chevron-double-left"></i> continue shopping</a>
        </div>`
}

function selectImage() {
    let product = products.find(product => product.id === selectedId)
    let productImg = document.querySelector('#productImg')
    const controlBtn = document.querySelectorAll('.control-btn')

    for (let i = 0; i < controlBtn.length; i++) {
        controlBtn[i].addEventListener('click', () => {
            for (btn of controlBtn) {
                btn.classList.remove('active')
            }
            controlBtn[i].classList.add('active')
            productImg.src = product.images[i]
        })
    }

}

let suggestProductDOM = document.querySelector('.product-suggestion .product-container')
console.log(suggestProductDOM)

function showSimilarProducts(){
    let search = products.find(item=>item.id === selectedId)
    let suggestProduct = products.filter(item=> item.subCategory===search.subCategory)
    suggestProduct = suggestProduct.filter(item=> item.id !== selectedId)
    suggestProductDOM.innerHTML = suggestProduct.map(item=>{
        let { id, title, price, discountPercentage, rating, thumbnail } = item
        let itemRating = ''
        for (let i = 0; i < Math.round(rating); i++) itemRating += '⭐';
        let search = cart.find(x => x.id === id);
        let discountedPrice = price - (price * discountPercentage) / 100
        return `<div class="product">
        <img src="${thumbnail}" alt="${title}" class="product-img">
        <div class="product-info">
            <a href='/pages/productDetails.html?id=${id}'><h4>${title}</h4></a>
            <h3>$ ${discountedPrice.toFixed(2)}</h3>
            <p><span>$ ${price}</span> -${discountPercentage}%</p>
            <div class="stars">${itemRating}</div >
            <button class="btn btn-fill" ${search? 'disabled':''} data-id='${id}' onclick='addCartItem(event)'> ${search? 'Already in cart':'Add to Cart <i class="bi bi-cart3"></i>'}</button>
        </div >
    </div > `
    }).join('')
}

showProductDetails()
selectImage()
showSimilarProducts()