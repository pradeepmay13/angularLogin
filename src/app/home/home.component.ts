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
  onSelectFiles(evt: any){
    //const files = evt.target.files;
    //console.log(files);

    let frmData = this.homeForm.value;
    let fileBrowser = this.fileInput.nativeElement.files;
     
    //let fd=new FormData();
    //fd.append('email', this.homeForm.get('email').value);
    console.log(fileBrowser);
  }
  fileReset() {
      this.fileInput.nativeElement.value = '';
  }
  saveForm() {
  	/*let frmData = this.homeForm.value;
  	let fileBrowser = this.fileInput.nativeElement.files[0];
     
    let fd=new FormData();
    fd.append('email', this.homeForm.get('email').value);
    console.log(fd);*/


    const formModel = this.prepareSave();
    console.log(formModel);
  }

  private prepareSave(): any {
    const frmData = this.homeForm.value;
    let fileBrowser = this.fileInput.nativeElement.files[0];
    let input = new FormData();
    input.append('email', frmData.email);
    input.append('fileInput', fileBrowser);
    return input;
  }
  

}
