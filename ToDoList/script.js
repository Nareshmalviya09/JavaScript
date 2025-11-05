const btnel = document.querySelector('.btn')
const inputele = document.querySelector('#input-field')
const taskEv = document.querySelector('.list-item')

btnel.addEventListener('click',()=>{
    // console.log("clicke me");
    if(inputele.value === ""){
        alert("please add your task first")
    }else{
        let listEle = document.createElement("li")
        listEle.textContent = inputele.value
        taskEv.appendChild(listEle)

        let spanEle = document.createElement("span")
        spanEle.textContent= "\u00d7"
        listEle.appendChild(spanEle)
    }
    inputele.value =""
    
})
taskEv.addEventListener('click',(e)=>{
if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked")
}

})