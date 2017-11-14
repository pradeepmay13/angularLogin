import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userForm: FormGroup;
	responseData:any;
	constructor(private fb: FormBuilder, private authService:AuthService, private router: Router) { }

	ngOnInit() {
		this.userForm = this.fb.group({
			username: ['', Validators.required],
			userpassword: ['', Validators.required]
		})
	}
	formSubmit(){
		let frmData=this.userForm.value;

		this.authService.login(frmData)
	    .subscribe(
	      response => {
	        this.responseData = response;
	        if (response.execution === '1' ) {
	          localStorage.setItem('userData', JSON.stringify(this.responseData));
	          this.authService.loadUserInfo();
	          this.authService.userDetail();
	          this.router.navigate(['./home']);
	        } else {
	        }
	      }
	    )  

		/*if(this.userForm.value){
			localStorage.setItem("userData",JSON.stringify(this.userForm.value));
			this.authService.loadUserInfo();
		}
		else{
			localStorage.clear();
		}*/
	}
}
