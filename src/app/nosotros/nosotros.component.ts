import { Component, OnInit } from '@angular/core';

import { Media } from '../shared';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

	images: any;

  constructor() {
  	this.images = Media.terrazzo;
  }

  ngOnInit() {
  }

}
