import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
		tables: {
			family: 'Mesas',
			items: [
				{
					description: 'Mesa 1 x 1',
					img: '',
					prize: 800
				},
				{
					description: 'Mesa de arrime',
					img: '',
					prize: 200
				},
				{
					description: 'Mesa auxiliar',
					img: '',
					prize: 500
				}
			]
		},
		objects: {
			family: 'objetos',
			items: [
				{
					description: 'Juego de platos',
					img: '',
					prize: 5200
				},
				{
					description: 'Juego de percheros',
					img: '',
					prize: 550
				},
				{
					description: 'Masetas',
					img: '',
					prize: 530
				}
			]
		}
	}

  constructor(
  	private router: Router
  ) { 
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

  navigate(route: string, params: any) {
  	this.router.navigate([`/product/${route}`, params]);
  }
}
