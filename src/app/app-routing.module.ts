import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './auth/login/app-login.component';
import { AppHomeComponent } from './home/app-home.component';

const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AppLoginComponent },
    { path: 'home', component: AppHomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
