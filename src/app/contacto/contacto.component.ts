import { Component, OnInit, Renderer } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { FormDataService } from '../shared';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

	public myForm: FormGroup;

  thanks = false;

	title: string = 'My first AGM project';
  lat: number = -34.606176;
  lng: number = -58.424542;

  constructor(
  	private renderer: Renderer,
  	private fb: FormBuilder,
    private formData: FormDataService
	) { 
	}

  ngOnInit() {
  	this.buildForm();
  }

  buildForm() {
  	this.myForm = this.fb.group({
    	name: ['', Validators.required],
    	email: ['', Validators.required],
    	query: ['', Validators.required],
    });
  }

  submit(){
  	console.log(this.myForm.value);
    this.formData.saveReq(this.myForm.value);
  	this.myForm.reset();
    this.thanks = true;
    setTimeout(() => {
      this.thanks = false
    }, 5000);
  }

}
