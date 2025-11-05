
const imgcontainer = document.querySelector(".img-container")
const btn1 = document.querySelector(".btn")

btn1.addEventListener("click",()=>{
    numimg = 4
    updtimg()
})

function updtimg(){

    for( let i=0;i<numimg;i++){
  const newimg = document.createElement("img")
    newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
    imgcontainer.appendChild(newimg)
    }
  
}
