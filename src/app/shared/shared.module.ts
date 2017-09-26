import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubNavbarComponent } from './components';
import { CapitalizePipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
  	SubNavbarComponent,
    CapitalizePipe
  ],
	exports: [
		CommonModule,
    NgbModule,
    SubNavbarComponent,
    CapitalizePipe
	]
})
export class SharedModule { }
