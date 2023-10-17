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


let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progress');
    let scrolProgressValue = document.getElementById('progressValue');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if (pos > 10) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })

    scrollProgress.style.background = `conic-gradient( #C30033 ${scrollValue}%, white ${scrollValue}%)`;
}
    // Ajouter un seul gestionnaire d'événements
    window.addEventListener('scroll', () => {
        // navBarFixed();
        calcScrollValue();
    });

    // Exécutez les fonctions une fois au chargement de la page
    window.addEventListener('load', () => {
        // navBarFixed();
        calcScrollValue();
    });
    
    let menuTogler = document.querySelector('.menuTogler');
    let menuToglerIcon = document.querySelector('.menuTogler i');
    let dropDownMenu = document.querySelector('.dropDownMenu');

    // menuTogler.onclick = function () {
    //     dropDownMenu.classList.toggle('open');
    //     let isOpen = dropDownMenu.classList.contains('open');

    //     menuToglerIcon.classList = isOpen ? 'bi bi-x ' : 'bi bi-list ';
    // }








// Sweet alert
var formulaire = document.querySelector('form');
console.log(formulaire);
const email = document.getElementById('Email');
console.log(email);

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.value === ''){
        // alert('Please enter email address');
        Swal.fire({
            icon: "error",
            title: "Oh non",
            text: "Renseigner votre addresse email SVP...",
        });
    }else if(!email.value.match(regexEmail)) {
        // alert('Please enter a valid email');
        Swal.fire({
            icon: "error",
            title: "Attention",
            text: "Vérifier votre addresse email SVP...",
        });
    }else{
        // alert('email already');
        Swal.fire({
            icon: "success",
            title: "Bien, Bravo",
            text: "Vous etes abonné à notre newsletter",
        });
    }
})