/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/
const input = require('prompt-sync')()

class Hotel {
    constructor(id,nome,cidade,quartoTotais){
        this.id = id,
        this.nome = nome,
        this.cidade = cidade,
        this.quartoTotais = quartoTotais
        this.quartosDisponiveis = this.quartoTotais
    }
}

class Reserva{
    constructor(idReserva, idHotel, nomeCliente){
        this.idReserva = idReserva,
        this.idHotel = idHotel,
        this.nomeCliente = nomeCliente
    }
}

const sistemaReservaHoteis = {
    hoteis: [],
    reservas: [],
    proximoIdHotel: 1,
    proximoIdReserva: 1,
  
    addHotel(nome, cidade, quartosTotais) {
    const hotel = {
        id: this.proximoIdHotel++,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis: quartosTotais,
        avaliacoes: []
    };
    this.hoteis.push(hotel);
    console.log(`O Hotel: ${nome} na cidade ${cidade} com ${quartosTotais} quartos foi adicionado com sucesso!\n`);
    },

    findByCity(cidade) {
    const hoteisNaCidade = this.hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
        if (hoteisNaCidade.length > 0) {
            console.log(`\nHotéis na cidade ${cidade}:`);
            hoteisNaCidade.forEach(hotel => {
            console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
            });
            console.log('\n')
        } else {
            console.log(`Não foram encontrados hoteis na cidade ${cidade}.`);
        }
    },

    bookRoom(idHotel, nomeCliente) {
    const hotel = this.hoteis.find(h => h.id === idHotel);
    if (!hotel) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }

    if (hotel.quartosDisponiveis > 0) {
        const reserva = {
        idReserva: this.proximoIdReserva++,
        idHotel,
        nomeCliente,
        checkIn: false,
        checkOut: false
        };
        this.reservas.push(reserva);
        hotel.quartosDisponiveis--;
        console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
    } else {
        console.log(`Não há quartos disponíveis no hotel ${hotel.nome}.`);
    }
    },

    cancelBook(idReserva) {
    const reservaIndex = this.reservas.findIndex(r => r.idReserva === idReserva);
    if (reservaIndex === -1) {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
        return;
    }

    const reserva = this.reservas[reservaIndex];
    const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
    if (hotel) {
        hotel.quartosDisponiveis++;
    }

    this.reservas.splice(reservaIndex, 1);
    console.log(`Reserva com ID ${idReserva} cancelada com sucesso.`);
    },

    listBooks() {
    if (this.reservas.length === 0) {
        console.log("Nenhuma reserva encontrada.");
        return;
    }

    console.log("Lista de reservas:");
    this.reservas.forEach(reserva => {
        const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
        console.log(`ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
    });
    console.log('\n')
    },

    checkIn(idReserva) {
    const reserva = this.reservas.find(r => r.idReserva === idReserva);
        if (reserva) {
            reserva.checkIn = true;
            console.log(`Check-in realizado com sucesso para a reserva ${idReserva}.`);
        } else {
            console.log(`Reserva com ID ${idReserva} não encontrada.`);
        }
    },

    checkOut(idReserva) {
    const reserva = this.reservas.find(r => r.idReserva === idReserva);
        if (reserva) {
            reserva.checkOut = true;
            const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
            if (hotel) {
            hotel.quartosDisponiveis++;
            }
            console.log(`Check-out realizado com sucesso para a reserva ${idReserva}.`);
        } else {
            console.log(`Reserva com ID ${idReserva} não encontrada.`);
        }
    },

    rateHotel(idHotel, nomeCliente, avaliacao) {
    const hotel = this.hoteis.find(h => h.id === idHotel);
        if (hotel) {
            hotel.avaliacoes.push({ nomeCliente, avaliacao });
            console.log(`Avaliação adicionada com sucesso para o hotel ${hotel.nome}.`);
        } else {
            console.log(`Hotel com ID ${idHotel} não encontrado.`);
        }
    },

    OccupationReport(idHotel) {
    const hotel = this.hoteis.find(h => h.id === idHotel);
        if (hotel) {
            const totalReservas = this.reservas.filter(r => r.idHotel === idHotel).length;
            console.log(`Relatório de Ocupação Hotel ${hotel.nome}:`);
            console.log(`Total de Quartos: ${hotel.quartosTotais}`);
            console.log(`Quartos Disponíveis(no momento): ${hotel.quartosDisponiveis}`);
            console.log(`Total de Reservas: ${totalReservas}`);
        } else {
            console.log(`Hotel com ID ${idHotel} não encontrado.`);
        }
    }
};

function validateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 0 || Number(value) > 9){
            console.log('Por favor, escolha uma opção válida!')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 0 || Number(value) > 9)

    return parseInt(value)
}

function validateNameInput(msg){
    let value;
    do{
        value = input(msg).trim();
        if(!validateName(value)) {
            console.log("Por favor, digite um nome válido!")
        }
    }while(!validateName(value))

    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

    return value;
}

function validateName(name){
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  return regex.test(name);
}

function validateIntegerInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0)

    return parseInt(value)
}

function validateRateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 1 || Number(value) > 5){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 1 || Number(value) > 5)

    return parseInt(value)
}

function menu(){
    console.log("1 - Adicionar um Hotel")
    console.log("2 - Buscar Hotel ( por cidade )")
    console.log("3 - Reservar um quarto")
    console.log("4 - Listar Reservas")
    console.log("5 - Fazer Check-in")
    console.log("6 - Fazer Check-out")
    console.log("7 - Cancelar Reserva")
    console.log("8 - Avaliar Hospedagem")
    console.log("9 - Gerar Relatório de Ocupação")
    console.log("0 - Sair")
    return validateInput('Escolha uma Opção: ')
}

function menu_choice(opt){
    let hotel_name
    let city_name
    let total_rooms
    let hotel_id
    let guest_name
    let id_reserva
    let rate
    switch (opt) {
        case 1:
          hotel_name = validateNameInput('Digite o Nome do Hotel: ')
          city_name =  validateNameInput('Digite o nome da cidade: ')
          total_rooms =  validateIntegerInput('Digite quantos quartos o Hotel possui: ')
          sistemaReservaHoteis.addHotel(hotel_name,city_name,total_rooms)
          break;
        case 2:
          city_name = validateNameInput('Digite o nome da cidade: ')
          sistemaReservaHoteis.findByCity(city_name)
          break;
        case 3:
          hotel_id = validateIntegerInput('Digite o Id do hotel: ')
          guest_name = validateNameInput('Digite o seu Nome: ')
          sistemaReservaHoteis.bookRoom(hotel_id, guest_name);
          break;
        case 4:  
          sistemaReservaHoteis.listBooks();
          break;
        case 5:
            id_reserva = validateIntegerInput("Digite o Id da Reserva: ")
            sistemaReservaHoteis.checkIn()
            break;
        case 6:
            id_reserva = validateIntegerInput("Digite o Id da Reserva: ")
            sistemaReservaHoteis.checkOut(id_reserva)
            break;
        case 7:
            id_reserva = validateIntegerInput("Digite o Id da Reserva: ")
            sistemaReservaHoteis.cancelBook(id_reserva)
            break; 
        case 8:
            hotel_id = validateIntegerInput("Digite o Id do Hotel: ")
            guest_name = validateIntegerInput("Digite o seu nome: ")
            rate = validateRateInput("Digite sua avalição ( de 1 a 5 )")
            sistemaReservaHoteis.rateHotel(hotel_id, guest_name, rate)
            break;   
        case 9:
            hotel_id = validateIntegerInput("Digite o Id do Hotel: ")
            sistemaReservaHoteis.OccupationReport(hotel_id)
            break; 
        default:
            console.log("Obrigado por escolher o +Hotel, até mais!")
            on = false
      }
    
}

let on = true
console.log(" - - - - - Bem-vindo ao +Hotel! - - - - -\n")
while (on){
   opt = menu()
   menu_choice(opt)
}
    

  

  
//   sistemaReservaHoteis.rateHotel(1, "Ash Ketchum", 5);
//   sistemaReservaHoteis.rateHotel(1, "Homer Simpson", 4);
  
//   sistemaReservaHoteis.OccupationReport(1);
  