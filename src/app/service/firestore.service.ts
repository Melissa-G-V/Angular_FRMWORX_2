import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  saveFormData(collection: string, data: any): Promise<any> {
    return this.firestore.collection(collection).add(data);
  }
  
  updateFormData(collection: string, documentId: string, data: any): Promise<void> {
    return this.firestore.doc(`${collection}/${documentId}`).update(data);
  }

  deleteFormData(collection: string, documentId: string): Promise<void> {
    return this.firestore.doc(`${collection}/${documentId}`).delete();
  }
}
