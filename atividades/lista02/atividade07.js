/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/
const input = require("prompt-sync")()

function validateInput(msg) {
    let value;
    do {
        value = input(msg).trim();
        if (value === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if (!Number.isInteger(Number(value)) || isNaN(value) || (Number(value) < 0)) {
            console.log("Por favor, insira um valor inteiro positivo.");
        }
    } while (value === "" || !Number.isInteger(Number(value)) || isNaN(value) || (Number(value) < 0));

    return parseInt(value);
}

function carPop(){
    rental_days = validateInput('Digite quantos dias de aluguel: ')
    car_km_traveled = validateInput('Digite quantos KM foram percorridos: ')
    if(car_km_traveled > 100){
        return car_km_traveled * 0.10
    }else{
        return car_km_traveled * 0.20
    }
}

function carLux(){
    rental_days = validateInput('Digite quantos dias de aluguel: ')
    car_km_traveled = validateInput('Digite quantos KM foram percorridos: ')
    if(car_km_traveled > 200){
        return car_km_traveled * 0.25
    }else{
        return car_km_traveled * 0.30
    }
}


function carTypeIdentify(carType){
    if(carType === "luxo"){
        return carLux()
    }else{
        return carPop()
    }
}


function validateCarType(msg){
    let type;
    do{
        type = input(msg).trim().toLowerCase();
        if (type === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if((type != "popular" && type != "luxo")){
            console.log("Por favor, escreva o tipo de carro alugado: Popular ou Luxo")
        }
    }while(type === "" || (type != "popular" && type != "luxo"))
    return type;
}


let car_type = validateCarType("Escreva o tipo de carro alugado: Popular ou Luxo: ")
let final_price = carTypeIdentify(car_type)
console.log("Preço total: " + final_price)