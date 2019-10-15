import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from 'rxjs';


@Component({
  selector: 'cows-component',
  templateUrl: './cows.component.html',
})

export class CowsComponent {

  cows: Observable<any>;
  
  constructor(db: AngularFireDatabase) {
    
    this.cows = db.object('cows').valueChanges();
    
  }

}
