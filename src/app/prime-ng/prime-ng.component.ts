import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent implements OnInit {
	fileData:any;
	response:any;
	constructor(private formService:FormService) { }

	ngOnInit() {
	}

	fileuploaderFileChange(files: FileList){
		console.log(files);
		this.fileData=files;
		this.formService.upload(this.fileData).subscribe(res=>this.response=res);
	}

}
