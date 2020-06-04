import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorSingUpFormComponent } from './donator-sing-up-form.component';

describe('DonatorSingUpFormComponent', () => {
  let component: DonatorSingUpFormComponent;
  let fixture: ComponentFixture<DonatorSingUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorSingUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorSingUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
