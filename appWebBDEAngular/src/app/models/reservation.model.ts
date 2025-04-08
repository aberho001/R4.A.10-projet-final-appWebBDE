export class Reservation {
    id!: number;
    nom_etudiant!: string;
    email_etudiant!: string;
    telephone_etudiant!: string;
    date_reservation!: string;
    statut!: string;
    soiree_id!: number;
    goodies_attribues!: string[];

    constructor(
        id: number,
        nom_etudiant: string,
        email_etudiant: string,
        telephone_etudiant: string,
        date_reservation: string,
        statut: string,
        soiree_id: number,
        goodies_attribues: string[]
    ) {
        this.id = id;
        this.nom_etudiant = nom_etudiant;
        this.email_etudiant = email_etudiant;
        this.telephone_etudiant = telephone_etudiant;
        this.date_reservation = date_reservation;
        this.statut = statut;
        this.soiree_id = soiree_id;
        this.goodies_attribues = goodies_attribues;
    }
}   