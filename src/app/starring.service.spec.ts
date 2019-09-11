import { TestBed } from '@angular/core/testing';
import { StarringService } from './starring.service';
import { LOCAL_STORAGE_PROVIDER } from './storage.provider';

describe('StarringService', () => {
  beforeEach(() => {
    LOCAL_STORAGE_PROVIDER.useFactory().clear();
    TestBed.configureTestingModule({
      providers: [LOCAL_STORAGE_PROVIDER],
    });
  });

  it('should be created', () => {
    const service: StarringService = TestBed.get(StarringService);
    expect(service).toBeTruthy();
  });

  it('should be able to toggle star element under a key', () => {
    const service: StarringService = TestBed.get(StarringService);
    expect(service.toggle('element')).toBeUndefined();
  });

  it('should be able to check starness of element under a key', () => {
    const service: StarringService = TestBed.get(StarringService);
    expect(service.isStarred('element')).toBe(false);
    service.toggle('element');
    expect(service.isStarred('element')).toBe(true);
  });
});
