import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBeersCartComponent } from './container-beers-cart.component';

describe('ContainerBeersCartComponent', () => {
  let component: ContainerBeersCartComponent;
  let fixture: ComponentFixture<ContainerBeersCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBeersCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBeersCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
