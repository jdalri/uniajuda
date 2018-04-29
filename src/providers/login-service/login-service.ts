import { UsuarioMock } from './../../mockups/usuariosMock';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceProvider 
{
    constructor() {}

    fazerLogin(cpf: string, senha: string)
    {
        return new Promise((resolve, reject) => {
                let mock = new UsuarioMock();
                let usuario = mock.fazerLogin(cpf, senha);

                if (usuario == false)
                    reject(false);
                else
                    resolve(usuario);
            }
        );
    }
}