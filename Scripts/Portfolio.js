let isPortfolioOpen = false;
const domWrap = document.querySelector(".wrap");
let workArticleTop =
  window.pageYOffset +
  document.querySelector(".workArticle").getBoundingClientRect().top;

let pageArtcleTop =
  window.pageYOffset +
  document.querySelector(".pageArtcle").getBoundingClientRect().top;

document.addEventListener("DOMContentLoaded", function () {
  //new WOW().init();
  //console.log(workArticleTop);
  addBkg();
});
//스크롤이벤트
domWrap.addEventListener("scroll", function () {
  const mobileMainImg = document.querySelector(".mobileMainImg");
  const webMainImg = document.querySelector(".webMainImg");
  const workArticle = document.querySelector(".workArticle");
  const workArticleSub = document.querySelector(".workArticleSub");
  const pageArtcle = document.querySelector(".pageArtcle");
  const portDetailImgWrap = document.querySelector(".portDetailImgWrap");
  let nowScroll = domWrap.scrollTop;
  //console.log(nowScroll);
  if (nowScroll > 50) {
    webMainImg.style.opacity = "1";
    //webMainImg.style.marginLeft = "10%";
  }
  if (nowScroll > 100) {
    mobileMainImg.style.opacity = "1";
    mobileMainImg.style.bottom = "20px";
  }
  if (nowScroll > workArticleTop - 400) {
    workArticle.style.opacity = "1";
    workArticleSub.style.opacity = "1";
    workArticle.style.paddingTop = "0px";
    workArticleSub.style.paddingTop = "0px";
  }

  if (nowScroll > pageArtcleTop - 400) {
    pageArtcle.style.opacity = "1";
    portDetailImgWrap.style.opacity = "1";
    pageArtcle.style.paddingTop = "0px";
    portDetailImgWrap.style.paddingTop = "0px";
  }
});
//포트폴리오 이미지 클릭
const portDetailOpen = (dom) => {
  let domChildren = dom.children[0].src;
  document.querySelector(".popBkg").style.display = "block";
  document.querySelector(".popBkg").scrollTo(0, 0);
  document.querySelector(".clickPopImg").src = domChildren;
  isPortfolioOpen = true;
};
const portDetailClose = () => {
  if (isPortfolioOpen) {
    document.querySelector(".popBkg").style.display = "none";
    document.querySelector(".clickPopImg").src = "";
    isPortfolioOpen = false;
  }
};
