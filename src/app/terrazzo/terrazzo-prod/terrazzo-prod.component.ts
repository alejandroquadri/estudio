import { Component, OnInit } from '@angular/core';

import { Media } from '../../shared';

@Component({
  selector: 'app-terrazzo-prod',
  templateUrl: './terrazzo-prod.component.html',
  styleUrls: ['./terrazzo-prod.component.css']
})
export class TerrazzoProdComponent implements OnInit {

	images: any;

  constructor() {
  	this.images = Media.terrazzo;
  }

  ngOnInit() {
  }

}
