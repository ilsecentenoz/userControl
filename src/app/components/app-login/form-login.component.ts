import { Component } from '@angular/core';

@Component({
    selector: 'form-login',
    templateUrl:  './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})

export class FormLogin{

    constructor(){
        console.log('este es el login cargado');
    }
}