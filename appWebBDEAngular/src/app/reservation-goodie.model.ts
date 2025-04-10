export class ReservationGoodie {
    id!: number;
    id_reservation!: number;
    id_goodie!: number;
    quantitee!: number;

    constructor(id: number, id_reservation: number, id_goodie: number, quantitee: number) {
        this.id = id;
        this.id_reservation = id_reservation;
        this.id_goodie = id_goodie;
        this.quantitee = quantitee;
    }

}
