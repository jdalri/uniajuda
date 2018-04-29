import { Usuario } from './Usuario';

export interface SolicitacaoInterface {
    key?: string;
    // codigo: string;
    nomeAmarelinho: string;
    professor: Usuario;
    status: string;
    dataCriacao: string;

    // constructor (professor: Usuario)
    // {
    //     let data = new Date();

    //     this.professor = professor;
    //     this.nomeAmarelinho = '';
    //     this.status = 'Pendente'
    //     this.dataCriacao = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes();
    // }
}