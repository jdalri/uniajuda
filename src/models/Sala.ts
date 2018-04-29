export class Sala {
    key?: string;
    codigoProfessor: string;
    nomeSala: string;
    dia: string;
    bloco: string;

    constructor(nomeSala: string, bloco: string)
    {
        this.nomeSala = nomeSala;
        this.bloco = bloco;
    }
}