export class Professor {
    key?: string;
    codigo: string;
    nome: string;
    senha: string;
    cpf: string;

    constructor (nome: string, cpf: string, senha: string)
    {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }
}