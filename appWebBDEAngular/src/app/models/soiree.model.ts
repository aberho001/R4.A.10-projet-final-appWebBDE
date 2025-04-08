export class Soiree{
    id!: number;
    nom!: string;
    lieu!: string;
    date_heure!: string;
    prix!: number;
    capacite_max!: number;
    theme!: string;

    constructor(id: number, nom:string, lieu: string, date_heure: string, prix: number, capacite_max: number, theme: string) {
        this.id = id;
        this.nom = nom;
        this.lieu = lieu;
        this.date_heure = date_heure;
        this.prix = prix;
        this.capacite_max = capacite_max;
        this.theme = theme;
    }
}