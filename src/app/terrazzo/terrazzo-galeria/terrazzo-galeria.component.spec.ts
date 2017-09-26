import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrazzoGaleriaComponent } from './terrazzo-galeria.component';

describe('TerrazzoGaleriaComponent', () => {
  let component: TerrazzoGaleriaComponent;
  let fixture: ComponentFixture<TerrazzoGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrazzoGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrazzoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
