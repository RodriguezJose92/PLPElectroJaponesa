let flags = document.querySelectorAll('.realidad-aumentada');
let counter = 0;
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
},1000);

let paginationList = document.querySelectorAll('.page-number');
let counterPagination = 0;

const intervalPagination = setInterval(()=>{
    if(counterPagination==10){ 
        clearInterval(intervalPagination); 
        console.log('limpiado por llegar a 10')
    }
    else if( paginationList.length==0){
        counterPagination++;
        paginationList = document.querySelectorAll('.page-number');
        console.log('reiterando Lista ')
    }else{
        counter=0;
        intervalo = setInterval(()=>{
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
        clearInterval(intervalPagination);
        console.log('hecho')
    }
},1000)

