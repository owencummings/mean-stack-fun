import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: any = {};
  review: any = {};
  reviews: any;

  constructor(private route: ActivatedRoute, private albumService: AlbumService,
  private reviewService: ReviewService) { }

  ngOnInit() {

  //this.route.snapshot.params
    // (+) converts string 'id' to a number
    //.switchMap(() => this.getAlbumDetail(+params['id']));

    this.getAlbumDetail(this.route.snapshot.params['id']);
  // (+) converts string 'id' to a number
    this.getReviews(this.route.snapshot.params['id']);

  }

  saveReview(){
    var newReview: any = {};

    newReview.content = this.review.content
    newReview.rating = this.review.rating
    newReview.author = localStorage.getItem('username');
    newReview.authorId = localStorage.getItem('_id');
    newReview.album = this.album.title;
    newReview.albumId = this.album._id;

    console.log(newReview);

    this.reviewService.createReview(newReview);
    this.getReviews(this.route.snapshot.params['id']);
  }


  getAlbumDetail(id) {
    this.albumService.showAlbum(id).then((res) => {
      this.album = res;
      console.log(this.album);
    }, (err) => {
      console.log(err);
    });
  }

  getReviews(id){
    this.reviewService.getAlbumReviews(id).then((res) => {
      this.reviews = res;
      console.log(this.reviews);
    }, (err) => {
      console.log(err);
    });
  }

}
