const togleBtn = document.querySelector('.toggle-side-bar');
const menuBox = document.querySelector('.side-bar');


togleBtn.addEventListener('click', () => {
    menuBox.classList.toggle(active);
})

// 수정중