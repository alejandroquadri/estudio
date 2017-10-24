import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Media, ProductDetailService } from '../shared';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

	images: any;
	innerWidth: any;

	productsObs: any;
	products: any;

  constructor(
  	private router: Router,
  	private db: AngularFireDatabase,
  	private detailService: ProductDetailService
  ) { 
  	this.images = Media.design;
  	this.innerWidth = window.screen.width;
  	console.log(this.innerWidth);
  }

  ngOnInit() {
  	this.productsObs = this.db.object('products').valueChanges();
  	this.productsObs.subscribe( products => {
  		console.log(products);
  		this.products = products;
  	})

  }

  onResize(event) {
  	this.innerWidth = event.target.innerWidth;
  	console.log(window.screen.width, event.target.innerWidth, this.innerWidth, this.innerWidth < 576);
  }

  navigate(route: string, detail: any) {
  	this.detailService.setDetail(detail);
  	this.router.navigate([`/product/${route}`]);
  }
}
