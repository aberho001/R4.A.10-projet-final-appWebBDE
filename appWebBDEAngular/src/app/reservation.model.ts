export class Reservation {
    id!: number;
    nom!: string;
    email!: string;
    telephone!: string;
    id_soiree!: number;
    statut!: string;
    date_reservation!: string;

    constructor(id: number, nom: string, email: string, telephone: string, id_soiree: number, statut: string, date_reservation: string) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.telephone = telephone;
        this.id_soiree = id_soiree;
        this.statut = statut;
        this.date_reservation = date_reservation;
    }
}   