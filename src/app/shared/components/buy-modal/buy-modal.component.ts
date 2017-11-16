import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from '../../services';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {

	@Input() data;
	datos: any;
	public myForm: FormGroup;
	thanks = false;
	logo = "././assets/images/LogoNegro.svg";

  constructor(
  	public activeModal: NgbActiveModal,
  	private fb: FormBuilder,
  	private formData: FormDataService
	) { }

  ngOnInit() {
  	this.datos = JSON.parse(this.data);
  	this.buildForm();
  }

  buildForm() {
  	this.myForm = this.fb.group({
    	name: ['', Validators.required],
    	telephone: ['', Validators.required],
    	email: ['', Validators.required]
    });
  }

  submit() {
  	this.thanks = true;
  	this.datos['client'] = this.myForm.value;
  	let form = {
  		product: this.datos.name,
  		client: this.myForm.value,
  		quantity: this.datos.bought.quantity,
  		color: this.datos.bought.color,
  		prize: this.datos.prize,
  		fullfilled: false
  	}
  	console.log(this.datos, form);
    this.formData.addOrder(form);
  	this.myForm.reset();
  }

}
