import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {

  constructor(private http: Http) { }

  createReview(review){
    return new Promise((resolve, reject) => {
        this.http.post('/api/review', review)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  getAllReviews() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/review')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAlbumReviews(id){
    return new Promise((resolve, reject) => {
      this.http.get('/api/review/album/'+ id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUserReviews(id){
    return new Promise((resolve, reject) => {
      this.http.get('/api/review/user/'+ id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }




}
