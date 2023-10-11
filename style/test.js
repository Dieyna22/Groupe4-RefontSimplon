const burger = document.querySelector('.burger');
console.log(burger);

const dropMenuHidden = document.querySelector('.dropMenuHidden');
console.log(dropMenuHidden);

const close = document.querySelector('.close');
console.log(close);

burger.addEventListener('click', () => {
    // alert('bonjour');
    dropMenuHidden.style.left= '0';
})

close.addEventListener('click', () => {
    // alert('bonjour');
    dropMenuHidden.style.left= '-700px';
})