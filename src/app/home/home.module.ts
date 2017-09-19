import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { EstudioComponent } from '../estudio/estudio.component';
import { ObrasComponent } from '../obras/obras.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    redirectTo: '/landing',
	  pathMatch: 'full'
  },
  { 
  	path: 'landing',
  	component: LandingPageComponent
	},
  { 
  	path: 'estudio',
  	component: EstudioComponent
	},
  { 
  	path: 'obras-realizadas',
  	component: ObrasComponent
	},
]);

@NgModule({
  imports: [
	  homeRouting,
    CommonModule
  ],
  declarations: [
	  HomeComponent,
  	LandingPageComponent,
  	EstudioComponent,
  	ObrasComponent
  ]
})
export class HomeModule { }
