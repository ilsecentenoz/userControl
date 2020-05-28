import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AppLoginComponent} from './auth/login/app-login.component';
import { AppHomeComponent } from './home/app-home.component';
import { AppNavbarComponent } from './shared/navbar/navbar.component'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppHomeComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
