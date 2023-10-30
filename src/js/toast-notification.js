let toastBox = document.querySelector('#toastBox')
let loginSuccess = '<i class="bi bi-check-circle"></i>Successfully Logged In';
let logoutSuccess = '<i class="bi bi-check-circle"></i>Successfully Logged Out';
let addProduct = '<i class="bi bi-cart-plus"></i>Added to cart'
let removeProduct = '<i class="bi bi-cart-x"></i>Successfully Removed'
let errorMsg = '<i class="bi bi-exclamation-circle"></i>Invalid Password or Email';
let pleaseLogin = '<i class="bi bi-exclamation-circle"></i>Please Login to Continue';
let invalidInfo = '<i class="bi bi-exclamation-circle"></i>Invalid Info';
let cartEmpty = '<i class="bi bi-cart-x"></i>Cart is Empty'


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.prepend(toast);    //append child before 1st node

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('error');
    }
    if (msg.includes('Removed')) {
        toast.classList.add('error');
    }
    if (msg.includes('Please')) {
        toast.classList.add('invalid');
    }
    if (msg.includes('Empty')) {
        toast.classList.add('error');
    }

    setTimeout(()=>{
        toast.remove();
    }, 5000)
}