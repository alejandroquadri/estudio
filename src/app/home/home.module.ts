import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { TerrazzoModule } from '../terrazzo/terrazzo.module';
import { TerrazzoComponent } from '../terrazzo/terrazzo.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { BuyModalComponent } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: '',
  	component: LandingPageComponent
	},
  { 
    path: 'terrazzo',
    component: TerrazzoComponent,
  },
  { 
    path: 'nosotros',
    component: NosotrosComponent
  },
  { 
    path: 'contacto',
    component: ContactoComponent
  },
  { 
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
]);

@NgModule({
  imports: [
	  homeRouting,
    SharedModule,
    TerrazzoModule
  ],
  entryComponents: [
    BuyModalComponent,
  ],
  declarations: [
	  HomeComponent,
  	LandingPageComponent,
    NosotrosComponent,
    ContactoComponent,
    ProductPageComponent,
    ProductDetailComponent
  ]
})
export class HomeModule { }
