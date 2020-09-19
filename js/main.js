const mainAddBtn = document.getElementById("mainAddBtn");
const itemsContainer = document.querySelector(".items");
const itemDeleteBtn = document.getElementById("item-delete-btn");
// model box
const modelBox = document.getElementsByClassName("modelbox");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addContentBtn = document.getElementById("submitBtn");
const modelCloseBtn = document.getElementById("modelCloseBtn");


// alert Box
const alertBox = document.querySelector(".alertBox");
const alertOk = document.getElementById("dialogId");
const alertCancel = document.getElementById("dialogCancel");

// json data

var jData = [
    {
        "_id": "1",
        "title":"how are today aditya ",
        "content": "defenetly final sections"
    },
    {
        "_id": "2",
        "title": "join online class",
        "content": "i have to join online class on 12:30 P.M."
    },
    {
        "_id": "3",
        "title": "have to go on mall today",
        "content": "i have to buy some beauty, Jeans, shirt and tshirt product from mall"
    },
    {
        "_id": "4",
        "title": "3:30 PM physics classes ",
        "content": "we have to take mayank sir class at 3:30 PM tomorrow. a man going to arah to take classes"
    }
];


// display post todo app

displayData();


// event listener
// show model box event
mainAddBtn.addEventListener('click', showModelBox);
//model close btn event
modelCloseBtn.addEventListener('click', hideModelBox);
// item delete button event
itemDeleteBtn.addEventListener('click', e =>{
    
    console.log("add-data");
    
    
});


// add item to db and view event
addContentBtn.addEventListener("click", ()=>{
    addDataToDB(displayData)
});





function showModelBox(){
    modelBox[0].classList.remove("invisible");
}

function hideModelBox(){
    modelBox[0].classList.add("invisible");
}

function addDataToDB(callBack){
    if (titleInput.value != "" && contentInput.value != "") {
        const id = jData.length +1;
    
       var newID =  jData.push({
            "_id": id.toString(),
            "title":titleInput.value,
            "content": contentInput.value
        });
        
        if (newID === id) {
            clearFormData();
            hideModelBox();
            callBack()
        }

        
    }
}

function displayData(){

    itemsContainer.innerHTML = ``;
    for(let i = jData.length -1; i >= 0; i--){
        
        var dataID = jData[i]._id;
        var dataTitle = jData[i].title;
        var dataContent = jData[i].content;
        
        const templates = `<div id= "${dataID}" class="item-container">`+`<div class="item-left">`+`<div class="item-title">`+`<h1>${dataTitle}</h1>`+`</div>`+`<div class="item-content">`+ `<p>${dataContent}</p>`+`</div>`+ `</div>`+ `<div class="item-right">`+`<div class="clear-btn" id="item-delete-btn" >`+`</div>`+`</div>`+`</div>`;

        itemsContainer.innerHTML += templates;
        
    }
}

function deleteItems(){
   
    console.log("hi");
    
    
}


function clearFormData(){
    titleInput.value = ""
    contentInput.value = ""
}


function showToastMessage(msg){
    if (msg ==="" || msg === "undefined" || msg == null) return

}


