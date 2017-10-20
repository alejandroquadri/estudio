import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Media } from '../shared';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	ruta: any;
	images: any;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
  ) { 
  	this.images = Media.design;
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
      console.log(params['id'], params, params['img'][1]);
      this.ruta = params['id'];
    });
  }

}
