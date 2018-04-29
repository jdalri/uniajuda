import { Usuario } from './../models/Usuario';

export class UsuarioMock 
{
    fazerLogin(cpf: string, senha: string)
    {
        if (cpf == null || cpf == '' || cpf.length != 11 || senha == null || senha == '')
            return false;

        if (cpf == '11111111111' && senha == '123123')
            return new Usuario('João Professor', cpf, senha, 'Professor');
        else if (cpf == '22222222222' && senha == '123123')
            return new Usuario('José Amarelinho', cpf, senha, 'Amarelinho');
        else
            return false;
    }
}