export class Goodie {
    id!: number;
    nom!: string;
    quantitee!: number;
    description!: string;
    cout!: number;

    constructor(id: number, nom: string, quantite: number, description: string, cout: number) {
        this.id = id;
        this.nom = nom;
        this.quantitee = quantite;
        this.description = description;
        this.cout = cout;

    }

}
