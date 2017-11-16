import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user = {}

  constructor(private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit() {
      this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.userService.getUser(id).then((res) => {
      this.user = res;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
  }


}
