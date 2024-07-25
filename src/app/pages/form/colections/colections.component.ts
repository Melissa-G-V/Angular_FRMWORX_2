import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../../../service/firestore.service';

@Component({
  selector: 'app-colections',
  templateUrl: './colections.component.html',
  styleUrl: './colections.component.css'
})
export class ColectionsComponent {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private firestoreService: FirestoreService,
    private router: Router, 
    

  ) {
    this.form = this.formBuilder.group({
      colection_nome: ['',[Validators.required]],
      console: ['',[Validators.required]],
      logo: ['',[Validators.required]],
      portable: ['',[Validators.required]],
    })
  }


  enviar(): void {
    if (this.form.valid) {
      const data = this.form.value;
      let promise: Promise<void>;
      if (data.id) { 
        promise = this.firestoreService.updateFormData('colections', data.id, data);
      } else {
        promise = this.firestoreService.saveFormData('colections', data);
      }
      promise.then(() => {
        console.log('SALVO');

      }).catch((error) => {
        console.error('ERRO:', error);
      });
    }
  }}
