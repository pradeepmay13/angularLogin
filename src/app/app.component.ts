import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message:any;
  subscription:Subscription;
  constructor(private sharedService:SharedService) { 
  	this.subscription=this.sharedService.getMessage().subscribe(message=>{this.message=message;});
  }
}
