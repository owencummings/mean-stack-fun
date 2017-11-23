import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { UserService } from '../services/user.service';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})


export class ReviewDetailComponent implements OnInit {

  review: any = {};

  constructor(private route: ActivatedRoute, private albumService: AlbumService,
  private reviewService: ReviewService, private userService: UserService) { }

  ngOnInit() {
    this.getReviewDetail(this.route.snapshot.params['id']);

  }

  getReviewDetail(id) {
    this.reviewService.getReview(id).then((res) => {
      this.review = res;
      console.log(this.review);
    }, (err) => {
      console.log(err);
    });
  }

}
