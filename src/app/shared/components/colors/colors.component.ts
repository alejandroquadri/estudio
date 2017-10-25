import { Component, OnInit } from '@angular/core';

import { ProductDataService } from '../../../shared';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

	colorsObs: any;
	colors: any;

  constructor(
  	private prodService: ProductDataService
	) { }

  ngOnInit() {
  	this.colorsObs = this.prodService.getColors()
  	this.colorsObs.subscribe( colors => {
  		this.colors = colors;
  	})

  }

}
