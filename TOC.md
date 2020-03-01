
TOC is a work in progress
***
# Table of Contents

## 0. How to use this repo
- Create and cd in a local directory `mkdir rtng && cd rtng`
- Clone this repo `git clone https://github.com/AndreasLoukakis/rt-ng.git`
- If git is not an option, go to [github repo](https://github.com/AndreasLoukakis/rt-ng) and download a zip of the repo. However, there will be some inconvenience to switch from / to various branches so try to have git available.
- Each part will have course contents in an md format and two branches: xCourse-start and xCourse-finished
- We should start with the x-start branch and move to the x-finish branch during the course
- Each course will also include an extras.md with proposed exercises and recommended reading. The exercises will be discussed at the beginning of each next course.

## 1. Setup and build a new app
 - Dependencies
    - NodeJS
    - Angular CLI
    - Dev tools: ES LINT, Prettier
    - CSS: Patternfly 4 (Base CSS of STK so lets get familiar with it)
 - angular cli commands
 - angular framework overview
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
- E2E is out of scope, just some basics

## 6. We have a new client demand...
