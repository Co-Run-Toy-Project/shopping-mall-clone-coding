const navBar = document.querySelector('#nav_bar');
const background = document.querySelector('.overlay');
const menuToggleBtn = document.querySelector('.menu_toggle_btn');
const menu = document.querySelector('.menu_container');
const menuBackground = document.querySelector('.menu_overlay');
const itemContainer = document.querySelector('.item_container');
const shop = document.querySelector('.shop');
const mainContainer = document.querySelector('.main_container');
const pageShop = document.querySelector('#shop');

menuToggleBtn.addEventListener('click', () => {
  menu.classList.add('open');
  background.classList.add('show');
  menuBackground.classList.add('show');
  menuToggleBtn.classList.add('show');
})

background.addEventListener('click', () => {
  menu.classList.remove('open');
  background.classList.remove('show');
  menuBackground.classList.remove('show');
  menuToggleBtn.classList.remove('hide');
})

menuBackground.addEventListener('click', () => {
  menu.classList.remove('open');
  background.classList.remove('show');
  menuBackground.classList.remove('show');
  menuToggleBtn.classList.remove('hide');
})

// shop.addEventListener('click', () => {
//   mainContainer.classList.add('hide');
//   mainContainer.append(pageShop);
//   pageShop.classList.remove('hide');
// })

shop.addEventListener('click', () => {
  mainContainer.classList.add('hide');
  render(itemContainer);
  itemContainer.classList.add('show');
})

const converToProducts = (obj) => {  
  const li = document.createElement('li');
  li.classList.add('product');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img_container');

  const itemLink = document.createElement('a');
  itemLink.href = obj.url;
  imgContainer.append(itemLink);

  const itemImg = document.createElement('img');
  itemImg.classList.add('item_img');
  itemImg.src = obj.productImg;
  itemImg.alt = 'Img of' + obj.title;
  itemLink.append(itemImg);
  
  const itemInfo = document.createElement('div');
  itemInfo.classList.add('item_info');

  const title = document.createElement('a');
  title.classList.add('item_title');
  title.href = obj.url;
  title.textContent = obj.title;

  const price = document.createElement('span');
  price.classList.add('item_price');
  price.textContent = obj.price;
  itemInfo.append(title, price);

  li.append(imgContainer,itemInfo);
  return li;
}

const render = (el) => {
  for(let i = 0; i < products.length; i++){
    el.append(converToProducts(products[i]));
  }

  return; 
}

