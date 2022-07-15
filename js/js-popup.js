// const btns = document.querySelectorAll('.popup-slide'),
//     slideImg = document.querySelectorAll('.swiper-slide img'),
//     popup = document.querySelector('.popup-overlay'),
//     btnСlose = document.querySelector('.btn-close');

// btns.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         console.log(e.target);

//         popup.classList.add('active');


//     })
// });
// popup.addEventListener('click', (e) => {

//     if (e.target == popup) {
//         popup.classList.remove('active');
//     }
// })

// btnСlose.addEventListener('click', (e) => {
//     popup.classList.remove('active');
// });
// слайдер попап


const popupSlide = document.querySelectorAll('.popup-slide img'),
    popupModal = document.querySelector('.popup-modal'),
    popupOverlay = document.querySelector('.popup-overlay'),

    imgActive = document.querySelector('.img-active'),
    btnСlose = document.querySelector('.btn-close');



popupSlide.forEach(element => element.addEventListener('click', dissplayImage));
// popupSlide.forEach(img => img.addEventListener('click', dissplayImage));

function dissplayImage(e) {

    let cloneSlide = e.target;
    imgActive.src = e.target.src;

    popupModal.style.display = 'block';
    popupOverlay.classList.add('active');
};
popupOverlay.addEventListener('click', (e) => {

    if (e.target == popupOverlay) {
        popupOverlay.classList.remove('active');
        popupModal.style.display = 'none';
    }
});
btnСlose.addEventListener('click', (e) => {
    popupOverlay.classList.remove('active');
    popupModal.style.display = 'none';
});

const popupButtonNext = document.querySelector('.popup-button-next');



imgActive.addEventListener('click', () => {

    for (let i = 0; i < popupSlide.length; i++) {

        if (imgActive.src === popupSlide[i].src) {
            let nextSlideLet = popupSlide[i].nextSibling;
            console.log(nextSlideLet);

        }
    }

});


// let parent = document.getElementById('parent');
// let elem = parent.querySelector('.elem');

// let clone = elem.cloneNode(true);