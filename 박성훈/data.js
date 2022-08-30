const productData = [
    {
        id : 1,
        picture : 'http://nomelet.co.kr/web/product/big/202208/625c70a4235b84080872198ac12ed114.jpg',
        name : 'Perry KUWAMURA check shirt',
        price : 135000,
        stock : 0,
    },
    {
        id : 2,
        picture : 'http://nomelet.co.kr/web/product/big/202208/fba5e33098405a405d8d12bcf266b8e6.jpg',
        name : 'Brest wool over coat (charcoal brown)',
        price : '9월중 출시 예정',
        stock : 0,
    },
    {
        id : 3,
        picture : 'http://nomelet.co.kr/web/product/medium/202208/7410f395bb7c5c624d2720029c78d8b6.jpg',
        name : 'Finn boy 80s blue denim by CALIK (from Turkey)',
        price : 95000,
        stock : 50,
    },
    {
        id : 4,
        picture : 'http://nomelet.co.kr/web/product/medium/202208/9ffdd8dd179a4bc6c73e2838fc2569fd.jpg',
        name : 'Finn boy black denim by ORTA (from Turkey)',
        price : 62000,
        stock : 0,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 6,
        picture : 'http://nomelet.co.kr/web/product/medium/202208/ddb6c1e0df16ebd3c73ed5f1e0ea1fac.jpg',
        name : 'Brest wool over coat (herringbone gray)',
        price : '9월중 출시 예정',
        stock : 0,
    },
    {
        id : 7,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/d102995802246e5a8ee27e210477a843.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 8,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/73c9e09eba92c44d6bcdd4e2cb03bf14.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 9,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/3e13afdf962614f000d13f258880e317.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 10,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/075f9fc67250ad47cb8ba79e6a39d878.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 11,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/d5eaec914bb4fe2ecb49f01388e5f38b.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 12,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/86c63523af99636d22e88b579db3db67.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 13,
        picture : 'http://nomelet.co.kr/web/product/medium/202202/02751985d63ff7bb7e65246df1ceb768.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 14,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/f6c6fb1b3342861189981991018aba72.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 15,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/a88a58abf37af48be70650a487159a8e.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 16,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/75d21072eaca37ac0b3fe65b24e32f03.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 17,
        picture : 'http://nomelet.co.kr/web/product/medium/202206/cfdcc3e1e11f7fb0bced5d503888e360.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 18,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/eb8237b38227965b01d28aae06096e69.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 19,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/5cf7a4652cadd13e6253f556135a95fa.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 20,
        picture : 'http://nomelet.co.kr/web/product/medium/202203/12a8f82c698194a87c6e9e572c487ab6.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 21,
        picture : 'http://nomelet.co.kr/web/product/medium/202204/dac0250b138607a5e4387a68099a724d.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 22,
        picture : 'http://nomelet.co.kr/web/product/medium/202202/04a28c14fbedfa56bbdab0c959a44bb2.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 23,
        picture : 'http://nomelet.co.kr/web/product/medium/202204/e956570168a677dc79d44265546c3ae0.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 24,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/00590da6948ae353214c9d06c5f285f0.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 25,
        picture : 'http://nomelet.co.kr/web/product/medium/202202/d07d8a96975ccb57fd6368c33e690f92.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 26,
        picture : 'http://nomelet.co.kr/web/product/medium/202204/5322aa0b7fa61120b524d0c98c24ebc8.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 27,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/b0c5e3cc06dd64b38cdb27bfa258afac.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    
]

// console.log(productData[0])

// console.log(productData)


const convertToData = (obj) => {
    // const container = document.createElement('div');
    // container.className = 'container';

    const itemBox = document.createElement('div');
    itemBox.className = 'item-box';

    const productImg = document.createElement('div');
    productImg.className = 'product-image';

    const img = document.createElement('img');
    img.setAttribute('src', obj.picture);
    img.setAttribute('alt', "")

    const productText = document.createElement('div');
    productText.className = 'product-text'

    const productTitle = document.createElement('div');
    productTitle.className = 'product-title';
    productTitle.textContent = obj.name;

    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';
    productPrice.textContent = obj.price;

    const notice = document.createElement('div');
    notice.className = 'notice';
    notice.textContent = "Sorry, it's out of stock"


    productImg.append(img);

    productText.append(productTitle);
    productText.append(productPrice);

    itemBox.append(productImg);

    if (obj.stock === 0){
        itemBox.append(notice);
    }

    itemBox.append(productText);

    console.log(itemBox)

    return itemBox;



    // container.append(itemBox);
}





if (productData.length > 9){
    for (let i = 1; i < Math.ceil(productData.length / 9); i++){
        const pagesArea = document.createElement('span');
        pagesArea.classList.add('page');
        const pages = document.createElement('a');
        pages.setAttribute('href', '#');
    
        pages.textContent = i + 1;

        pagesArea.append(pages);


        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.append(pagesArea);
    }    
}

const selectPage = document.querySelectorAll('.page');
let currentData = productData.slice(0,9);


const render = el => {
    for (let i = 0; i < currentData.length; i++){
        el.append(convertToData(currentData[i]))
    }
}

const container = document.querySelector('.container');
render(container);


for (let i = 0; i < selectPage.length; i++){
    selectPage[i].addEventListener('click', ()=>{

        currentData = productData.slice(i * 9, i * 9 + 9)

        let removeClass = document.querySelectorAll('.item-box')

        removeClass.forEach(el => container.removeChild(el));

        render(container);
    })

}