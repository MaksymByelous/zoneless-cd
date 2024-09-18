import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGetterComponent } from './angular-getter.component';
import {provideExperimentalZonelessChangeDetection} from "@angular/core";

describe('AngularGetterComponent', () => {
  let component: AngularGetterComponent;
  let fixture: ComponentFixture<AngularGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGetterComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
