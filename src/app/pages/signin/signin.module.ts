import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment';
import {MatFormFieldModule} from '@angular/material/form-field';


const routes: Routes = [
    {
      path:'',
      component:SigninComponent
    }
]


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
