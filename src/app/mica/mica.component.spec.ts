import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicaComponent } from './mica.component';

describe('MicaComponent', () => {
  let component: MicaComponent;
  let fixture: ComponentFixture<MicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
