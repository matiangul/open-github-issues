# Open Github Issues

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.
It uses [GitHub API](https://developer.github.com/v3/) to list issues.
Also it uses Bootstrap styles.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment to gh-pages

Run
```
ng build --prod --output-path docs --base-href open-github-issues
cp docs/index.html docs/404.html
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
