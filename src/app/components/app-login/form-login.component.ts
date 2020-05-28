import { Component } from '@angular/core';

@Component({
    selector: 'form-login',
    templateUrl:  './form-login.component.html'
})

export class FormLogin{

    constructor(){
        console.log('este es el login cargado');
    }
}