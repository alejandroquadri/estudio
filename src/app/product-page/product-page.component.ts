import { Component, OnInit } from '@angular/core';

import { Media } from '../shared';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

	images: any;
	innerWidth: any;

	products = {
		tables: [
			{
				description: 'Mesa 1 x 1',
				img: ''
			},
			{
				description: 'Mesa de arrime',
				img: ''
			},
			{
				description: 'Mesa auxiliar',
				img: ''
			}
		],
		objects: [
			{
				description: 'Juego de platos',
				img: ''
			},
			{
				description: 'Juego de percheros',
				img: ''
			},
			{
				description: 'Masetas',
				img: ''
			}
		]
	}

  constructor() { 
  	this.images = Media.design;
  	this.innerWidth = window.screen.width;
  	console.log(this.innerWidth);
  }

  ngOnInit() {
  }

  onResize(event) {
  	this.innerWidth = event.target.innerWidth;
  	console.log(window.screen.width, event.target.innerWidth, this.innerWidth, this.innerWidth < 576);
  }
}
