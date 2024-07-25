
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class RegistrationService {
//   constructor(private httpClient: HttpClient) {}
//   register(user: { email: string; password: string }): Observable<any> {
//     return this.httpClient.post('/api/register', user).pipe(
//       catchError(error => {
//         console.error(error);
//         return throwError(error);
//       })
//     );
//   }
// }

export class RegistrationService {

  constructor() { }

  register(email: string, password: string): Observable<any> {
    const auth = getAuth();
    console.log(auth)
    return from(createUserWithEmailAndPassword(auth, email, password))
      .pipe(
        
        map(userCredential => {
          const user = userCredential.user;
          
          console.log(user)
          return user;
        }),
        catchError(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          throw new Error(errorMessage); 
        })
      );
  }

  // Existing methods...
}