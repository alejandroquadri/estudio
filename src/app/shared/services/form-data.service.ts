import { Injectable } from '@angular/core';

import { FirebaseApiService } from './firebase-api.service';

@Injectable()
export class FormDataService {

  constructor(
  	private fApi: FirebaseApiService
	) { }

	saveReq(form: any) {
		return this.fApi.push('queries', form);
	}

}
