import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnkinoListComponent } from './finnkino-list.component';

describe('FinnkinoListComponent', () => {
  let component: FinnkinoListComponent;
  let fixture: ComponentFixture<FinnkinoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinnkinoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinnkinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
