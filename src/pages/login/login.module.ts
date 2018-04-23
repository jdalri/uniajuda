import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
    declarations: [
        LoginPage,
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
    ],
    // permite o carregamento da página somente quando ela é acessada
    exports: [
        LoginPage
    ]
})
export class LoginPageModule {}