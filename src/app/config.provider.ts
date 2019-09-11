import { InjectionToken } from '@angular/core';

export interface Config {
  a: number;
}

export const config: Config = {
  a: 1,
};

export const CONFIG = new InjectionToken<Config>(
  'Application Config'
);

export const CONFIG_PROVIDER = {
  provide: CONFIG,
  useValue: config,
};
