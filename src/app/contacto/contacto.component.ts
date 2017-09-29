import { Component, OnInit, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	title: string = 'My first AGM project';
  lat: number = -34.606176;
  lng: number = -58.424542;

  element: any;
  mapHeigth: any;
  @ViewChild('dataContacto') dataContacto: any;
  @ViewChild('map') map: any;  

  constructor(
  	private renderer: Renderer
	) { 
  // 	this.element = document.getElementsByTagName('agm-marker');
  // 	this.mapHeigth = this.dataContacto.nativeElement.clientHeight;
  // 	console.log(this.mapHeigth, this.map);
		// console.log('cambia', this.element, this.element[0].style.cssText);
  // 	this.element[0].style.cssText = `
		// height: ${this.mapHeigth}px;
		// `; 
	}

  ngOnInit() {
  	
  }

}
