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

    constructor() {}
}