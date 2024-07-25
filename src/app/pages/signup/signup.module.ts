import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment';

const routes: Routes = [
  {
    path:'',
    component:SignupComponent
  }
]

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
