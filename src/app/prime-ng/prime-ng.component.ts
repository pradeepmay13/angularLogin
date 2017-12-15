import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormService } from '../services/form.service';
import { MasterDataService } from '../services/master-data.service';
import { Hero }    from '../properties/hero';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent implements OnInit {

	countries:any;
	states:any;
	powers:any;
	model={
		name:'',
		email:'',
		power:'',
		country:'',
		state:'',
		uploadFile:'',
	};
	constructor(private formService:FormService, public masterdataService :MasterDataService) { }

	ngOnInit() {
		this.countries=this.masterdataService.getCountries();
		this.powers=this.masterdataService.getPowers();
	}
	changeCountryState(country){
		this.states=this.masterdataService.getStates().filter(statesVal=>statesVal.cid===country)
	}
	

	//model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  	submitted = false;

  	onSubmit() { this.submitted = true; }

  	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }

  	saveForm(){
  		console.log(this.model);
  	}
	//////// NOT SHOWN IN DOCS ////////

	// Reveal in html:
	//   Name via form.controls = {{showFormControls(heroForm)}}
	//showFormControls(form: any) {
	///return form && form.controls['name'] &&
	//  form.controls['name'].value; // Dr. IQ
	//}

}
