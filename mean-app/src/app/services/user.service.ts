import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const ENV_PORT = 'http://localhost:3000'

@Injectable()
export class UserService {

  constructor(private http: Http) { }


  loginUser(){ // just doing a basic read for this, adding creds and verification next
    return new Promise((resolve, reject) => {
    this.http.get(ENV_PORT + 'api/user/login')
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  loginAs(id){
    return new Promise((resolve, reject) => {
    this.http.get(ENV_PORT + 'api/user/login/' + id)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(ENV_PORT + '/api/user')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
        this.http.post(ENV_PORT + '/api/user', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  getUser(id) {
    return new Promise((resolve, reject) => {
        this.http.get(ENV_PORT + '/api/user/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }



}
