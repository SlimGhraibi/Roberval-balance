import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulesComponent } from './boules.component';

describe('BoulesComponent', () => {
  let component: BoulesComponent;
  let fixture: ComponentFixture<BoulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
