import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
  	SubNavbarComponent
  ],
	exports: [
		CommonModule,
    NgbModule
	]
})
export class SharedModule { }
