# IA2 Angular course - day 2

## Let's review the exercise "Buildinng a layout shell"
 
![Diagram: app bootstraping](./diagrams/3.shell_module.svg)

Our layout should be based on patternfly, and we have a good example for a similar layout: [this page layout](https://www.patternfly.org/v4/documentation/core/demos/page/default-nav). 

### Creating the module

The only difficult part in creating modules, components etc with cli is coming up with a good name and being consistent in our naming conventions :)

`ng generate module ui-shell` or the shortcut version which is exactly the same thing `ng g m ui-shell`

Note that there are more [switches we can use](https://angular.io/cli/generate#module-command) in creating a module but there's no need for these right now, we'll use some more options later.

OK we now have our empty module. Let's add a component to it, we should probably start with a wrapper that will contain everything.

`ng g c ui-shell/components/shell-wrapper`

Our component is automatically included in the ui-shell module, because of the path we gave it. But we will need to import ui-shell module in our root module (app module) so that our app knows about it's existence.

We intend on using the shell-wrapper component in the app module, so it's not enough to have it in the 'declarations' part of ui-shell module. We also need to export it.

OK now lets copy all of the html in the [demo patternfly page](https://www.patternfly.org/v4/documentation/core/demos/page/default-nav) to our wrapper, and take it from there.

We now have the full page rendered in one wraper component. What we want to end up with, is a wraper that has a header, a left panel, a footer and our main conntent area (in which we will also have to add the router render place holder - `<router-outlet></router-outlet>`)

So our wraper html will look something like this:

```html
<shell-header></shell-header>
<shell-left-panel></shell-left-panel>
<shell-main-content></shell-main-content>
```

These will be mostly presentation components, so let's create them in a seperate folder to keep things a little more clean:

`ng g c ui-shell/components/presentation/header`

`ng g c ui-shell/components/presentation/sidebar`

`ng g c ui-shell/components/presentation/main`

then move the corresponding html to each component, so that our `app-shell-wrapper`'s html only has the tags to render the new components:

```html
<div class="pf-c-page">
  <app-header></app-header>
  <app-sidebar></app-sidebar>
  <app-main></app-main>
</div>
```

There are some css issues to solve here, since the rendered html actually contains some extra elements, our components. A quick fix (not the best, if we need to support older browsers) is to use in each component's scss file this rule:

`:host { display: contents}`

host represents the component element and we are instructing css to ignore it and only apply rules to it's contents.

The app-main component, just needs to include `<router-outlet></router-outlet>` in the right place. But when we include it, you'll notice there's something wrong... since we're using the router outlet in ui-shell, we need to import angular RouterModule in the module. We'll talk about module dependencies and imports strategy later on, when we start dealing with lazy loaded modules and things get a little more complex in this aspect.

Just a little clean up in the html to remove unnecessary content and we are ready. We now have a shell, ready to render any route in the app-main comonent!

## Creating our first feature: Inbox

Our inbox will be a classic MiTOS inbox, with a list of applications that might have different layout semantics (eg different backgound for x type of application). We also need them to be expandable, and display some extra info (we will ignore other common features, like pagination, filters etc).

Inbox will be rendered in it's own url, have it's own logic and components so it's  a good candidate for a lazy loaded module.

Let's do that, create an inbox wraper to see the differences of a lazy loaded module and then discuss about how we should structure it's pieces.
