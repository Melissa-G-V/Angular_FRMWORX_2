import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent implements OnInit{
  form!: FormGroup;
  isLoggingIn  = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authentificationService: AuthenticationService
  ){}
  ngOnInit():void{
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]

    })
  }

  login() {
    this.isLoggingIn = true;
    this.authentificationService.signIn(this.form.value.email, this.form.value.password)
      .subscribe({
        next: () => {
          console.log(this.form.value);
          this.router.navigate(['/home']); // Navigate to home page or any other page
        },
        error: error => {
          this.isLoggingIn = false;
          console.error(error);
        }
      });
}}
