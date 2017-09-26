import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrazzoColorComponent } from './terrazzo-color.component';

describe('TerrazzoColorComponent', () => {
  let component: TerrazzoColorComponent;
  let fixture: ComponentFixture<TerrazzoColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrazzoColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrazzoColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
