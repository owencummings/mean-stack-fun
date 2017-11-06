import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { RouterModule, RouterLink, Routes, ParamMap } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: any;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.albumService.getAllAlbums().then((res) => {
      this.albums = res;
      console.log(this.albums);
    }, (err) => {
      console.log(err);
    });
  }

}
