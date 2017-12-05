import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup;
  response:any;
  selectedFiles:any;
  @ViewChild('fileInput') fileInput;
  constructor(private fb: FormBuilder, private elem: ElementRef, private formService:FormService) {}

  ngOnInit() {
  	this.homeForm = this.fb.group({
  		email: [],
  		exampleSelect1: [],
  		exampleSelect2: [],
  		exampleTextarea: [],
  		fileUpload : this.fb.group({
  			exampleInputFile: []
  		}),
  		//optionsRadios : [],
  		//agreement : []
  	})
  }
  onSelectFiles(evt: any){
    this.selectedFiles = evt.target.files;
    console.log(this.selectedFiles);
  }
  fileReset() {
      this.fileInput.nativeElement.value = '';
  }
  saveForm() {

    const formModel = this.prepareSave();
    this.formService.upload(formModel).subscribe(res=>this.response=res);
  }

  private prepareSave(): any {
    let fileBrowser;    
    let input = new FormData();
    let frmData = this.homeForm.value;
    for(let i=0;i<this.fileInput.nativeElement.files.length;i++){
      input.append('fileInput[]', this.fileInput.nativeElement.files[i]);
    }
    input.append('email', frmData.email);
    input.append('exampleSelect1', frmData.exampleSelect1);
    input.append('exampleSelect2', frmData.exampleSelect2);
    input.append('exampleTextarea', frmData.exampleTextarea);
    
    return input;
  }
  

}

/*
-------------------Save Form-------------------
let frmData = this.homeForm.value;
    let fileBrowser = this.fileInput.nativeElement.files[0];
     
    let fd=new FormData();
    fd.append('email', this.homeForm.get('email').value);
    console.log(fd);

-------------------onSelectFiles-------------------
    //const files = evt.target.files;
    //console.log(files);

    let frmData = this.homeForm.value;
    let fileBrowser = this.fileInput.nativeElement.files;
     
    //let fd=new FormData();
    //fd.append('email', this.homeForm.get('email').value);
    console.log(fileBrowser);
*/