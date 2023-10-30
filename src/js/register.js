const registerBtn = document.querySelector('#register-btn');
const email = document.querySelector('#email');
const fullName = document.querySelector('#name');
const password = document.querySelector('#password');
const permanentAddress = document.querySelector('#permanentAddress');
const phone = document.querySelector('#phone');
const dob = document.querySelector('#dob');
const confirmPassword = document.querySelector('#confirmPassword');
const tempAddress = document.querySelector('#tempAddress');

// let users = JSON.parse(localStorage.getItem('users')) || [];

registerBtn.addEventListener('click', e => {
    e.preventDefault()
    addUser()
})

function addUser() {
    let user = {
        email: email.value,
        fullName: fullName.value,
        password: password.value,
        phone: phone.value,
        dob: dob.value,
        password: confirmPassword.value,
        tempAddress: tempAddress.value,
        permanentAddress: permanentAddress.value,
        isAuth: false
    }
    for (el in user) {
        if (user[el] === '') {
            showToast(invalidInfo)
            return
        }
    }
    users = [...users, user]
    usersStorage(users)
    resetForm()
    window.location.replace('/pages/login.html');
}

function resetForm() {
    email.value = '';
    fullName.value = '';
    password.value = '';
    permanentAddress.value = '';
    phone.value = '';
    dob.value = '';
    confirmPassword.value = '';
    tempAddress.value = '';
}

function usersStorage() {
    localStorage.setItem('users', JSON.stringify(users))
}