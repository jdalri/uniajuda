import { Usuario } from './../../models/Usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class InformationServiceProvider 
{
    private _usuario: Usuario;

    constructor() {}

    get usuario()
    {
        return this._usuario;
    }
    
    setUsuario(usuario: Usuario)
    {
        this._usuario = usuario;
    }
}