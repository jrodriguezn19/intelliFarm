import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
//Firebase
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
//import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-app',
  template: `   
                <!--
                <br>
                <h1>this is the top one</h1>
                <h1>Below is the result for the real database</h1>                
                <br>
                
                
                
                <ul>
                  <li *ngFor="let item of items | async">
                    <h1>{{ item.description }}</h1>
                  </li>
                </ul>
                
                <br>
                <h1>HOLAAAAAAAAAAAA2 :)</h1>
                <br>
                <h1>HOLA! 3 :)</h1>  -->
                <router-outlet></router-outlet>
            `,
})
export class AppComponent implements OnInit {


  items: Observable<any[]>;

  constructor(private analytics: AnalyticsService, db: AngularFirestore) {
    
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
}
