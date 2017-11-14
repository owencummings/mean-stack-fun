import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {

  constructor( private http: Http) { }



  ngOnInit(){
    //nothing
  }

  saveToken(token){
    localStorage['mean-token'] = token; //do i need to use setItem()?
  }

  getToken(){
   return localStorage['mean-token'];
 };

 logout() {
   localStorage.removeItem('mean-token');
 };

 isLoggedIn(){
   //token uses _id, name, email, and exp
   var token = this.getToken()
   var payload;

   if(token){
     //need to do this stuff because the token is encoded?
     payload = token.split('.')[1];
     payload = atob(payload);
     payload = JSON.parse(payload);

     return payload.exp > Date.now() / 1000;

   } else {
     return false;
   }
 }

currentUser() {
  if(this.isLoggedIn()){
    var token = this.getToken();

    //need to do this stuff because the token is encoded?
    var payload = token.split('.')[1];
    payload = atob(payload);
    payload = JSON.parse(payload);
    return {
      email : payload.email,
      name : payload.username
    };
  }
}


register(user) {
  console.log('Trying to register');
  return new Promise((resolve, reject) => {
    this.http.post('/api/register', user)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
        this.saveToken(res.token);
        console.log('Something great');
      }, (err) => {
        reject(err);
      });
  });
};

login(user) {
  return new Promise((resolve, reject) => {
    this.http.post('/api/login', user)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
        this.saveToken(res.token);
      }, (err) => {
        reject(err);
      });
  });
};

}
