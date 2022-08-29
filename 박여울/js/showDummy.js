// class dummyData {
//     async getdummyData(){
//     try {
//      let result = await fetch("dummyData.json");
//      let data = await result.json();
 
//      let dummyData = data.items;
//      dummyData = dummyData.map(item =>{
//          const {title,price} = item.fields;
//          const {id} = item.id;
//          const image = item.fields.image.fields.file.url;
//          return {title,price,id,image};
//      })
//      return dummyData;
//     } catch (error) {
//         console.log(error);
//      }
//    }
//  }

function loadItems() {
    return fetch("dummyData.json")
      .then((response) => response.json()) //json으로 변환
      .then((json) => json.items); //json 안의 items를 return
  }
  
  // 받아온 아이템들로 리스트를 업데이트
  function displayItems(items) {
    const container = document.querySelector(".shop-contents");
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
    //join -> 문자열의 배열을 하나의 문자열로 병합
  }
  
  // 받아온 아이템들로 HTML 리스트 만들기
  function createHTMLString(item) {
    return `
      <li class="item">
          <img src="${item.img}" alt="${item.category}" class="item__thumbnail" />
          <span class="item__description">${item.item_name}, ${item.price}</span>
      </li>
      `;
  }
  
  function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
  
    if (key == null || value == null) {
      //정보가 들어있지 않다면 함수를 끝냄
      return;
    }
  
    const filtered = items.filter((item) => item[key] === value);
    displayItems(filtered);
    // 아이템이라는 오브젝트 안에 키에 해당하는 값이 value 와 똑같은 것들만 함수로 전달
  }
  
//   function setEventListeners(items) {
//     const logo = document.querySelector(".logo");
//     const buttons = document.querySelector(".buttons");
//     //버튼들이 들어있는 컨테이너에 이벤트 리스너를 등록해 한곳에서만 핸들링 할 수 있게함
//     logo.addEventListener("click", () => displayItems(items));
//     buttons.addEventListener("click", (event) => onButtonClick(event, items));
//   }
  
  loadItems() //아이템을 적절히 받아와서 프로미스가 값을 성공적으로
    //전달해주면 전달 받은 아이템들을 이용해 함수들을 실행.
    .then((items) => {
      displayItems(items);
      setEventListeners(items);
    })
    .catch(console.log);