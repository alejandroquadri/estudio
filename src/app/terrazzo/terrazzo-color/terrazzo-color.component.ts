import { Component, OnInit } from '@angular/core';
import { Media } from '../../shared';

@Component({
  selector: 'app-terrazzo-color',
  templateUrl: './terrazzo-color.component.html',
  styleUrls: ['./terrazzo-color.component.css']
})
export class TerrazzoColorComponent implements OnInit {

	images:any;

  constructor() {
  this.images = Media.terrazzo; }

  ngOnInit() {
  }

}
