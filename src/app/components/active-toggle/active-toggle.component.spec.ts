import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveToggleComponent } from './active-toggle.component';

describe('ActiveToggleComponent', () => {
  let component: ActiveToggleComponent;
  let fixture: ComponentFixture<ActiveToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
