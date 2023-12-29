const flags = document.querySelectorAll('.realidad-aumentada');
let parentElement = null;
let contentHTML = null;
setTimeout(()=>{
    for( i=0; i<flags.length; i++){
        parentElement =  flags[i].parentNode.parentNode.querySelector('.vitrin-home .img_p')
        parentElement.appendChild(flags[i])
    }
},500);
