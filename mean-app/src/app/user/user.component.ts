import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user = {}
  reviews: any;

  constructor(private userService: UserService, private route: ActivatedRoute,
  private reviewService: ReviewService) { }


  ngOnInit() {
      this.getUserDetail(this.route.snapshot.params['id']);
      this.getUserReviews(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.userService.getUser(id).then((res) => {
      this.user = res;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
  }

  getUserReviews(id){
    this.reviewService.getUserReviews(id).then((res) => {
      this.reviews = res;
      console.log(this.reviews);
    }, (err) => {
      console.log(err);
    });
  }


}
