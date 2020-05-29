const mainAddBtn = document.getElementById("mainAddBtn");
const itemsContainer = document.querySelector(".items");
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




var data = [
    {
        "id": "1",
        "title":"how are today aditya ",
        "content": "defenetly final sections"
    },
    {
        "id": "1",
        "title": "how are today aditya ",
        "content": "defenetly final sections"
    },
    {
        "id": "1",
        "title": "how are today aditya ",
        "content": "defenetly final sections"
    },
    {
        "id": "1",
        "title": "how are today aditya ",
        "content": "defenetly final sections"
    }
]



// event listener

mainAddBtn.addEventListener('click', showModelBox);
modelCloseBtn.addEventListener('click', hideModelBox);
addContentBtn.addEventListener("click", addDataToDB)

function showModelBox(){
    modelBox[0].classList.remove("invisible");
}

function hideModelBox(){
    modelBox[0].classList.add("invisible");
}

function addDataToDB(){
    if (titleInput != "" && contentInput != "") {
        const id = data.length +1;
        
        data.push({id: id,title: titleInput, content: contentInput})
    }
}