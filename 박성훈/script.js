


const toggleBtn = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');
const topArea = document.querySelector('.top');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');


toggleBtn.addEventListener('click', () => {
    sideBar.classList.add('active');
    toggleBtn.classList.add('active');
})

topArea.addEventListener('click', ()=>{
    sideBar.classList.remove('active');
    toggleBtn.classList.remove('active');

})

content.addEventListener('click', ()=>{
    sideBar.classList.remove('active');
    toggleBtn.classList.remove('active');

})

footer.addEventListener('click', ()=>{
    sideBar.classList.remove('active');
    toggleBtn.classList.remove('active');

})


const communityBtn = document.querySelector('.community-title');
const hideCommunity = document.querySelector('.hide-community');

const optionCommunity = document.querySelector('.option-community');

communityBtn.addEventListener('mouseover', ()=>{
    console.log('hover')
    hideCommunity.classList.add('active');
})

optionCommunity.addEventListener('mouseleave', ()=>{
    hideCommunity.classList.remove('active');
})


