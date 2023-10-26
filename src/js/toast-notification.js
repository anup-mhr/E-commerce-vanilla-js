let toastBox = document.querySelector('#toastBox')
let successMsg = '<i class="bi bi-check-circle"></i>Successfully submitted';
let errorMsg = '<i class="bi bi-bug"></i>Please fix the error!';
let invalidMsg = '<i class="bi bi-exclamation-circle"></i>Invalid input, check again';


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.prepend(toast);    //append child before 1st node

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    }, 5000)
}