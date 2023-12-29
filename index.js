let flags = document.querySelectorAll('.realidad-aumentada');
let counter = 0

const intervalo = setInterval(()=>{
    if(counter==10){clearInterval(intervalo) ; console.log('limpie el intervalo')}
    else if (!flags) {counter++; console.log('sigo buscando el contenedor')}
    else {
        let parentElement = null;

        for( i=0; i<flags.length; i++){
            parentElement =  flags[i].parentNode.parentNode.querySelector('.vitrin-home .img_p')
            parentElement.appendChild(flags[i])
        }

        console.log('hecho')

    }
},1000)

