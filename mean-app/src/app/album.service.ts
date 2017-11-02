import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumService {

  constructor(private http: Http) { }

  getAllAlbums() {
    return new Promise((resolve, reject) => {
      this.http.get('/album')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showAlbum(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/album/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveAlbum(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/album', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateAlbum(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/album/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteAlbum(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/album/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
