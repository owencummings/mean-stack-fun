import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { UserService } from '../services/user.service';
import { RouterModule, RouterLink, Routes, ParamMap } from '@angular/router';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: any;
  users: any;
  loggedUser: any = null;

  constructor(private albumService: AlbumService, private userService: UserService) { }

  ngOnInit() {
    this.getAlbumList();
    this.getUserList();
    if (localStorage.getItem('name')){
      this.loggedUser = {};
      this.loggedUser.name = localStorage.getItem('name');
    }
    //console.log(localStorage.getItem('name'));
    //this.getLoggedUser();
  }

  storageSync(){
    this.loggedUser = {}
    this.loggedUser.name = localStorage.getItem('username');
    this.loggedUser.id = localStorage.getItem('_id');
    console.log(this.loggedUser);
  }


  getAlbumList() {
    this.albumService.getAllAlbums().then((res) => {
      this.albums = res;
      console.log(this.albums);
    }, (err) => {
      console.log(err);
    });
  }

  getUserList(){
    this.userService.getAllUsers().then((res) => {
      this.users = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLoggedUser() {
    this.userService.loginUser().then((res) => {
      console.log(res);
      //this.loggedUser = res;
      for (var key in res){
        localStorage.setItem(key, res[key]);
      }
      this.storageSync();
    }, (err) => {
      console.log(err);
    });
  }

  loginAsUser(id){
    console.log('Attempting login as user.')
    this.userService.loginAs(id).then((res) => {
      console.log(res);
      for (var key in res){
        localStorage.setItem(key, res[key]);
      }
      this.storageSync();
      //this.loggedUser = res;
      /*
      for (var key in res){
        localStorage.setItem(key, res[key]);
      }
      this.loggedUser = {};
      this.loggedUser.name = localStorage.getItem('name');
      console.log(localStorage.getItem('name'))
      */
    }, (err) => {
      console.log(err);
    });
  }


  logOut(){
    localStorage.clear();
    this.loggedUser = null;
  }

}
