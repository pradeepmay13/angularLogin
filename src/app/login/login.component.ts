import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userForm: FormGroup;
	constructor(private fb: FormBuilder, private authService:AuthService) { }

	ngOnInit() {
		this.userForm = this.fb.group({
			username: ['', Validators.required],
			userpassword: ['', Validators.required]
		})
	}
	formSubmit(){
		//console.log(this.userForm.value);
		if(this.userForm.value){
			localStorage.setItem("userData",JSON.stringify(this.userForm.value));
			this.authService.loadUserInfo();
		}
		else{
			localStorage.clear();
		}
	}

}
