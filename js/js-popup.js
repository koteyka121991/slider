const btns = document.querySelectorAll('.popup-slide'),
    popup = document.querySelector('.popup-overlay'),
    btnСlose = document.querySelector('.btn-close');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        console.log(e.target);
        e.target == popup;
        popup.classList.add('active');
        document.querySelector("body").appendChild(clonedNode);

    })
});
popup.addEventListener('click', (e) => {

    if (e.target == popup) {
        popup.classList.remove('active');
    }
})

btnСlose.addEventListener('click', (e) => {
    popup.classList.remove('active');
});
// слайдер попап