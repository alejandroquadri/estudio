import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SolidComponent } from '../solid/solid.component';
import { MicaComponent } from '../mica/mica.component';
import { TerrazzoModule } from '../terrazzo/terrazzo.module';
import { TerrazzoComponent } from '../terrazzo/terrazzo.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ContactoComponent } from '../contacto/contacto.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: '',
  	component: LandingPageComponent
	},
  { 
  	path: 'solido',
  	component: SolidComponent
	},
  { 
  	path: 'mica',
  	component: MicaComponent
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
]);

@NgModule({
  imports: [
	  homeRouting,
    SharedModule,
    TerrazzoModule
  ],
  declarations: [
	  HomeComponent,
  	LandingPageComponent,
    SolidComponent,
    MicaComponent,
    // TerrazzoComponent,
    NosotrosComponent,
    ContactoComponent,
  ]
})
export class HomeModule { }
