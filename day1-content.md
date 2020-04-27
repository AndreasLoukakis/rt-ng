# IA2 Angular course - day 1

## Preface
Angular 2+ is written and uses Typescript. It has some core and some optional functionality, in the form of Typescript libraries. The architecture relies on some concepts and buildinng blocks - like modules and componennts - we'll be discussing.

Before doinng so, we'll need to setup an environment and create a new angular app:

## Dependencies setup
 - [NodeJS](https://nodejs.org/en/) >= 10.13.0
 - npm package manager (installed with Node)
 - Angular cli `npm install -g @angular/cli` (-g switch is for global installation)
 - We also need to load patternfly css, via an import in style.scss or in angular json. I'll add `"node_modules/@patternfly/patternfly/patternfly.css"` in angular.json
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
    - most common commands:
        - new (create new application) [app name]
        - generate (or just g) [component/service/directive...] [path/name]
        - add [package name] (adds a package like npm install package but does a few more things to congigure it, depending on it's schematics)
        - serve, build, test
- Create the app: `ng new ngrt`
    - Would you like to add Angular routing? (Y)
    - Which stylesheet format would you like to use? (SCSS)


- Move to the newly created directory
- Add patternfly `npm i @patternfly/patternfly --save`
    - what is patternfly?   https://www.patternfly.org/v4/documentation/core/overview/release-notes
-Run in the command line `ng serve` or `ng serve -o` to automatically open a browser

## An overview of or our app and the framework
- package.json: Our project metadata. Some used by Node, some from npm to resolve dependencies.
- angular.json: Configuration defaults for build and development tools provided by the Angular CLI
- Other config that needs mentioning: tsconfig, karma.conf, tslint
- tsconfig handles language settings and tsconfig.app.json has tsc (typescript compiler) settings, 90% of the time defaults are just fine.
    - more details: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- How typescript / tsc works in an angular context?
    - There is not much more we need to now about it right now, other than we will be writing in typescript, and the tsc will automatically transplile this to javascript, taking into consideration some settings provided in tsconfig.json

### App bootstraping flow
- main.ts: entry file (see angular.json) initializes platform with a module (app.module by default)
- There can be only one platform instance, but it is possible to have multiple app instances
- app.module: sets up application wide dependencies and a bootstraping component (app.component by default)
- app.component: a basic building block
![Diagram: app bootstraping](./../diagrams/1.app_bootstraping.svg)

In a typical app, a better description of the bootstraping process would be something like this

![Diagram: app bootstraping](./../diagrams/2.more_complete_bootstraping.svg)

Before building anything, let's briefly refresh what are the...

### Angular building blocks

`ng serve -o`

- modules:
 - `ng g m playground`

Typescript classes decorated with @NgModule. Angular documentation says:
>An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. An NgModule can associate its components with related code, such as services, to form functional units.

Every app must have one (only) root module and N other modules.

In practice, modules are an efficient way to organize, contain and reuse functionality. Typically, an NgModule would have:
- declarations: the components that live inside this module
- imports: other modules we created or npm installed
- providers: instructions for the dependency injection system on obtaining a value. Providers can also be used in component level to change how dependency values are obtained - cool stuff.


- ### directives
    - **components**:
        
        Controls all or part of our screen. Everything we see is defined in the scope of a component, may as well be called a View.

        Usually, a component will consist of a typescript Class decorated with `@Component({..some config...})`, an html file, a stylesheed and a test file.

        A component might be rendered by a route instruction, an html tag, programatically via component factory or because it is defined as a bootstraping component (cant think of any other way, might be forgeting something though)

        COMPONENT COMMUNICATION

        Probably the most common thing to do, is share some data from one component to another. There are a few possible ways to do that.

        1. Input / Output

        When there is some hierarchy, the obvious aproach is to either pass some data from parent to child or "output" something from the child to the parent component.

        2. External service

        There are a few ways to use an external service to share data between components, like a property store or an observable service, an event bus or a state service.
        
        

    - **structural directives**:
        
        Structural directives have some logic that will change our DOM. They have an * at the begining and any html element can only have 1 structural directive.

        ```<div *ngFor="let item of items"> {{item}} </div>```

    - **attribute directives**:
        Attribute directives are used as a reference to an element, in order to access it and apply some logic.
        
        It can be a custom attribute (eg `<h1 fooBar>Something</h1>` or we can use already existing element, like input and css or other element attributes (eg a directive with selector `input[type="text"]` would have access to all input of type text elements)


- ### services

    Services can have very broad usage. They are a typescript class or function, annotated with the @Injectable() decorator and **should have a narrow and very well defined scope**

    Ideally, a component will serve the minimum code required to apply the user experience and delegate any other tasks to services (use via DI).
    
    Like most parts, in services we'll be heavily using Observables (specifically RxJS). Promises are an option, but not suggested because 1. you'll be 'fighting' the framework flow, since RxJS is baked-in in core angular functionality and 2. Observables are a little harder to grasp at first but prove to be much more powerful eventually.

    There is something worth mentioning at this point about all services:
    - @Injectable, a decorator that marks the class as available to be provided and injected. This decorator, is being passed a config object like all injectables with a default value of `{providedIn: 'root'}`. 
    
    This is similar to adding the service in the **root** NgModule providers array and makes our service a singleton, available throughout the app. In a real app, where there are many modules with some complexity on the dependency tree, we could face problems and bugs with services not behaving as sigletons because they have been registered more than once. 


- ### pipes
    Pipes, again, are classes decorated with @Pipe(). The serve as a way to make display transformations in the html. There are several built-in pipes and ofcourse we can create our own. Common examples are date display, currency or more complex cases when we need to repeat some custom presentation logic.

    The most commonly used pipe is async (written as `{{ foo | async }}` and it provides great convenience when consuming observables. Let's see a couple of examples in our play component, replacing sub with async pipe.

- ### decorators
    Decorators exist in Typescript and angular is heavily using them to apply framework logic (and allow us to easily pass configuration) to almost every framework construct.

    There are several [kinds of decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) in Typescript, like class, method, property etc and it can be a very useful pattern when repeatable logic needs to be applied and class inheritence is not the best approach.

    In practice, they are just (higher order) functions, that receive a subject (like a class) and maybe some other properties and extends it's functionality.

    It's worth mentioning there's a proposal for [Javascript Decorators](https://github.com/tc39/proposal-decorators), currently in stage 2 (stage 3 means it's coming in the next version)

- ### Router

  RouterModule is not included in core app, should be explicitly imported.

  - The simplest route implementation is a combination of a route definition and a `<router-outlet>` tag. This tag is being used to render views (components) associated with the current route - what we have seen in the bootstraping diagram.

  - There can be multiple NAMED router outlets, used to render different components.

  - A route can have child routes and use it's own router-outlet

  ```
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
  ```

  - routes can also take an optional data property that can specify any value that needs to be passed into the component on that route

  ```
  { path: 'home', component: HomeComponent,
    data: {title: 'My Home Page'}
  }
  ```

  - dynamic routes

  A common use case for most applications is dynamic routes - this means a URL that is generated on the fly using a resource ID or name - for example, /deals/100, or /parties/3.

  - router links

  The routerLink directive is used to handle router links inside html. It can be used with or without binding:

  ```
  <a [routerLink]="['/deal', deal.id]">
    Link to deal with id #{{ deal.id }}
  </a>
  ```

  `<a routerLink="/deal/7">Link to deal with id #7</a>`

  and can be passed some more attributes, like the router outlet to target or data, some of which we will be using later.

  - router events

  Router also provides route lifecycle events, as an observable. So, we can subscribe to router events, such as NavigationStart / NavigationEnd / NavigationError and react accordingly.

  - Guards (which are route guards) are also part of RouterModule but we will discuss them seperatelly.

  - Resolvers: 

  In some cases we might want to pre-fetch data and pass it to the component, before it gets instantiated. We are using a resolver to do that, and the data is available to the component. The route definition is like

  ```
  {
    path: 'deal/:id',
    component: DealComponent,
    resolve: { dealData: DealDataResolver }
  }
  ```
  We have to implement the DealDataResolver class, which will implement a Resolve interface (and add it to the providers of our module). This way, the component has a dealData object available upon instantiation.

  -Lazy loading

  Instead of packaging all of our modules together in one big bundle, we can configure them to get lazy loaded and live in our app as seperate bundles, loaded when we need them.

  The top route of the feature is defined like this
  ```
  {
  path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module')
      .then(m => m.InboxModule),
  }
  ```

  and the lazy loaded module handles the resolution of all routes in this namespace.

  We have to extra careful in organizing our dependencies structure when lazy loading, as these components dont have access to any other module (and the module, like we said, creates the compilation context of our feature).
  
- ### interceptors
    day 2

- ### guards
    day 2

- ### Interfaces / enums / tuples
    
    Nothing angular-specific to mention here, other than we can and we should have everything possibly typed. The 'any' type should be considered as technical debt.

- ### Bindings

![Diagram: bindngs](./../diagrams/bindings.svg)

### folder structure

Besides being a personal preference, angular guidelines suggest to use a [Folders-by-feature structure](https://angular.io/guide/styleguide#folders-by-feature-structure).
There are many reasons that lead to this preference which works better to medium - complex apps than smaller ones (IMHO), I can't explain it any better than the above link.

Ofcourse, this by itself is not enough guidance for a big and complex app. We should make decissions based on how our app business is (or should be) contained in modules, under what concept could a group of modules exist (features, admin, renderings, shared...) or whatever makes sense for any strategy we come up with.

## Buildinng a layout shell
We need to create a UI shell - or a template - which has a left menu panel, a header and a footer and each menu route renders a component in the main area.

The UI shell is a feature on it's own and should contain it's own logic, state, components and services if needed. It would be great if it was reusable also. So, we're going to create a shell module.

![Diagram: app bootstraping](./../diagrams/3.shell_module.svg)

And that will be your exercise. The solution is ready in day2-start branch but try to take it as far as you can on your own.

The content of the components can be dummy text or just empty if you prefer.

This module will be a part of the rendered view at all times, so it doesn't make any sense to consider lazy-loading it, in case you were thinking about it (we'll talk about lazy loading while developing the next module).

You can use custom html and css if you wish, but our implementation will be based on patternfly. A good example is [this page layout](https://www.patternfly.org/v4/documentation/core/demos/page/default-nav)