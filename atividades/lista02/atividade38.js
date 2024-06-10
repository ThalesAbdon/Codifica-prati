/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/
const input = require('prompt-sync')()

function partition(arr, low, high) { 
	let pivot = arr[high]; 
	let i = low - 1; 

	for (let j = low; j <= high - 1; j++) { 
		if (arr[j] < pivot) { 
			i++; 
			[arr[i], arr[j]] = [arr[j], arr[i]]; 
		} 
	} 
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
	return i + 1; 
} 

function quickSort(arr, low, high) { 
	if (low >= high) return; 
	let pi = partition(arr, low, high); 

	quickSort(arr, low, pi - 1); 
	quickSort(arr, pi + 1, high); 
} 


function validateVectorInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if (isNaN(value) || value <= 0) {
            console.log("Digite um número válido!");
            continue;
        }
    } while(isNaN(value) || value <= 0)

    return Number(value)
}

function validateOptionInput(msg){
    let value;
    do{
        console.log("1- soma dos elementos \n2- produto dos elementos\n3- média dos elementos\n4- ordene os elementos em ordem crescente\n5- mostre o vetor.")
        value = input(msg).trim();
        if(isNaN(value) || value <= 0 || value > 5){
            console.log("Digite uma opção válida!");
            continue;
        }
    }while(isNaN(value) || value <= 0 || value > 5)
    return Number(value)    
}

function sumOfElements(vector){
    return(vector.reduce((accumulator,value) => accumulator + value,0))
}

function productOfElements(vector){
    return (vector.reduce((accumulator,value) => accumulator * value,1))
}

function averageOfElements(vector){
    return sumOfElements(vector) / vector.length
}

function sortOfElements(vector){
    quickSort(vector, 0, vector.length - 1);
    return vector
}
function showTheVector(vector){
    console.log(vector)
}

function performOperation(id_variable, vector){
    switch(id_variable){
        case 1:
            console.log(sumOfElements(vector))
            break;
        case 2:
            console.log(productOfElements(vector))
            break;
        case 3:
            console.log(averageOfElements(vector))
            break;
        case 4:
            console.log(sortOfElements(vector))
            break;
        case 5:
            showTheVector(vector)
            break;                
    }
}

function readVector(){
    let vector= []
    for(i = 0; i < 6; i++){
        let number = validateVectorInput(`Digite o número para o endereço de memória ${i}:`)  
        vector.push(number)
    }
    return vector
}

function readIdentifierVariable(){
    let id_variable = validateOptionInput('Digite uma variável identificadora: ')
    return id_variable
}

let vector = readVector()
const id_variable = readIdentifierVariable()
performOperation(id_variable,vector)
