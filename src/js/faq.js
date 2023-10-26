function openFaq(e) {
    console.log(e.target)
    let selectedItem = e.target;
    if (selectedItem.nodeName == 'P') {
        selectedItem = selectedItem.parentElement;
    }
    let icon = selectedItem.querySelector('.icon')
    if (selectedItem.parentElement.classList.contains('open')) {
        icon.style.transform = 'rotate(0deg)'
    } else {
        icon.style.transform = 'rotate(45deg)'

    }
    selectedItem.parentElement.classList.toggle('open')
}