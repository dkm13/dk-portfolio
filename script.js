function reChange(iconID) {
  if (document.getElementById(iconID).className == "fas fa-times") {
    document.getElementById(iconID).className = "fas fa-bars";
  } else {
    document.getElementById(iconID).className = "fas fa-times";
  }
}

let x = document.getElementById("position");
let texts = [
  "I'm a frontend developer",
  "I'm a web Designer",
  "I'm a freelancer",
  "I'm a Web developer",
];
function myFunction() {
  getRandom();
}

function getRandom() {
  let rNmb = Math.floor(Math.random() * 3);

  setTimeout(() => {
    x.innerText = texts[rNmb];
    getRandom();
  }, 1500);
}

// scroll navbar underlines
window.onscroll = function () {
  scrollFunction();
};

var pos = window.pageYOffset;
console.log(pos);
var liAbt = document.getElementById("abt");
var liHm = document.getElementById("hm");
var liSrv = document.getElementById("srv");
var liPrv = document.getElementById("prj");
function scrollFunction() {
  const wd = screen.width;
  if (wd < 768) {
    console.log("width smaller than 768");
  } else if (wd > 768) {
    if (window.pageYOffset > 0 && window.pageYOffset < 625) {
      liHm.style.borderBottom = "4.5px solid rgb(245, 243, 243)";
      liAbt.style.borderBottom = "none";
      liSrv.style.borderBottom = "none";
      liPrv.style.borderBottom = "none";
    }
    if (window.pageYOffset > 625 && window.pageYOffset < 1210) {
      liHm.style.borderBottom = "none";
      liAbt.style.borderBottom = "4.5px solid rgb(245, 243, 243)";
      liSrv.style.borderBottom = "none";
      liPrv.style.borderBottom = "none";
    }
    if (window.pageYOffset > 1210 && window.pageYOffset < 1670) {
      liHm.style.borderBottom = "none";
      liAbt.style.borderBottom = "none";
      liSrv.style.borderBottom = "4.5px solid rgb(245, 243, 243)";
      liPrv.style.borderBottom = "none";
    }
    if (window.pageYOffset > 1670) {
      liHm.style.borderBottom = "none";
      liAbt.style.borderBottom = "none";
      liSrv.style.borderBottom = "none";
      liPrv.style.borderBottom = "4.5px solid rgb(245, 243, 243)";
    }
  }
}

var websites = document.querySelectorAll(".web");
var appsites = document.querySelectorAll(".app");
var gamesites = document.querySelectorAll(".game");

function webs() {
  for (let i = 0; i < websites.length; i++) {
    websites[i].style.display = "block";
  }
  for (let i = 0; i < appsites.length; i++) {
    appsites[i].style.display = "none";
  }
  for (let i = 0; i < gamesites.length; i++) {
    gamesites[i].style.display = "none";
  }
}

function apps() {
  for (let i = 0; i < appsites.length; i++) {
    appsites[i].style.display = "block";
  }
  for (let i = 0; i < websites.length; i++) {
    websites[i].style.display = "none";
  }
  for (let i = 0; i < gamesites.length; i++) {
    gamesites[i].style.display = "none";
  }
}

function games() {
  for (let i = 0; i < appsites.length; i++) {
    appsites[i].style.display = "none";
  }
  for (let i = 0; i < websites.length; i++) {
    websites[i].style.display = "none";
  }
  for (let i = 0; i < gamesites.length; i++) {
    gamesites[i].style.display = "block";
  }
}

function allDisplay() {
  document.getElementById("web1").style.display = "block";
  document.getElementById("web2").style.display = "block";
  document.getElementById("web3").style.display = "block";
  document.getElementById("web4").style.display = "block";
  document.getElementById("web5").style.display = "block";
  document.getElementById("web6").style.display = "block";
  document.getElementById("app1").style.display = "block";
  document.getElementById("app2").style.display = "block";
  document.getElementById("game1").style.display = "block";
  document.getElementById("game2").style.display = "block";
}
