import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService {
  logIn(login: string, password: string): Observable<any> {
    const users = [
      {
        login: 'mirek',
        name: 'Mirosław',
        lastname: 'Koczorek',
        password: 'mirek123',
      }
    ]

    return of(users.find(user => user.login === login && user.password === password));
  }
}
