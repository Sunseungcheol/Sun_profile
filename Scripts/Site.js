function addBkgIndex() {
  var welcomeText = document.querySelector(".welcomeText");
  var gnbMenu = document.querySelector(".gnbMenu");
  var doorTextDom = document.querySelector("#gnb");
  doorTextDom.style.opacity = "0";
  document.querySelector(".wrapOpcityControl").style.opacity = "0";

  addBkg();

  setTimeout(function () {
    doorTextDom.classList.add("doorTextAni");
    welcomeText.style.display = "none";
    document.querySelector(".mainControl").style.opacity = "1";
    gnbMenu.style.opacity = "1";
  }, 1000); //index.css  wrapBkgControl transition 같이 고칠 것
  setTimeout(function () {
    document.querySelector(".centerBelt").style.height = "200px";
  }, 1500);
}
function addBkg() {
  var doorTextControl = document.querySelector(".wrapOpcityControl");
  setTimeout(function () {
    doorTextControl.style.opacity = "1";
  }, 1500);
}
function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function clickUrl(url) {
  document.querySelector(".wrapOpcityControl").style.opacity = "0";
  setTimeout(function () {
    location.href = url;
  }, 1000);
}

function clickUrlIndex(url) {
  document.querySelector(".centerBelt").style.height = "0";
  document.querySelector(".wrapOpcityControl").style.opacity = "0";
  setTimeout(function () {
    location.href = url;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "%cSun!",
    "padding:0 10px; background-color:#5fb8c2; color:#e3e89c; font-size:45px; font-weight:bold;"
  );
  // if (isIEVisit()) {
  //   alert("익스플로러!!");
  // } else {
  //   console.log("익스가 아니다");
  // }
});

// IE 감지
function isIEVisit() {
  var uA = window.navigator.userAgent;
  var msie = uA.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(uA.substring(msie + 5, uA.indexOf(".", msie)), 10);
  }
  var trident = uA.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = uA.indexOf("rv:");
    return parseInt(uA.substring(rv + 3, uA.indexOf(".", rv)), 10);
  }
  // other browser
  return false;
}
