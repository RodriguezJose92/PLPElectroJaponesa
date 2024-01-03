let flags       = null;
let counter     = 0;

// Verificación de que las etiquetas de realidad aumentada existen 
function verifyTagAR(){
    counter = 0;
    flags = document.querySelectorAll('.realidad-aumentada');
    let intervalo = setInterval(()=>{
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
    },500);
}

// Ejecutamos la función una vez
verifyTagAR()

// Asociamos un evento a la lista de paginación para que la verificacion de las etiquetas AR también suceda aquí en esta sección 
const paginationList = document.querySelectorAll('.page-number');
let intervalo1 = setInterval(()=>{
    if(paginationList.length==0){
        paginationList = document.querySelectorAll('.page-number');
    }else{
        for(i = 0 ; i<paginationList.length; i++ ){paginationList[i].addEventListener('click',verifyTagAR)};
        clearInterval(intervalo1);
    };
},500);



