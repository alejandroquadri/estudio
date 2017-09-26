import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrazzoProdComponent } from './terrazzo-prod.component';

describe('TerrazzoProdComponent', () => {
  let component: TerrazzoProdComponent;
  let fixture: ComponentFixture<TerrazzoProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrazzoProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrazzoProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
