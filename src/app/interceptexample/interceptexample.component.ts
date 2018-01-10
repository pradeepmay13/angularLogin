import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-interceptexample',
  templateUrl: './interceptexample.component.html',
  styleUrls: ['./interceptexample.component.css']
})
export class InterceptexampleComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  method1Call(){
  	const data = {name: 'Brad'};
  	this.httpClient.get("http://localhost/slim/testinterceptor.php").subscribe(
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
  	this.httpClient.get("https://jsonplaceholder.typicode.com/user12").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

}
