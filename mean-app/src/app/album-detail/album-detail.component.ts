import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album = {};

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
        this.getAlbumDetail(this.route.snapshot.params['id']);
  }


  getAlbumDetail(id) {
    this.albumService.showAlbum(id).then((res) => {
      this.album = res;
      console.log(this.album);
    }, (err) => {
      console.log(err);
    });
  }

}
