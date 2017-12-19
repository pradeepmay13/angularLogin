import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

	model:any={
		name:'',
	};
	fileDetail:any;
 	@ViewChild('fileInput') fileInput;
  constructor(private formService:FormService, public http :Http) { }

  ngOnInit() {
  }
  uploadFile(event){
  	let elem=event.target;
  	if(elem.files.length>0){
  		let formData=new FormData();
  		this.fileDetail=formData.append('file', elem.files[0]);
  		//this.http.post('http://localhost/slim/upload.php', formData)
  		//.subscribe((data)=>{
  		//	console.log('Got Data', data);
  		//},(error)=>{
  		//	console.log('Getting error', error);
  		//})
  	}
  }

   uploadMultipleFile(event){
  	let elem=event.target;
  	if(elem.files.length>0){
  		let formData=new FormData();

  		for(let i=0;i<elem.files.length;i++){
  			//console.log()
  			formData.append('file[]', elem.files[i]);
  		}
  		this.http.post('http://localhost/slim/upload.php', formData)
  		.subscribe((data)=>{
  			console.log('Got Data', data);
  		},(error)=>{
  			console.log('Getting error', error);
  		})
  	}
   }
  saveData(){
  	let fileBrowser = this.fileInput.nativeElement.files[0];
  	let formData=new FormData();
	formData.append('file', fileBrowser);
	formData.append('modelData', JSON.stringify(this.model));
  	this.http.post('http://localhost/slim/upload.php', formData)
  	.subscribe((data)=>{
  		console.log('Got Data', data);
  	},(error)=>{
  		console.log('Getting error', error);
  	})

  }
}
