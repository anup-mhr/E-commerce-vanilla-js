const headerAuth = document.querySelector('.header-auth')

let users = JSON.parse(localStorage.getItem('users')) || []
let cart = JSON.parse(localStorage.getItem('cart')) || []

let totalQtyDOM = document.querySelector('#total-quantity')

let authUser = users.find(user => user.isAuth === true)
function renderHeader() {
    updateHeaderBtn()
    calculateTotalItems()
}

function updateHeaderBtn() {
    if (!authUser) return
    if (!authUser.isAuth) {
        headerAuth.innerHTML = `
            <li><a href="/pages/login.html" class="btn">Login</a></li>
            <li><a href="/pages/register.html" class="btn btn-fill">Register</a></li>
        `
    } else {
        headerAuth.innerHTML = `
        <p>Welcome, ${authUser.fullName}!</p>
        <li><a class="btn" onclick='logout()'>Logout</a></li>
    `
    }
}

function logout() {
    authUser.isAuth = false;
    localStorage.setItem('users', JSON.stringify(users))
    updateHeaderBtn()
    showToast(logoutSuccess)
}

function calculateTotalItems() {
    if (cart.length < 1) {
        totalQtyDOM.innerText = 0
        return
    }
    let totalQuantity = cart.map(item => item.quantity).reduce((x, y) => x + y)
    totalQtyDOM.innerText = totalQuantity;
}

// document.addEventListener('DOMContentLoaded',renderHeader())

renderHeader()

function toggleHamburger() {
    let headerMid = document.querySelector('.header-mid')
    headerMid.classList.toggle('show-menu')
}

function copyrightDate() {
    const footerDate = document.querySelector('#footer-date');
    footerDate.innerHTML = new Date().getFullYear()
}
copyrightDate()