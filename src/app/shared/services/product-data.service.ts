import { Injectable } from '@angular/core';

import { FirebaseApiService } from './firebase-api.service';

@Injectable()
export class ProductDataService {

  constructor(
    private fApi: FirebaseApiService
  ) { }

  getProductData() {
    return this.fApi.getObject('products');
  }

  getProductList() {
    return this.fApi.getList('products');
  }

  getProductListS() {
    return this.fApi.getListSnap('products');
  }

  getColors() {
    return this.fApi.getList('colors');
  }

}
