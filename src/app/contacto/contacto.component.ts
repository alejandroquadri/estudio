import { Component, OnInit, Renderer } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { FormDataService } from '../shared';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  animations: [
    trigger('in', [
      state('hide', style({
        visibility: 'hidden',
        opacity: 0
      })),
      state('show',   style({
        visibility: 'visible',
        opacity: 1
      })),
      transition('hide => show', animate('1000ms')),
      transition('show => hide', animate('1000ms'))
    ])
  ]
})
export class ContactoComponent implements OnInit {

	public myForm: FormGroup;

  thanks = 'hide';

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
    this.thanks = 'show';
    setTimeout(() => {
      this.thanks = 'hide'
    }, 5000);
  }

}
