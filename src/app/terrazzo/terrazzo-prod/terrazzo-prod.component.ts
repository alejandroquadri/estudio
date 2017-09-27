import { Component, OnInit } from '@angular/core';

import { Media } from '../../shared';

@Component({
  selector: 'app-terrazzo-prod',
  templateUrl: './terrazzo-prod.component.html',
  styleUrls: ['./terrazzo-prod.component.css']
})
export class TerrazzoProdComponent implements OnInit {

	// image1: any = './assets/images/quarzo2.jpg';
	// image2: any = './assets/images/terr3.jpg';
	images: any;

  constructor() {
  	this.images = Media.terrazzo;
  }

  ngOnInit() {
  }

}
