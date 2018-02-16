import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ya-table',
  templateUrl: './ya-table.component.html',
  styleUrls: ['./ya-table.component.css']
})
export class YaTableComponent implements OnInit {
  paramValue:any;
  constructor(private route: ActivatedRoute) { 
  	this.route.params.subscribe( params => this.paramValue=params ); // method 1 to get parameter value

  }

  ngOnInit() {
  	//console.log(this.paramValue);
  	let paramters=this.route.snapshot.params; // method 2 to get parameter value
  	console.log(paramters);

  }
  title = 'app works!';
  games = [
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assassins on King",
      "genre": "Adventure"
    }
  ];  
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  p: number = 1;

}
