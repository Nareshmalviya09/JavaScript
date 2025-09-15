const button = document.querySelectorAll('.box')
const body = document.querySelector('body')

button.forEach(function(box){
    box.addEventListener('click',function(colour){
        if(colour.target.id === 'box1')
            body.style.backgroundColor='#FAA533'
        if(colour.target.id === 'box2')
            body.style.backgroundColor='#48B3AF'
        if(colour.target.id === 'box3')
            body.style.backgroundColor='#8FA31E'
        if(colour.target.id === 'box4')
            body.style.backgroundColor='#B45253'
        if(colour.target.id === 'box5')
            body.style.backgroundColor='#B12C00'
    })

})
