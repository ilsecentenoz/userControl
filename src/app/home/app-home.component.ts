import { Component, OnInit} from '@angular/core';
import {AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <ul>
      <li *ngFor="let usuario of usuarios | async">
        {{ usuario.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./app-home.component.scss'],
  providers: [AuthService]
})
export class AppHomeComponent implements OnInit{
  usuarios: any;
  constructor(private authSvc: AuthService){ 
    this.authSvc.returnUsuarios().subscribe(usuario =>{
      this.usuarios= usuario;
      console.log(this.usuarios);
    })
   }

   ngOnInit() {}

}
