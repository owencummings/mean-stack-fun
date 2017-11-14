import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { RouterModule, RouterLink, Routes, ParamMap, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user = {}

  constructor( private userService: UserService) { }

  ngOnInit() {
  }



  saveUser() {
    this.userService.saveUser(this.user).then((result) => {
      //let id = result['_id'];
      //this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
