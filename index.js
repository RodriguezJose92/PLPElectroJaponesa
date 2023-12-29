let flags = document.querySelectorAll('.realidad-aumentada');
let counter = 0
console.log('flag one: '+flags);

const intervalo = setInterval(()=>{
    
    if(counter==10){clearInterval(intervalo)}
    else if (!flags) {counter++; }
    else {
        let parentElement = null;

        for( i=0; i<flags.length; i++){
            parentElement =  flags[i].parentNode.parentNode.querySelector('.vitrin-home .img_p')
            parentElement.appendChild(flags[i])
        }

        clearInterval(intervalo);

    };

    console.log('flag two: '+flags);

},1000)

