import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/user')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveUser(data) {
    console.log('Doin it')
    return new Promise((resolve, reject) => {
        this.http.post('/api/user', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


}
