//var test = "coders";
//var test_boolean = true;
//var test_numeric = 123;

//console.log("String ", test)
//console.log("Boolean ", test_boolean)
//console.log("Numeric ", test_numeric)


//var a = 10;
//var b = 15;

//a = a + b;
//soma = 25;
//a += b;

//console.log("A soma é: ", a)


//var resultado = true && "skrrt";
//console.log("Seu resultado é: ", resultado);


//var obj = {
//	name: "Lucas",
//	city: "Belo Horizonte"	
//};


//if (obj && obj.name) {
//	console.log("Seu nome é Lucas mesmo!", obj.name)
//} else {
//	console.log("Seu nome não é Lucas! Você se chama ", obj.name)
//}


//const a = 10;
//var b = 15;

//if (a === 15) {
//	console.log("a é 15");
//} else if (a === 10) {
//	const c = 2
//	if (c === 2) {
//		console.log("Acessando c: ", c);
//	}
//	if (c) console.log("Valor de c: ", c);
//	console.log("a é 10")
//} else {
//	console.log("a não é nenhuma das alternativas");
//}

//console.log("Fim!")




//console.log("Obj: ", obj);
//console.log("Name: ", obj.name);


//--------------------------------------------------------------




//const nome = "Jordan";
//const numero = 123;
//const verdadeiro = true;
//const nao_definido = undefined
//const nulo = null
//---------------------------------------------------
//const frutas = ["Melancia","Morango","Uva","Maça"]
//---------------------------------------------------

//const usuarioJoao = {
//	nome: "Joao",
//	idade: 18,
//	sexo: "M",
//	cidade: "BH",
//}

//const usuarioMaria = {
//	nome: "Maria",
//	idade: 19,
//	sexo: "F"
//}

//const clienteJoao = {
//	dados: usuarioJoao,
//	suco_preferido: frutas[0]
//}

//const clienteMaria = {
//	dados: usuarioMaria,
//	suco_preferido: frutas[1]
//}

//const clientes = [clienteJoao, clienteMaria]


//if(clientes[0].dados.nome ==="Joao") console.log("É o João!")

//if (frutas[1] === "Morango") console.log("Vou comer morango agora.")


//console.log("Fim!")

//const cliente = {
//	nome: usuario.nome,
//	suco_preferido: frutas[0]
//}

//console.log("Cliente: ", cliente)







	//DESAFIO_______________________________________
//const patient = {
//	name: "Jordan",
//	birthdayDate: "03/01/2002", 
//	cpf: "165.568.206-79",
//	addicionalData: {
//		bloodyType: "O+",
//		mothersName: "Vanessa",
//		emergencyPhone: "3466-6160"
//	}
//}
//const doctor1 = {
//	name: "Renato",
//	startOfShift: "2 AM",
//	endOfShift: "6 PM",
//	attendances: [ {patient: paciente, finalizado: true}]
//}
//const doctor2 = {
//	name: "Renan",
//	startOfShift: "2 AM",
//	endOfShift: "6 PM",
//	attendances: [patient]
//}
//const doctor3 = {
//	name: "Fernanda",
//	startOfShift: "2 AM",
//	endOfShift: "6 PM",
//	attendances: [patient]
//}


//const doctors = [doctor1.name, doctor2.name, doctor3.name]


//console.log("Patients: ", patient);
//console.log("Doctors: ", doctors);

	//FIM DO DESAFIO________________________________











const registeredFruits = ["banana", "maça", "melancia"]
const fruits = ["banana", 2, {name: "Code Dojo"}, "maçã", "melancia", true, "Leo"]
var validFruits = 

//1.Queremos arrumar o nosso array de frutas, retornando apenas frutas.
//2.Queremos criar cestas de frutas para doação. Temos 900 frutas sortidas, dentre elas: "300 bananas", "300 maças", "300 morangos" -> Criar array com 300 bananas, 300 morangos...


for(let i = 0; i < fruits.lenght; i++){
	for(let j = 0; j < registeredFruits; i++) {
		if(fruits[i] === registeredFruits[j]) {
			validFruits.push(fruits[i])
		}
	}
	console.log(validFruits)




//1. Percorrer o Array Frutas
//2. Percorrer o Array Frutas Cadastradas
//3. Utilizar condições e comparar os elementos entre os Arrays Frutas e FrutasCadastradas
//4. Exibir o Array Frutas de acordo com as FrutasCadastradas	






//function quadrado(numero){
//  if(isNaN(numero)) {
//  return "O valor digitado não é um número!"
//  }
//  quad = numero * numero
//  return quad
//}

//var num = prompt("Digite o número")
//console.log(quadrado(num))


console.log("Maiores que 20")
const numInt = [3,54,16,22,32,49]

function maior20(num20){
  console.log(num20) 
  for(i= 0; i < numInt.length; i++){
    if (numInt[i] > 20){
      console.log(numInt[i])
    }
  }
}
maior20(numInt)
console.log()
console.log("Menores que 20")


function menor20(numInt){
  for(i= 0; i <numInt.length; i++){
    if (numInt[i] < 20){
      console.log(numInt[i])
    }
  }
}

menor20(numInt)


//function randomNumbs()








