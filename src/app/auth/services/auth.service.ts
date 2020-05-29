import { User } from 'firebase';
import {first} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password
      );
      return result;
    }
    catch(error){
      console.log('Este usuario no tiene acceso');
    }
  }
  async logout(){
    try{
      await this.afAuth.signOut();
      //redireccionar al login
    }
    catch(error){
      console.log('No se puede realizar esta acción intentelo más tarde');
    }
  }
  getUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  
}
