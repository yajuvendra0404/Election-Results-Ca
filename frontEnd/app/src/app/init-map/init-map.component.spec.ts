import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitMapComponent } from './init-map.component';

describe('InitMapComponent', () => {
  let component: InitMapComponent;
  let fixture: ComponentFixture<InitMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
