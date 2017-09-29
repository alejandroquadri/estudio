import { Component, OnInit, Renderer } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	public myForm: FormGroup;

	title: string = 'My first AGM project';
  lat: number = -34.606176;
  lng: number = -58.424542;

  constructor(
  	private renderer: Renderer,
  	private fb: FormBuilder,
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
  	this.myForm.reset();
  }

}
