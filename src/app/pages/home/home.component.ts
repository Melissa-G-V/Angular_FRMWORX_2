import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable,map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items$: Observable<any[]>;
  Myitem: any;
  Editing = false;
  formb: FormGroup;
  searchTerm = ''; 
  filteredItems: any[] = []; 

  constructor(private afs: AngularFirestore, private fb: FormBuilder) {
    this.items$ = this.afs.collection('colections', ref => ref.orderBy('colection_nome')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
    
    
    this.formb = this.fb.group({
      colection_nome: [''],
      console: [''],
      logo: [''],
      portable: [''],
    });
  }

  ngOnInit() {
    this.items$.subscribe(items => {
      this.filteredItems = items.filter(item => 
        item.data.colection_nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
  

  click_me(item: any): void {

    this.Myitem = item;
    this.Editing = true;
  }

  editItem(item: any): void {
    this.Myitem = item;
    this.formb.patchValue(item.data());
    this.Editing = true;
  }

  deleteItem(itemId: string): void {
    this.afs.doc(`colections/${itemId}`).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error deleting document:', error);
    });
  }
  findItems(filterByPortable: boolean): void {
    this.items$.subscribe(items => {
      const filteredItems = items.filter(item => item.data.portable === String(filterByPortable));
    });
  }


  updateItem(): void {
    if (this.formb.valid) {
      const data = this.formb.value;
      const docId = this.Myitem.id;
      console.log(docId)

      this.afs.doc(`colections/${docId}`).update(data).then(() => {
        console.log('Update successful');
        this.Editing = false;
      }).catch((error) => {
        console.error('Error updating item:', error);
      });
    }
  }
}
