import { TestBed } from '@angular/core/testing';

import { AnimationService } from './animation.service';
import {provideExperimentalZonelessChangeDetection} from "@angular/core";

describe('AnimationService', () => {
  let service: AnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({      providers: [
        provideExperimentalZonelessChangeDetection(),
      ],});
    service = TestBed.inject(AnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
