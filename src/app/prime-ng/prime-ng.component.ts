import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormService } from '../services/form.service';
import { Hero }    from '../properties/hero';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent implements OnInit {
	constructor(private formService:FormService) { }

	ngOnInit() {
	}

	powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  	submitted = false;

  	onSubmit() { this.submitted = true; }

  	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }

  	newHero() {
    	this.model = new Hero(42, '', '');
  	}

	//////// NOT SHOWN IN DOCS ////////

	// Reveal in html:
	//   Name via form.controls = {{showFormControls(heroForm)}}
	//showFormControls(form: any) {
	///return form && form.controls['name'] &&
	//  form.controls['name'].value; // Dr. IQ
	//}

}
