# IA2 Angular course - day 1

## Dependencies setup
 - [NodeJS](https://nodejs.org/en/) >= 10.13.0
 - npm package manager (installed with Node)
 - Angular cli `npm install -g @angular/cli` (-g switch is for global installation)
 - Patternfly 4 `npm i @patternfly/patternfly --save`
 - We also need to load patternfly css, via an import in style.scss or in angular json. I'll add `"node_modules/@patternfly/patternfly/patternfly.css"` in angular.json
 - Your favorite editor, I'll be using VS Code
 - Some helpful VS Code plugins:
    - ESLint
    - Prettier
    - Angular Language Service
    - Angular Essentials (collection of plugins)
    - This theme: Winter is coming

Note: Using a linter and an autoformatter (like ESLint and Prettier) is a huge win, but everybody on the teams should be using them with the same settings / rules.

## Most common angular cli commands
- ng [command] [command params]
    - new (create new application) [app name]
    - generate (or just g) [component/service/directive...] [path/name]
    - add [package name] (adds a package like npm install package but does a few more things to congigure it, depending on it's schematics)
    - serve, build, test


### App bootstraping flow
- main.ts: entry file (see angular.json) initializes platform with a module (app.module by default)
- There can be only one platform instance, but it is possible to have multiple app instances
- app.module: sets up application wide dependencies and a bootstraping component (app.component by default)
- app.component: a basic building block
![Diagram: app bootstraping](https://raw.githubusercontent.com/AndreasLoukakis/rt-ng/day1-start/diagrams/1.app_bootstraping.svg)

In a typical app, a better description of the bootstraping process would be something like this

![Diagram: app bootstraping](https://raw.githubusercontent.com/AndreasLoukakis/rt-ng/day1-start/diagrams/2.more_complete_bootstraping.svg)



### Angular building blocks

- modules:

- ### directives
    - **components**
    - **structural**
    - **attribute**

- ### services

- ### pipes

- ### decorators

- ### router

- ### interceptors

- ### guards

- ### Interfaces / enums / tuples

- ### Bindings

![Diagram: app bootstraping](https://raw.githubusercontent.com/AndreasLoukakis/rt-ng/day1-start/diagrams/bindings.svg)

### folder structure

## Buildinng a layout shell
Remember how the router resolves a component and this is rendered in the router outlet? We now need to create a UI shell of some sort, so that it has a left menu panel, a header and a footer and each menu route renders a component in the main area.

The UI shell is a feature on it's own and should contain it's own logic, state, components and services. It would be great if it was reusable also. So, we're going to create a shell module.

![Diagram: app bootstraping](https://raw.githubusercontent.com/AndreasLoukakis/rt-ng/day1-start/diagrams/3.shell_module.svg)

And that will be your exercise. The solution is ready in day2-start branch but try to take it as far as you can on your own.

The content of the components can be dummy text or just empty if you prefer.

This module will be a part of the rendered view at all times, so it doesn't make any sense to consider lazy-loading it, in case you were thinking about it (we'll talk about lazy loading while developing the next module).

You can use custom html and css if you wish, but our implementation will be based on patternfly. A good example is [this page layout](https://www.patternfly.org/v4/documentation/core/demos/page/default-nav)