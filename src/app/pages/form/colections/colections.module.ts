import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColectionsComponent } from './colections.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';


const routes: Routes = [
  {
    path:'',
    component:ColectionsComponent
  }
]

@NgModule({
  declarations: [
    ColectionsComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,

    
  ],
  exports: [ColectionsComponent]
})
export class ColectionsModule { }
