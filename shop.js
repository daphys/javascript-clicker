let scoreS = document.getElementById("points");
let newScore = (scoreS.innerHTML = Number(localStorage.getItem("key")));
let button = document.getElementById("butt");

console.log(`Your credits: ${newScore}`);

function buyWoman() {
  if (newScore <= 50) {
    alert("Not enough credits ~赚取更多~");
  } else {
    let elem = document.getElementById("shopItem1");
    let newElemState = (elem.style.display = "none");
    localStorage.setItem("cat", newElemState);
    let price = document.getElementById("price");
    let np = price.textContent;
    let newPrice = newScore - np;
    newPrice = Number(localStorage.setItem("key", newPrice));
    let update = (scoreS.innerHTML = Number(localStorage.getItem("key")));
  }
}

button.addEventListener("click", buyWoman);

//
//
//

let cenaButt = document.getElementById("cenaBut");

function buyCina() {
  if (newScore <= 150) {
    alert("Not enough credits ~赚取更多~");
  } else {
    let elem = document.getElementById("shopItem2");
    let newElemState = (elem.style.display = "none");
    localStorage.setItem("john", newElemState);
    let price = document.getElementById("cena");
    let np = price.textContent;
    let newPrice = newScore - np;
    newPrice = Number(localStorage.setItem("key", newPrice));
    console.log(newPrice);
    let update = (scoreS.innerHTML = Number(localStorage.getItem("key")));
  }
}

cenaButt.addEventListener("click", buyCina);

//
//
//

let react = document.getElementById("taiBut");

function reactT() {
  if (newScore <= 300) {
    alert("Not enough credits ~赚取更多~");
  } else {
    let elem = document.getElementById("shopItem3");
    let newElemState = (elem.style.display = "none");
    localStorage.setItem("tai", newElemState);
    let price = document.getElementById("taiwan");
    let np = price.textContent;
    let newPrice = newScore - np;
    newPrice = Number(localStorage.setItem("key", newPrice));
    console.log(newPrice);
    let update = (scoreS.innerHTML = Number(localStorage.getItem("key")));
  }
}

react.addEventListener("click", reactT);

//
//
//

let xiJ = document.getElementById("xiJ");

function xi() {
  if (newScore <= 600) {
    alert("Not enough credits ~赚取更多~");
  } else {
    let elem = document.getElementById("shopItem4");
    let newElemState = (elem.style.display = "none");
    localStorage.setItem("xi", newElemState);
    let price = document.getElementById("xiJp");
    let np = price.textContent;
    let newPrice = newScore - np;
    newPrice = Number(localStorage.setItem("key", newPrice));
    console.log(newPrice);
    let update = (scoreS.innerHTML = Number(localStorage.getItem("key")));
  }
}

xiJ.addEventListener("click", xi);

//
//
//

let tTbutt = document.getElementById("ttBut");

function wTT() {
  if (newScore <= 1200) {
    alert("Not enough credits ~赚取更多~");
  } else {
    let elem = document.getElementById("shopItem5");
    let newElemState = (elem.style.display = "none");
    localStorage.setItem("hour", newElemState);
    let price = document.getElementById("wttprice");
    let np = price.textContent;
    let newPrice = newScore - np;
    newPrice = Number(localStorage.setItem("key", newPrice));
    console.log(newPrice);
    let update = (scoreS.innerHTML = Number(localStorage.getItem("key")));
  }
}

tTbutt.addEventListener("click", wTT);

//
//
//

let superIdol = document.getElementById("superButt");

function sI() {
  if (newScore <= 2400) {
    alert("Not enough credits ~赚取更多~");
  } else {
    let elem = document.getElementById("shopItem6");
    let newElemState = (elem.style.display = "none");
    localStorage.setItem("idol", newElemState);
    let price = document.getElementById("superIdolPrice");
    let np = price.textContent;
    let newPrice = newScore - np;
    newPrice = Number(localStorage.setItem("key", newPrice));
    console.log(newPrice);
    let update = (scoreS.innerHTML = Number(localStorage.getItem("key")));
  }
}

superIdol.addEventListener("click", sI);


if (localStorage.getItem("cat") == "none") {
  let elem = document.getElementById("shopItem1");
  elem.remove();
  button.removeEventListener('click', buyWoman)
}
if (localStorage.getItem("john") == "none") {
  let elem = document.getElementById("shopItem2");
  elem.remove();
  cenaButt.removeEventListener('click', buyCina)
}
if (localStorage.getItem("tai") == "none") {
  let elem = document.getElementById("shopItem3");
  elem.remove();
  react.removeEventListener('click', reactT)
}
if (localStorage.getItem("xi") == "none") {
  let elem = document.getElementById("shopItem4");
  elem.remove();
  xiJ.removeEventListener('click', xi)
}
if (localStorage.getItem("hour") == "none") {
  let elem = document.getElementById("shopItem5");
  elem.remove();
  tTbutt.removeEventListener('click', wTT)
}
if (localStorage.getItem("idol") == "none") {
  let elem = document.getElementById("shopItem6");
  elem.remove();
  superIdol.removeEventListener('click', sI)
}