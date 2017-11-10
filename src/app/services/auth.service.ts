import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
declare var window: any;

@Injectable()
export class AuthService {
  loggedInUser: any;
  isUserLoggedIn: boolean = false;
  constructor() { }

  loadUserInfo() {
    const user = localStorage.getItem('userData') ? localStorage.getItem('userData') + '' : '';
    if (user) {
      this.loggedInUser = JSON.parse(user);
      if (this.loggedInUser) {
        this.isUserLoggedIn = true;
      }
    }
    else {
    	this.isUserLoggedIn = false;
    }
  }
  getUserData(){
	let username
 	username = this.loggedInUser.userName;
 	return username
  }

}
