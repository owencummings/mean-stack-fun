import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


const ENV_PORT = 'http://localhost:3000'

@Injectable()
export class AlbumService {

  constructor(private http: Http) { }

  getAllAlbums() {
    return new Promise((resolve, reject) => {
      this.http.get(ENV_PORT + '/api/album')
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
        this.http.get(ENV_PORT + '/api/album/' + id)
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
        this.http.post(ENV_PORT + '/api/album', data)
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
        this.http.put(ENV_PORT + '/api/album/'+id, data)
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
        this.http.delete(ENV_PORT + '/api/album/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
