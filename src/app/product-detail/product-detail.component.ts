import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
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
  @ViewChild('imageCar') imageCar: ElementRef;
  @ViewChild('imagesDiv') imagesDiv: ElementRef;
  carouselEl: any

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private detailService: ProductDetailService,
    private renderer: Renderer
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

  ngAfterViewInit () {
    console.log(this.imageCar.nativeElement.offsetHeight);
    console.log(this.imagesDiv, this.imagesDiv.nativeElement);
    this.setHeight();
  }

  setHeight() {
    console.log('corre set height');
    this.renderer.setElementStyle(this.imagesDiv.nativeElement, 'height', `${this.imageCar.nativeElement.offsetHeight}px`);
  }

  changeImage(img) {
  	console.log(img);
  	// this.image = img;
  }

  cambio(event) {
  	console.log(event);
  }

}
