import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdIconComponent } from './cd-icon.component';

describe('CdIconComponent', () => {
  let component: CdIconComponent;
  let fixture: ComponentFixture<CdIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
