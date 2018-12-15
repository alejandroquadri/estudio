import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { SubNavbarComponent } from './components';
import { CapitalizePipe } from './pipes';
import { ObjNgforPipe } from './pipes';
import { ColorsComponent } from './components/colors/colors.component';
import { BuyModalComponent } from './components/buy-modal/buy-modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADqo_qHiIMLvwZ1H5w4S2MaPiGfrq2IHI'
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SubNavbarComponent,
    CapitalizePipe,
    ObjNgforPipe,
    ColorsComponent,
    BuyModalComponent
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgmCoreModule,
    SubNavbarComponent,
    ColorsComponent,
    CapitalizePipe,
    ObjNgforPipe,
    BuyModalComponent
  ]
})
export class SharedModule { }
