import { Sala } from './Sala';

export class Usuario {
    key?: string;
    codigo?: string;
    nome: string;
    senha: string;
    cpf: string;
    tipo: string; // Professor ou Amarelinho
    sala: Sala;

    constructor (nome: string, cpf: string, senha: string, tipo: string, sala?: Sala)
    {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.tipo = tipo;
        this.sala = sala;
    }
}