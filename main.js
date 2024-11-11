// 스크롤 시 navbar 색상 바꾸기
const header = document.querySelector(".header"); //from HTML
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  //navbar의 높이가 현재까지 스크롤 된 Y값보다 작다면 navbar에 fixed라는 클래스를 넣어라.
  //1) 삼항연산자 사용
  headerHeight < scrollY
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");

  //2) if문 사용
  if (window.scrollY > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const list = document.querySelector(".nav__link--list");

toggleBtn.addEventListener("click", () => {
  list.classList.toggle("active");
});
