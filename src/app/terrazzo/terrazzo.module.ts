import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TerrazzoComponent } from './terrazzo.component';
import { TerrazzoProdComponent } from './terrazzo-prod/terrazzo-prod.component';
import { TerrazzoColorComponent } from './terrazzo-color/terrazzo-color.component';
import { TerrazzoGaleriaComponent } from './terrazzo-galeria/terrazzo-galeria.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: 'terrazzo',
    component: TerrazzoComponent,
    children: [
      { path: '', redirectTo: 'producto', pathMatch: 'full' },
      {
        path: 'producto',
        component: TerrazzoProdComponent,
      },
      {
        path: 'colores',
        component: TerrazzoColorComponent,
      },
      {
        path: 'galeria',
        component: TerrazzoGaleriaComponent,
      }
    ]
	},

]);

@NgModule({
  imports: [
    // CommonModule,
    SharedModule,
    homeRouting
  ],
  declarations: [
  	TerrazzoComponent,
  	TerrazzoProdComponent,
  	TerrazzoColorComponent,
  	TerrazzoGaleriaComponent
	]
})
export class TerrazzoModule { }
