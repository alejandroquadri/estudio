import { Component, OnInit, Input } from '@angular/core';

import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

	colorsObs: any;
	colors: any;
  @Input() colorsObj: any;

  constructor(
  	private prodService: ProductDataService
	) { }

  ngOnInit() {
  	this.colorsObs = this.prodService.getColors()
  	this.colorsObs.subscribe( colors => {
      this.filterColorFamily(colors);
  	});
  }

  filterColorFamily(colors: any) {
    if (!this.colorsObj.cemento) {
      delete colors.cemento
    }
    if (!this.colorsObj.granitico) {
      delete colors.granitico
    }
    this.colors = colors;
  }

}
