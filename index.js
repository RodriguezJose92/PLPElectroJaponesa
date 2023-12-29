let flags = document.querySelectorAll('.realidad-aumentada');
let counter = 0;
const intervalo = setInterval(()=>{
    if( counter==10 ){clearInterval(intervalo)}
    else if ( flags.length==0 ) { counter++; flags = document.querySelectorAll('.realidad-aumentada');}
    else {
        let parentElement = null;

        for( i=0; i<flags.length; i++){
            parentElement =  flags[i].parentNode.parentNode.querySelector('.vitrin-home .img_p');
            if(!parentElement) flags[i].remove();
            else parentElement.appendChild(flags[i])
        }
        clearInterval(intervalo);
    };
},1000);

