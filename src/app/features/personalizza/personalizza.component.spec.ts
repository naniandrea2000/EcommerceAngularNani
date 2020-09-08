import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizzaComponent } from './personalizza.component';

describe('PersonalizzaComponent', () => {
  let component: PersonalizzaComponent;
  let fixture: ComponentFixture<PersonalizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
