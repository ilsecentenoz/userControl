import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router'


@Component({
    selector: 'app-login',
    templateUrl:  './app-login.component.html',
    styleUrls: ['./app-login.component.scss'],
    providers: [AuthService],
})

export class AppLoginComponent implements OnInit{
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private authSvc:AuthService, private router: Router){
        console.log('este es el login cargado');
    }

    ngOnInit() :void {}
    
    async onLogin(){
        const {email, password} = this.loginForm.value;
        try{
            const user= await this.authSvc.login(email, password);
            if(user){
                this.router.navigate(['/home']);
            }
        }
        catch(error){
            console.log('error');
        }
        this.authSvc.login(email, password);
    }
}

