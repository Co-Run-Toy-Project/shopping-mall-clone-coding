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
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
        name : 'Kelly semi-wide washed denim',
        price : 79000,
        stock : 3,
    },
    {
        id : 5,
        picture : 'http://nomelet.co.kr/web/product/medium/202205/ee923c447eade4d62ddaf7a832bc4176.jpg',
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


const render = el => {
    for (let i = 0; i < productData.length; i++){
        el.append(convertToData(productData[i]))
    }
}


const container = document.querySelector('.container');
// console.log(container)
render(container);