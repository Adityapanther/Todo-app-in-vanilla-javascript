const mainAddBtn = document.getElementById("mainAddBtn");
const itemsContainer = document.querySelector(".items");
// model box
const modelBox = document.getElementsByClassName("modelbox");
const titleInput = document.getElementsByName("title");
const contentInput = document.getElementsByName("content");
const addContentBtn = document.getElementById("submitBtn");
const modelCloseBtn = document.getElementById("modelCloseBtn");


// alert Box
const alertBox = document.querySelector(".alertBox");
const alertOk = document.getElementById("dialogId");
const alertCancel = document.getElementById("dialogCancel");

// json data




var d = JSON.parse(data);
console.log(d);


// event listener

mainAddBtn.addEventListener('click', showModelBox);
modelCloseBtn.addEventListener('click', hideModelBox);


function showModelBox(){
    modelBox[0].classList.remove("invisible");
}

function hideModelBox(){
    modelBox[0].classList.add("invisible");
}

function addDataToDB(){

}