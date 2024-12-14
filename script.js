/* var familiares = ['Jone','Felipe', 'Allan', 'Ana Clara', 'Val', 'Gal', 'Luiz', 'Dui', 'Jove', 'Malu', 'Gui', 'Ivone'];
let novosFamiliares = [];

for(i=0;i<familiares.length;i++){
    novosFamiliares.unshift(familiares[i]);
}
console.log(novosFamiliares.toString()); */

function dec2bin(decNumber){
    let restStack = [],
    rest,
    binaryString = '';

    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2); //armazena o resto da divisao
        restStack.push(rest); //adiciona o resto à string restStack
        decNumber = Math.floor(decNumber / 2 ); //divide o numero por 2 para que a divisao continue acontecendo corretamente
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString(); //armazena em binaryString os restos armazenados em restStack, que será o resultado
    }

    return binaryString; //retorna o resultado
}

console.log(dec2bin(10));

