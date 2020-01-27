import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
//Firebase
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
//import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-app',
  template: `   
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
