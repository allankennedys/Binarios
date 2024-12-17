/* var familiares = ['Jone','Felipe', 'Allan', 'Ana Clara', 'Val', 'Gal', 'Luiz', 'Dui', 'Jove', 'Malu', 'Gui', 'Ivone'];
let novosFamiliares = [];

for(i=0;i<familiares.length;i++){
    novosFamiliares.unshift(familiares[i]);
}
console.log(novosFamiliares.toString()); */

/*
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

*/
function queue(){
    var items = [];

    this.equeue  = function(item){
        // add item
        items.push(item);
    }

    this.dqueue = function(){
        items.shift();
        // remove item
    }
    this.front = function(){
        return items[0];
    }
    this.isEmpty = function(){
        return items.length == 0;
    }
    this.size = function(){
        return items.length;
        // retorna o tamanho da fila
    }
    this.print = function(){
        console.log(items.toString());
        //imprime a fila
    }
}

var queue = new queue();

queue.equeue('OI');
queue.equeue('tchau');
queue.equeue('sei não');
queue.dqueue();
queue.equeue('Grelo');
queue.dqueue();
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.front());

queue.print();