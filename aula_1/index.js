//-----------------------------laços de repetição-----------------------------//
/*

//------------------------------------for------------------------------------//

console.log('\n' + "-- for --" + '\n');

const lista = ["Douglas", "Laizia", "Diego", "João", "Otávio"];
const tamanhoLista = lista.length;
console.log("Tamanho da lista:", tamanhoLista + '\n');

for(var i = 0; i < tamanhoLista; i++){
  console.log("Aluno(a):" + lista[i]);
}
//-----------------------------------while-----------------------------------//

console.log('\n' + "-- while --" + '\n');

var i2 = 0;
while (i2 < tamanhoLista){
  console.log("Aluno(a):" + lista[i2]);
  i2++;
}

console.log('\n' + "-- forEach --" + '\n');

lista.forEach((value, index)=>{
  console.log(index + " - " + value);
})
*/

//-----------------------------------object-----------------------------------//

var alunos = [
  {nome: "Diego", idade: 30},
  {nome: "João", idade: 30},
  {nome: "Otávio", idade: 30},
  {nome: "Laízia", idade: 30},
  {nome: "Douglas", idade: 30},
];

alunos.forEach((value)=>{
  if (value) {
    console.log(value.nome, value.idade);
  }else{
    console.log(value);
  }

});
