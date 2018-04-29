import { SolicitacoesPage } from './../solicitacoes/solicitacoes';
import { InformationServiceProvider } from './../../providers/information-service/information-service';
import { Usuario } from './../../models/Usuario';
import { FinalizadoPage } from './../finalizado/finalizado';
import { AtendendoPage } from './../atendendo/atendendo';
import { PendentePage } from './../pendente/pendente';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage 
{
    tab1Root = PendentePage.name;
    tab2Root = AtendendoPage.name;
    tab3Root = FinalizadoPage.name;
    tab4Root = SolicitacoesPage.name;

    private _usuarioLogado: Usuario;

    constructor(private _informationService: InformationServiceProvider)
    {
        this._usuarioLogado = this._informationService.usuario;
    }
}