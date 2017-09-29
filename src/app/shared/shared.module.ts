import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { SubNavbarComponent } from './components';
import { CapitalizePipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADqo_qHiIMLvwZ1H5w4S2MaPiGfrq2IHI'
    }),
  ],
  declarations: [
  	SubNavbarComponent,
    CapitalizePipe
  ],
	exports: [
		CommonModule,
    NgbModule,
    AgmCoreModule,
    SubNavbarComponent,
    CapitalizePipe
	]
})
export class SharedModule { }
