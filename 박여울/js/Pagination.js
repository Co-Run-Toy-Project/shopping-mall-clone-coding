// function paging(totalData, currentPage) {
//     const dataPerPage = 9; // 한 페이지에 보여줄 아이템 갯수
//     const pageCount = 4; // 버튼갯수
//     totalData = dummyData.length; // 총 데이터 갯수
//     currentPage = 1; // 현재페이지

//     console.log(totalData)
//     console.log("currentPage : " + currentPage);
//     console.log("totalData : " + totalData);

//     const totalPage = Math.ceil(totalData / dataPerPage);    // 총 페이지 수
//     const pageGroup = Math.ceil(currentPage / pageCount);    // 페이지 그룹

//     console.log("pageGroup : " + pageGroup);
//     console.log("totalPage : " + totalPage);

//     let last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
//     if (last > totalPage)
//         last = totalPage;
//     let first = last - (pageCount - 1);    // 화면에 보여질 첫번째 페이지 번호
//     const next = last + 1;
//     const prev = first - 1;

//     console.log("last : " + last);
//     console.log("first : " + first);
//     console.log("next : " + next);
//     console.log("prev : " + prev);

//     if (totalPage < 1) {
//         first = last;
//     }
    
//     const pages = document.querySelector("#pages");
    
//     if (first > 4) {
//         pages.append(`<li class="pagination-item">` +
//             `<a onclick="GetTarget(` + (prev) + `); style='margin-left: 2px'>prev</a></li>`);
//     }
//     for (let j = first; j <= last; j++) {
//         if (currentPage === (j)) {
//             pages.append(`<li class="pagination-item">` +
//                 `<a class='active' onclick="GetTarget(` + (j) + `);" style='margin-left: 2px'>` + (j) + `</a></li>`);
//         } else if (j > 0 ) {
//             pages.append(`<li class="pagination-item">` +
//                 `<a onclick="GetTarget(` + (j) + `);" style='margin-left: 2px'>` + (j) + `</a></li>`);
//         }
//     }
//     if (next > 4 && next < totalPage) {
//         pages.append(`<li class="pagination-item">` +
//             `<a onclick="GetTarget(` + (next) + `);" style='margin-left: 2px'>next</a></li>`);
//     }
// }

// paging()


let totalData ; //총 데이터 
let dataPerPage = 9; //한 페이지에 나타낼 글 수
let pageCount = 4; //페이징에 나타낼 페이지 수
let globalCurrentPage=1; //현재 페이지


$(document).ready(function () {
    //dataPerPage 선택값 가져오기
    dataPerPage = $("#dataPerPage").val();
    
 totalData = dummyData.length;
 
 //글 목록 표시 호출 (테이블 생성)
 displayData(1, dataPerPage);
 
 //페이징 표시 호출
 paging(totalData, dataPerPage, pageCount, 1);
});



function paging(totalData, dataPerPage, pageCount, currentPage) {
    
    console.log("currentPage : " + currentPage);
    
    totalPage = Math.ceil(totalData / dataPerPage); //총 페이지 수
  
    if(totalPage<pageCount){
        pageCount=totalPage;
  }
  
  let pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
  let last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
  
  if (last > totalPage) {
      last = totalPage;
    }
    
    let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;
  
  let pageHtml = "";
  
  if (prev > 0) {
    pageHtml += "<li><a href='#' id='prev'> 이전 </a></li>";
  }

  //페이징 번호 표시 
  for (var i = first; i <= last; i++) {
      if (currentPage == i) {
          pageHtml +=
        "<li class='on'><a href='#' id='" + i + "'>" + i + "</a></li>";
    } else {
      pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
    }
}

if (last < totalPage) {
    pageHtml += "<li><a href='#' id='next'> 다음 </a></li>";
}

  $("#pagingul").html(pageHtml);
  let displayCount = "";
  displayCount = "현재 1 - " + totalPage + " 페이지 / " + totalData + "건";
  $("#displayCount").text(displayCount);
 
}


$("#dataPerPage").change(function () {
    dataPerPage = $("#dataPerPage").val();
    //전역 변수에 담긴 globalCurrent 값을 이용하여 페이지 이동없이 글 표시개수 변경 
    paging(totalData, dataPerPage, pageCount, globalCurrentPage);
    displayData(globalCurrentPage, dataPerPage);
 });