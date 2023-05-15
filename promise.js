primaOperazionePromise('prova')
    .then(
        (output1) =>{
            return secondaOperazionePromise(output1)
        }
    )
    .then(
        (output2) =>{
            console.log(output2)
            return output2
        }
    )