import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from './storage.provider';

@Injectable({
  providedIn: 'root',
})
export class StarringService {
  constructor(@Inject(LOCAL_STORAGE) private readonly storage: Storage) {}

  toggle(key: string) {
    if (this.isStarred(key)) {
      this.storage.removeItem(key);
    } else {
      this.storage.setItem(key, 'starred');
    }
  }

  isStarred(key: string): boolean {
    return !!this.storage.getItem(key);
  }
}
