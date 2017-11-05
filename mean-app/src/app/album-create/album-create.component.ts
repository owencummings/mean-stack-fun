import { Component, OnInit } from '@angular/core';
//import { Router, RouterModule, Routes } from '@angular/router';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  album = {};

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  saveAlbum() {
    this.albumService.saveAlbum(this.album).then((result) => {
      //let id = result['_id'];
      //this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
