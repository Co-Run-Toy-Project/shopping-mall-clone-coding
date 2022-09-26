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

const nav = document.getElementById('src');
const content = document.getElementById('name');

let pageIndex = 0; // Page index initialized at 0
let itemsPerPage = 6;
loadItems();
function loadItems() {
    content.innerHTML = "";
    for (let i=pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {
        if (!items[i]) { break }
        const item = document.createElement('div');
        item.innerHTML = `
        <div>
            <img src="${items[i].src}"/>
        </div>
        <div>
            <span>${items[i].name}</span>
        </div>
        `;
        content.append(item);
    }
}
