const loginBtn = document.querySelector('#login-btn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

loginBtn.addEventListener('click', e => {
    let users = JSON.parse(localStorage.getItem('users')) || []
    e.preventDefault()
    let checkUser = users.find(user => user.email === email.value && user.password === password.value)
    console.log(checkUser)
    if (!checkUser) {
        showToast(errorMsg)
        return;
    }
    checkUser.isAuth = true;
    localStorage.setItem('users', JSON.stringify(users))
    window.location.replace('/')
    showToast(loginSuccess)
})