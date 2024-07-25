import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form!:FormGroup; 
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: RegistrationService,
    private router: Router,


    // private router: Router,
  ){}
  ngOnInit():void{
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]

    })
  }
  register(): void {
    if (this.form.valid) {
      this.authService.register(this.form.value.email,this.form.value.password).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/home']); // Navigate to home page or any other page
        },
        error: (error) => {
          console.error(error);
          // Handle registration errors
        }
      });
    }
  }
}
