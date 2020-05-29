import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface Usuario { name: string; }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  
  constructor(public afAuth: AngularFireAuth, private readonly db: AngularFirestore) {
    this.usuariosCollection = db.collection<Usuario>('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  async login(email: string, password: string): Promise<firebase.User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    }
    catch(error){
      console.log('No se puede realizar esta acción intentelo más tarde');
    }
  }

  returnUsuarios(){
    return this.usuarios;
  }
}
