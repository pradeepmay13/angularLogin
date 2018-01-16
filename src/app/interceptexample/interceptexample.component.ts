import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserResponse } from './userresponse.type';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-interceptexample',
  templateUrl: './interceptexample.component.html',
  styleUrls: ['./interceptexample.component.css']
})

export class InterceptexampleComponent implements OnInit {
  message:any;
  subscription:Subscription;
  constructor(private http: HttpClient, private sharedService:SharedService) { 
  	
  }
  sendMessage():void{
  	this.sharedService.sendMessage('Hi this is send message');
  }
  clearMessage():void{
  	this.sharedService.clearMessage()
  }

  ngOnInit() {
  	
  }
  method1Call(){
  	let username: string; 
  	let password: string;
  	this.http.post("http://localhost/slim/testinterceptor.php", { username: "pradeep", password: "temporary123" }).subscribe(
  		success=>{
  			console.log('data loaded successfully');
  			console.log(success);
  		},
  		error=>{
  			console.log('data loading fail');
  		}
	)
  		

  }
  method2Call(){
  	this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }
  method3Call(){
  	const req = this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}

/*this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
      data => {
        console.log("User Login: " + data.login);
        console.log("Bio: " + data.bio);
        console.log("Company: " + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );*/