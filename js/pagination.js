const items = [
    {
        src: "../img/product1.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product2.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product3.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product4.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product5.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product6.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product7.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product8.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product9.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product10.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product11.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    },
    {
        src: "../img/product12.jpg",
        name: "Essential Supima U neck t-shirt",
        price: "37,000",
        color: "#423737"
    }


];
const infocontainer = document.getElementById('product__container');
const nav = document.getElementById('src');
const content = document.getElementById('product__name');
const price = document.getElementById('product__price');
const color = document.getElementById('product__color');

let pageIndex = 0; // Page index initialized at 0
let itemsPerPage = 6;
loadItems();
function loadItems() {
    content.innerHTML = "";
    // 페이지 index와 item개수만큼 곱한 것만큼 데이터 순회함.
    // 왜 다 name에 들어가지? content.append 해서
    for (let i=pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {
        if (!items[i]) { break }
        const item = document.createElement('div');
        item.innerHTML = `
        <div class="product__box">
        <img class="product__image" src="${items[i].src}"/>
        <div class="product__info">
            <div>${items[i].name}</div>
            <div>${items[i].price}</div>
            <div>${items[i].color}</div>
        </div>
        </div>
        
        `;
        infocontainer.append(item);
    }
}
