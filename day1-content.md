# welcome to day 1 of rt-ng

## Dependencies setup
 - [NodeJS](https://nodejs.org/en/) >= 10.13.0
 - npm package manager (installed with Node)
 - Angular cli `npm install -g @angular/cli` (-g switch is for global installation)
 - Your favorite editor, I'll be using VS Code
 - Some helpful VS Code plugins:
    - ESLint
    - Prettier
    - Angular Language Service
    - Angular Essentials (collection of plugins)
    - This theme: Winter is coming

Note: Using a linter and an autoformatter (like ESLint and Prettier) is a huge win, but everybody on the teams should be using them with the same settings / rules.

## Building a new app
 - Let's review available [angular cli](https://cli.angular.io/) (ng cli) commands:
    - ng [command] [command params]
    - most commonn commands:
        - new (create new application) [app name]
        - generate (or just g) [component/service/directive...] [path/name]
        - add [package name] (adds a package like npm install package but does a few more things to congigure it, depending on it's schematics)
        - serve, build, test
- Create the app: `ng new ngrt`
    - Would you like to add Angular routing? (Y)
    - Which stylesheet format would you like to use? (SCSS)
- Move to the newly created directory and `ng serve` or `ng serve -o` to automatically open a browser

## An overview or our app and the framework
- package.json: Our project metadata. Some used by Node, some from npm to resolve dependencies.
- angular.json: Configuration defaults for build and development tools provided by the Angular CLI
- Other config that needs mentioning: tsconfig, karma.conf, tslint

### App bootstraping flow
- main.ts: entry file (see angular.json) initializes platform with a module (app.module by default)
- There can be only one platform instance, but it is possible to have multiple app instances
- app.module: sets up application wide dependencies and a bootstraping component (app.component by default)
- app.component: a basic building block
![Diagram: app bootstraping](./diagrams/1.app_bootstraping.svg)

In a typical app, a better description of the bootstraping process would be something like this

![Diagram: app bootstraping](./diagrams/2.more_complete_bootstraping.svg)

Before building anything, let's briefly remember what are the

### Angular building blocks

- modules:
Typescript classes decorated with @NgModule. Angular documentation says:
>An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. An NgModule can associate its components with related code, such as services, to form functional units.

Every app must have one (only) root module and N other modules.

In practice, modules are an efficient way to organize, seperate and reuse functionality.

Hint: each feature should exist under a seperate module.
- directives
    - components
    - structural
    - attribute
    - angular directives
- services
    - No promises. Observables
    - basic rxjs operators
- pipes
- decorators
- interceptors
- Models: Classes & Interfaces
    - And some typescript types: enums / tuples