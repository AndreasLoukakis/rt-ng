
TOC is a work in progress
***
# Table of Contents

## 1. Setup and build a new app
 - Dependencies
    - NodeJS
    - Angular CLI
    - Dev tools: ES LINT, Prettier
    - CSS: Patternfly 4 (Base CSS of STK so lets get familiar with it)
 - angular framework overview
 - angular cli commands: not just for skeleton and packaging
 - app bootstraping
 - building blocks
    - modules
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
 - folder structure
    - alterantives
    - opinionated. What we'll be using


## 2. Create our first feature: Inbox
- building blocks & structure
- Components and services
- Dependency injection
- Consuming observables
    - async pipe
    - subscriptions
    - RxJS helpers via pipe
- Passing data between components
- It works. Can we do better?
    - Make it it's own module
    - Lazy loading
    - route resolver
    - Intro to STK
    - refactor to stk-lists
        - note: stk is WIP and not a public library



## 3. Create a basic rendering
 - Angular forms
    - Reactive
    - Template driven. Not using them.
    - Bindings, validations, practices
 - A lazy loaded module with CLI
 - Feature design & structure
    - Smart & presentation components
    - Services
    - stk-forms
        - All suggestions welcome. WIP.
 - Building the feature
    - Container(s)
    - Service(s)
    - Presentation components
    - Bindings, validations, behavior


## 4. A deeper look into components and services

### Components
 - templates
 - content projection
 - input / output
 - styling
 - dynamic components
 - component communication
    - parent / child
    - deeper children
    - siblings
    - strangers
- What can we do better now?

### Data services
 - Mediator / pub sub
 - property store
 - reactive store
 - Redux / NGRX
 - Notes on service instances / singleton / provided in...
 - What can we do better now?

## 5. Are our features really working?
- Types of tests
- Angular test environment
- Unit tests
    - Testing a component
    - Testing a service
    - Testing forms
    - Testing events
- Integration tests
    - Setup
    - Bindings
    - Dependencies
    - Stubs
    - Directives
    - Async

## 6. We have a new NBG demand...
