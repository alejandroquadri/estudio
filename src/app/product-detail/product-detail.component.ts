import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	ruta: any;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => { // pongo parent porque es una ruta previa
      console.log(params['id'], params);
      this.ruta = params['id'];
    });
  }

}
