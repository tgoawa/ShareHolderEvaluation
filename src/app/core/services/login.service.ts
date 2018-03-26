import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

const api = environment.envApi;
@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  isValid(user) {
    return this.http.post(api + 'UserService/IsUserValid/', user)
    .map(response => response.json(), error => console.log(error));
  }

}
