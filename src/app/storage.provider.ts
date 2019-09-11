import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'Browser Local Storage'
);

export const LOCAL_STORAGE_PROVIDER = {
  provide: LOCAL_STORAGE,
  useFactory: () => window.localStorage,
};
