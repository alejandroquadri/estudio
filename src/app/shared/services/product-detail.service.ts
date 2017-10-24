import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailService {

	detail: any;

  constructor() { }

  setDetail(detail) {
  	this.detail = detail;
  }

}
