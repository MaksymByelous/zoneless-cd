import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provideExperimentalZonelessChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter([]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
