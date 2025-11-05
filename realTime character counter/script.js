const textArea= document.getElementById('textarea')
const totalChar=document.getElementById('total-char')
const Remaining=document.getElementById('Remaining-char')
textarea.addEventListener("keyup",()=>{
     updatecounter()
    
})
function updatecounter(){
        totalChar.innerText =textArea.value.length
        Remaining .innerText = textArea.getAttribute("maxlength")- textArea.value.length
}
 updatecounter()