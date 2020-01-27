import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from 'rxjs';


@Component({
  selector: 'flowers-component',
  templateUrl: './flowers.component.html',
})

export class FlowersComponent {

  environment: Observable<any>;
  
  constructor(db: AngularFireDatabase) {
    
    this.environment = db.object('environment').valueChanges();
  }

}
