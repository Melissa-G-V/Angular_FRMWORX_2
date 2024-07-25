import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../../../service/firestore.service';

@Component({
  selector: 'app-colections',
  templateUrl: './colections.component.html',
  styleUrl: './colections.component.css'
})
export class ColectionsComponent {
  // items: Observable<any[]>;
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
      this.firestoreService.saveFormData('colections', data).then(() => {
        console.log('Data saved successfully');
      }).catch((error) => {
        console.error('Error saving data:', error);
      });
    }
  }}
