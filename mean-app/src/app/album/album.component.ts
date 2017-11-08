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

  constructor(private albumService: AlbumService, private userService: UserService) { }

  ngOnInit() {
    this.getAlbumList();
    this.getUserList();
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
      console.log(this.albums);
    }, (err) => {
      console.log(err);
    });
  }

}
