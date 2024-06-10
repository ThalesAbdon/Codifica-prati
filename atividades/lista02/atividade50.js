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
    console.log(`O Hotel: ${nome} na cidade ${cidade} com ${quartosTotais} quartos foi adicionado com sucesso!`);
    },

    findByCity(cidade) {
    const hoteisNaCidade = this.hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
        if (hoteisNaCidade.length > 0) {
            console.log(`Hotéis na cidade ${cidade}:`);
            hoteisNaCidade.forEach(hotel => {
            console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
            });
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
  
  
  sistemaReservaHoteis.addHotel("Mercure", "São Paulo", 10);
  sistemaReservaHoteis.addHotel("Embaixador", "Porto Alegre", 5);
  
  sistemaReservaHoteis.findByCity("Porto Alegre");
  
  sistemaReservaHoteis.bookRoom(1, "Ash Ketchum");
  sistemaReservaHoteis.bookRoom(1, "Homer Simpson");
  
  sistemaReservaHoteis.listBooks();
  
  sistemaReservaHoteis.checkIn(1);
  sistemaReservaHoteis.checkOut(1);
  
  sistemaReservaHoteis.cancelBook(2);
  
  sistemaReservaHoteis.listBooks();
  
  sistemaReservaHoteis.rateHotel(1, "Ash Ketchum", 5);
  sistemaReservaHoteis.rateHotel(1, "Homer Simpson", 4);
  
  sistemaReservaHoteis.OccupationReport(1);
  