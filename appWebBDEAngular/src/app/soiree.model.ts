export class Soiree{
    id!: number;
    nom!: string;
    lieu!: string;
    date!: string;
    heure!: string;
    prix!: number;
    capacite!: number;
    theme!: string;

    constructor(id: number, nom: string, lieu: string, date: string, heure: string, prix: number, capacite: number, theme: string) {
        this.id = id;
        this.nom = nom;
        this.lieu = lieu;
        this.date = date;
        this.heure = heure;
        this.prix = prix;
        this.capacite = capacite;
        this.theme = theme;
    }
}