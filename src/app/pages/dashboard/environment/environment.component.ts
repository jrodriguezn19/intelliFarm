import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'environment',
  templateUrl: './environment.component.html',
})

export class EnvironmentComponent {

  temperature: number = 24;
  humidity: number = 72;
  wind: number = 28;
  UV: string = 'low';

  items: Observable<any[]>;
  environment: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    
    this.items = db.collection('items').valueChanges();
    this.environment = db.collection('environment').valueChanges();
    
  }

}
