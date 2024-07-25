import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
}) 
export class HomeComponent {
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore,private router: Router) {
    this.items = this.afs.collection('colections').valueChanges();
  }
  ngOnInit():void{
    console.log('somenthing')
    }
}

