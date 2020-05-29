import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppLoginComponent } from './app-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AppLoginComponent]
})
export class LoginPageModule {}