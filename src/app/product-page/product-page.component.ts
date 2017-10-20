import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

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
					img: [
						// "https://firebasestorage.googleapis.com/v0/b/repmant-ce7a5.appspot.com/o/webQuarzo%2Fplatitos.jpg?alt=media&token=32ebd312-ec08-4414-ba4b-2fa472e822e3",
						// "https://firebasestorage.googleapis.com/v0/b/repmant-ce7a5.appspot.com/o/webQuarzo%2Fcustomcolor.jpg?alt=media&token=05716bed-9a8c-42cf-9b60-ce221df4a693",
						// "https://firebasestorage.googleapis.com/v0/b/repmant-ce7a5.appspot.com/o/webQuarzo%2Fquarzo2.jpg?alt=media&token=e144bd42-a52f-4844-9ec5-e5d1aa514d0d"
						1,2,3,'a','b'
					],
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

	prueba: any;

  constructor(
  	private router: Router,
  	private db: AngularFireDatabase
  ) { 
  	this.images = Media.design;
  	this.innerWidth = window.screen.width;
  	console.log(this.innerWidth);
  }

  ngOnInit() {
  	this.prueba = this.db.object('prueba').valueChanges();
  	this.prueba.subscribe( ret => {
  		console.log(ret);
  	})

  }

  onResize(event) {
  	this.innerWidth = event.target.innerWidth;
  	console.log(window.screen.width, event.target.innerWidth, this.innerWidth, this.innerWidth < 576);
  }

  navigate(route: string, params: any) {
  	this.router.navigate([`/product/${route}`, params]);
  }
}
