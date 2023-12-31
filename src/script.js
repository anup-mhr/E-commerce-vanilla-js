let categoryDOM = document.querySelector('.product-categories')
let productDOM = document.querySelector('.product-container')

let categories = [
    "All",
    "Men's Fashion",
    "Women's Fashion",
    "Health & Beauty",
    "Groceries",
    "Home & Lifestyle",
    "Electronic Devices"]


// async function getProducts() {
//     let response = await fetch('data.json');
//     let data = await response.json()
//     productStorage(data)
//     console.log('fetching products')
//     return data;
// }

function productStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

function showProducts(products) {
    productDOM.innerHTML = products.map(item => {
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

function showCategories(target) {
    categoryDOM.innerHTML = categories.map(category => {
        return `<li ${category == target ? 'class="active"' : ''} data-category="${category}" onclick='showCategorizedProducts(event)'>${category}</li>`
    }).join('')
}

function showCategorizedProducts(e) {
    console.log(e.target.dataset)
    let selectedCategory = e.target.dataset.category
    if (selectedCategory === 'All') {
        showCategories('All')
        showProducts(products)
        return
    }
    let tempProducts = products.filter(item => item.category === selectedCategory.toLowerCase())
    showCategories(selectedCategory)
    showProducts(tempProducts)
}


showCategories('All')
showProducts(products)