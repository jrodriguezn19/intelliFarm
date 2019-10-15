import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from 'rxjs';


@Component({
  selector: 'pigs-component',
  templateUrl: './pigs.component.html',
})

export class PigsComponent {

    pigs: Observable<any>;
  
  constructor(db: AngularFireDatabase) {
    
    this.pigs = db.object('pigs').valueChanges();
    
  }

}
