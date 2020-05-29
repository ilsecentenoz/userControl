import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class AppNavbarComponent implements OnInit {
  public logged = false;
  // public user: any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) {}

  async ngOnInit() { }

  async logout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);

    }
    catch(error){
      console.log('erro logout');
    }
    this.authSvc.logout();
  }

}
