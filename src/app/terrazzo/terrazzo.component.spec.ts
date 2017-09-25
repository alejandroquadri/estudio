import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrazzoComponent } from './terrazzo.component';

describe('TerrazzoComponent', () => {
  let component: TerrazzoComponent;
  let fixture: ComponentFixture<TerrazzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrazzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrazzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
