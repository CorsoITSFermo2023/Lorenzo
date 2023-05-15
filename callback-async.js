function primaOperazione(input, genoveffa){
    //setTimeout è solo un'esempio
    setTimeout(()=>{
        if((input %5 )== 0){
            console.log()
            genoveffa('Errore mio errore', undefined);
        }
        else{
            const res = input /5;
            genoveffa(undefined, res)
        }
    },0);
}
function secondaOperazione(input, genoveffa){
    //setTimeout è solo un'esempio
    setTimeout(()=>{
        if((input %3 )== 0){
            console.log('errore 3 con'+ input)
            genoveffa('Errore mio errore 3', undefined);
        }
        else{
            const res = input /3;
            console.log('chiamo callback 3 con res' + res)
            genoveffa(undefined, res)
        }
    },0);
}
const genoveffa2 = function(err1, output1){
    if (err2){
        console.log('errore 2: '+ err2);
    } else{
        sencondaOperazione('finito'+ output2)
    }
}

const genoveffa1 = function(err1, output1){
    if (err1){
        console.log('errore: '+ err1);
    } else{
        sencondaOperazione(output1, genoveffa1)
    }
}

primaOperazione(15, genoveffa1);