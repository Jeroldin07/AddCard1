//select popup box ,overlay and button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select container,add,title,author,description-------------------------------
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var addpopup=document.getElementById("add-popup")
var booktitleinput=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")

addpopup.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}



//select cancel button-------------------------------------------
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
