import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ColectionsComponent } from '../form/colections/colections.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes= [
  {
    path:'',
    component:HomeComponent
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    ColectionsComponent

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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
  ]
})
export class HomeModule { }
