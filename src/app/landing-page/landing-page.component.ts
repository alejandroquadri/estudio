import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

	cascada = './assets/images/cascada.jpg';
	gehry  = './assets/images/gehry.jpg';
	jobs = './assets/images/steve-jobs.jpg';

	carouselInner: any;
	carouselItems: any;
	active: any;

	@ViewChild('slide1') slide1 

  constructor() { }

  ngOnInit() {
  	this.carouselInner = document.getElementsByClassName('carousel-inner');
  	this.carouselInner[0].style.cssText = `
  		height: 100%;
		`;
			this.changeCSS();
  }

  cambio(event) {
  	console.log('slide', event, this.slide1);
  	this.changeCSS();
  }

  changeCSS() {
  	setTimeout( () => {
			this.carouselItems = document.querySelectorAll('.carousel-item');
			for (let i=0; i < this.carouselItems.length; i++) {
				this.carouselItems[i].style.display = 'none';
			}
			this.active = document.querySelectorAll('.carousel-item.active');

			this.active[0].style.height = '100%';
			this.active[0].style.display = 'flex';
		}, 50);
  }

}
