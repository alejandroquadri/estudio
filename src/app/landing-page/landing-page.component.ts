import { Component, OnInit, ViewChild } from '@angular/core';

import { Media } from '../shared';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // estas variables son para hacer el carousel full screen
	// carouselInner: any;
	// carouselItems: any;
	// active: any;

  landingDesktop = "./assets/images/landingDesktop.jpg";
  landingMobile = "./assets/images/landingMobile.jpg";
  triturado = "https://firebasestorage.googleapis.com/v0/b/designweb-249da.appspot.com/o/otros%2FtrituradoMarmol.jpeg?alt=media&token=7110942f-e9c3-458b-86db-ab90d070141a";

	@ViewChild('slide1') slide1 

  constructor() {
  }

  ngOnInit() {
  //  !! el codigo de abajo sirve para cambiar el css para que el carousel quede fullscreen
  // 	this.carouselInner = document.getElementsByClassName('carousel-inner');
  // 	this.carouselInner[0].style.cssText = `
  // 		height: 100%;
	// `;
	// this.changeCSS();
  }

  // esta funcion es para que el carousel quede full screen
  // cambio(event) {
  // 	console.log('slide', event, this.slide1);
  // 	this.changeCSS();
  // }

  // esta funcion es para que el carousel quede full screen
  // changeCSS() {
  // 	setTimeout( () => {
		// 	this.carouselItems = document.querySelectorAll('.carousel-item');
		// 	for (let i=0; i < this.carouselItems.length; i++) {
		// 		this.carouselItems[i].style.display = 'none';
		// 	}
		// 	this.active = document.querySelectorAll('.carousel-item.active');

		// 	this.active[0].style.height = '100%';
		// 	this.active[0].style.display = 'flex';
		// }, 50);
  // }

}
