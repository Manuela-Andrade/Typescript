enum Cor{
    vermelho,
    Amarelo,
    verde 

}

let cor = 'vermelho';

if (cor ==  'verde'){
    console.log('siga! Acerele');
 
}else{
    console.log('Pane!');
}
console.log('Valor do enum:');
console.log(Cor.verde);

let corDoEnum: Cor;
corDoEnum = Cor.verde;

console.log('Variável do tipo enum : ');
console.log(corDoEnum);
console.log(Cor[1]);

if (cor ==  Cor[2]){
    console.log('siga! Acerele');
 
}else{
    console.log('Pane!');
}