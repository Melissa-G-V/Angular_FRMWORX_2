import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path:'signin',
    loadChildren:()=> import('./pages/signin/signin.module')
    .then(m => m.SigninModule),

  },
  {
    path:'signup',
    loadChildren:()=> import('./pages/signup/signup.module')
    .then(m => m.SignupModule),
  },
  {
    path:'home',
    loadChildren:()=> import('./pages/home/home.module')
    .then(m => m.HomeModule), 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
