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

var btnSweet = document.querySelector('.btnSweet');
console.log(btnSweet);

btnSweet.addEventListener('click', (event) => {
    event.preventDefault();
    // alert('Hello')

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
    });
})