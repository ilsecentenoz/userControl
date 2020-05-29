import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
