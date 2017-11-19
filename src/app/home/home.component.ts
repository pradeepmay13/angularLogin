import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup;
  @ViewChild('fileInput') fileInput;
  constructor(private fb: FormBuilder, private elem: ElementRef) {}

  ngOnInit() {
  	this.homeForm = this.fb.group({
  		email: [],
  		exampleSelect1: [],
  		exampleSelect2: [],
  		exampleTextarea: [],
  		fileUpload : this.fb.group({
  			exampleInputFile: []
  		}),
  		optionsRadios : [],
  		agreement : []
  	})
  }
  saveForm() {
  	let frmData = this.homeForm.value;
  	let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);

  	console.log(formData);
  	}
  }
  

}
