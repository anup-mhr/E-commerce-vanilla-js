const loginBtn = document.querySelector('#login-btn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let users = JSON.parse(localStorage.getItem('users')) || []

loginBtn.addEventListener('click',e=>{
    e.preventDefault()
    let checkUser = users.find(user=> user.email===email.value && user.password===password.value)
    console.log(checkUser) 
    if(!checkUser){
        alert('Invalid password or email')
        return;
    }
    checkUser.isAuth = true;
    localStorage.setItem('users', JSON.stringify(users))
    window.location.replace('/')
})