import { Component, OnInit } from '@angular/core';
//import { CategoryPipe } from '../pipes/category.pipe';
//import { OrderbyPipe } from '../pipes/orderby.pipe';
import * as _ from 'underscore';
import { PagerService } from '../services/pager.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], 
  providers:[PagerService]
})
export class ListComponent implements OnInit {
  
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  direction: number;

   // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private pagerService: PagerService) { }

  ngOnInit() {
  	this.recordData();
  }

  recordData(){
    this.records= [
      { CategoryID: 1,  CategoryName: "Beverages", Description: "Coffees, teas" },
      { CategoryID: 2,  CategoryName: "Condiments", Description: "Sweet and savory sauces" },
      { CategoryID: 3,  CategoryName: "Confections", Description: "Desserts and candies" },
      { CategoryID: 4,  CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
      { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
      { CategoryID: 6,  CategoryName: "Beverages", Description: "Beers, and ales" },
      { CategoryID: 7,  CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
      { CategoryID: 8,  CategoryName: "Confections", Description: "Sweet breads" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
     ];
     this.allItems = this.records;

      // initialize to page 1
      this.setPage(1);
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.pagerService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
