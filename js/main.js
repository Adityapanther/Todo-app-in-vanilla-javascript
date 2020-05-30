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
]



// event listener

mainAddBtn.addEventListener('click', showModelBox);
modelCloseBtn.addEventListener('click', hideModelBox);
addContentBtn.addEventListener("click", ()=>{
    addDataToDB(displayData)
})

// display post todo app

displayData();

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
            "_id": id,
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
    for(d in jData){
        var dataID = jData[d]._id
        var dataTitle = jData[d].title
        var dataContent = jData[d].content
        
        var template = `<div id= "${dataID}" class="item-container">
                    <div class="item-left">
                        <div class="item-title">
                            <h1>${dataTitle}</h1>
                        </div>
                        <div class="item-content">
                            <p>${dataContent}</p>
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="clear-btn">
                            <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <desc>Created with Lunacy</desc>
                                <defs>
                                    <rect width="30" height="30" id="artboard_1" />
                                    <clipPath id="clip_1">
                                        <use xlink:href="#artboard_1" clip-rule="evenodd" />
                                    </clipPath>
                                </defs>
                                <g id="Twitter-Header" clip-path="url(#clip_1)">
                                    <use xlink:href="#artboard_1" stroke="none" fill="#FFFFFF" fill-opacity="0" />
                                    <path
                                        d="M13.1713 0L9.17129 0L9.17129 8.69926L0.556692 7.48856L0 11.4496L9.17129 12.7386L9.17129 22L13.1713 22L13.1713 13.3007L21.7859 14.5114L22.3426 10.5504L13.1713 9.26143L13.1713 0Z"
                                        transform="matrix(0.7071066 0.7071069 -0.7071069 0.7071066 13.87888 -0.6774721)"
                                        id="Rectangle-Union" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>`

        itemsContainer.innerHTML += template;
        
    }
}


function clearFormData(){
    titleInput.value = ""
    contentInput.value = ""
}


function showToastMessage(msg){
    if (msg ==="" || msg === "undefined" || msg == null) return

}

