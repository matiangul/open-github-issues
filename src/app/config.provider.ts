import { InjectionToken } from '@angular/core';

export interface Config {
  MIN_TEXT_LENGHT: number;
  DEBOUNCE_TIME_MS: number;
  GITHUB_SEARCH_URL_FUN: (query: string) => string;
}

export const config: Config = {
  MIN_TEXT_LENGHT: 2,
  DEBOUNCE_TIME_MS: 1000,
  GITHUB_SEARCH_URL_FUN: (query: string) =>
    `https://api.github.com/search/issues?q=${query}+in:title,body,comments+state:open+type:issue+order:desc`,
};

export const CONFIG = new InjectionToken<Config>('Application Config');

export const CONFIG_PROVIDER = {
  provide: CONFIG,
  useValue: config,
};

export const TEST_CONFIG_PROVIDER = (testConfig: Config) => ({
  provide: CONFIG,
  useValue: testConfig,
});
