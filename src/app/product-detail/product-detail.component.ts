import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Media, ProductDetailService } from '../shared';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

	ruta: any;
	image: any;
	detail: any;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private detailService: ProductDetailService,
  ) { 

  }

  ngOnInit() {
  	this.route.params.forEach((params: any) => {
      this.ruta = params['id'];
    });
  	this.detail = this.detailService.detail;
  	console.log(this.detail);
  	this.image = this.detail.images[0].url;
  }

  changeImage(img) {
  	console.log(img);
  	// this.image = img;
  }

  cambio(event) {
  	console.log(event);
  }

}
