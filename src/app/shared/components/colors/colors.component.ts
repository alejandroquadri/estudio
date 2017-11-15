import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;

  selectedImg: any;
  selectedName:any;

  constructor(
  	private prodService: ProductDataService,
    private modalService: NgbModal
	) { }

  ngOnInit() {
  	this.colorsObs = this.prodService.getColors()
  	this.colorsObs.subscribe( colors => {
      // this.filterColorFamily(colors);
      this.filterColor(colors);
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

  filterColor(colors: any) {
    console.log(colors);
    let filteredColors = colors.filter( (color: any) => {
      return (this.colorsObj.indexOf(color.name) !== -1)
    })
    this.colors = {};
    console.log(this.colorsObj, filteredColors);
    filteredColors.forEach( color => {
      if (this.colors[color.family]) {
        this.colors[color.family].push(color);
      } else {
        this.colors[color.family] = [];
        this.colors[color.family].push(color);
      }
    })
    console.log(this.colors);
  }

  open(content, color) {
    this.selectedImg = color.url;
    this.selectedName = color.name;
    this.modalService.open(content)
    .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}

