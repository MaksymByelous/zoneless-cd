import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrackedSignalComponent } from './untracked-signal.component';
import {provideExperimentalZonelessChangeDetection} from "@angular/core";

describe('UntrackedSignalComponent', () => {
  let component: UntrackedSignalComponent;
  let fixture: ComponentFixture<UntrackedSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntrackedSignalComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntrackedSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
