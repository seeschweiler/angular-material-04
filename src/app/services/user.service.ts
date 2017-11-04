import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getUser(): Observable<User[]> {
    return this.http
      .get(this.serviceUrl)
      .map(response => response.json() as User[]);
  }

}
