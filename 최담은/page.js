//총 페이지 수 = Math.ceil(전체 개수/ 한 페이지에 나타낼 데이터 수);
// 화면에 보여질 페이지 그룹 = Math.ceil(현재 페이지/ 한 화면에 나타낼 페이지 수);

// 화면에 그려질 첫 번째 페이지 : 화면에 그려질 마지막 페이지 - (한 화면에 나타낼 페이지 - 1)
// 	(단, 계산된 값이 0 이하이면 첫번째 페이지는 1이다.)

// 화면에 그려질 마지막 페이지 : 화면에 보여질 페이지 그룹 * 한 화면에 나타낼 페이지
// 	(단, 계산된 값이 총 페이지수보다 많으면 마지막 페이지는 은 총 페이지 수이다.)

//https://nohack.tistory.com/125
//참고 

const contents = document.querySelector(".contents");
const buttons = document.querySelector(".buttons");


const numOfContent = clothes.length;

const maxButton = 5;
let maxContent = 6;
const maxPage = Math.ceil(numOfContent / maxContent);
let page = 1;

// 글 목록 & 버튼 생성 함수 구현
const root = document.getElementById('body');


const makeContent = (obj) => {
    const content = document.createElement('li');
    content.classList.add("content");
    let itemPicture = document.createElement('img');
    itemPicture.classList.add("shop_image")
    let itemName = document.createElement('div');
    itemName.textContent = obj.name;

    // if(obj.cost === 'none'){
    //     itemCost.textContent = obj.season;
    // }else{
    //     itemCost.textContent = obj.cost;
    // }
    itemPicture.className = 'object__image'
    itemPicture.setAttribute('src',obj.img)
    content.append(itemPicture, itemName)
    return content;
}


// function createTreeView(clothes, currentNode) {
//     for(let n of clothes){
//         let itemList = document.createElement('li');
//         itemList.classList.add("content");
//         let itemPicture = document.createElement('img');
//         let itemName = document.createElement('div');
//         itemName.textContent = n.name;
//         let itemCost = document.createElement('div');
//         if(n.cost === 'none'){
//             itemCost.textContent = n.season;
//         }else{
//             itemCost.textContent = n.cost;
//         }
//         itemPicture.className = 'object__image'
//         itemPicture.setAttribute('src',n.img)
//         itemList.append(itemPicture, itemName, itemCost)
//         currentNode.append(itemList)
//     }
// }

// createTreeView(clothes, root);


const makeButton = (id) => {
const button = document.createElement("button");
button.classList.add("button");
button.dataset.num = id;
button.innerText = id;
button.addEventListener("click" , (e) => {
    Array.prototype.forEach.call(buttons.children, (button) => {
        if(button.dataset.num) button.classList.remove("active");
    });
    e.target.classList.add("active");
    renderContent(parseInt(e.target.dataset.num));
})
return button
}

//dataset 
//https://jongdai.tistory.com/48
// 페이지 이동 구현 함수

const goPrevPage = () => {
page -= maxButton;
render(page);
};

const goNextPage = () => {
page += maxButton;
render(page);
};

const prev = document.createElement("button");
prev.classList.add("button", "prev");
prev.innerHTML = '<ion-icon name="chevron-back-outline"></ion-icon>';
prev.addEventListener("click", goPrevPage);

const next = document.createElement("button");
next.classList.add("button", "next");
next.innerHTML = '<ion-icon name="chevron-forward-outline"></ion-icon>';
next.addEventListener("click", goNextPage);


// 렌더링 함수 구현
const renderContent = (page) => {
// 목록 리스트 초기화
while (contents.hasChildNodes()) {
    //Node.hasChildNodes() 메소드는 현재 노드(Node)에게 
    //자식노드(child nodes (en-US))가 있는지를 Boolean 값으로 반환합니다.
    contents.removeChild(contents.lastChild);
}
// 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
for (let id = (page - 1) * maxContent + 1; id <= page * maxContent && id <= numOfContent; id++) {
    // for(let n of clothes){
    //     contents.appendChild(makeContent(n.id));
    //     console.log(makeContent(n.id));
    // }
        contents.appendChild(makeContent(clothes[id-1]))
    }   
};

const renderButton = (page) => {
// 버튼 리스트 초기화
while (buttons.hasChildNodes()) {
    buttons.removeChild(buttons.lastChild);
}
// 화면에 최대 5개의 페이지 버튼 생성
for (let id = page; id < page + maxButton && id <= maxPage; id++) {
    buttons.appendChild(makeButton(id));
}
// 첫 버튼 활성화(class="active")
buttons.children[0].classList.add("active");

buttons.prepend(prev);
buttons.append(next);

// 이전, 다음 페이지 버튼이 필요한지 체크
if (page - maxButton < 1) buttons.removeChild(prev);
if (page + maxButton > maxPage) buttons.removeChild(next);
};

const render = (page) => {
renderContent(page);
renderButton(page);
};
render(page);



