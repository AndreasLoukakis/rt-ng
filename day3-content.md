# IA2 Angular course day 3: May the forms be with you

## Let's review the exercise, setting up rendering module

We know how to create the component, it's exactly what we did with the inbox:

```ng g m features/rendering --route movies --module app.module```

The 'movies' route is set in our app module, pointing to the rendering module. Then, the rendering module points the empty path (the /movies) to the rendering.component, which is not exactly what we want, since we will not be handling a collection of movies, just a single item, specified by id.

This is handled by using a parameter in the route definition and the same param in router link. Something like:

```{ path: 'movies/:id', component: SomeComponent }```

and

```<a [routerLink]="['/movies', '2']">```

The only difference is that 'movies' is already set in the app module, so we just need to define the ':id' part in our rendering routing module.

With that done, let's see how we can retrieve the movie id from the router. This time, we will be using sync data and not an observable, via the ActivatedRoute. 

Lets display the movie id in the html, then move to the inbox component and add a routerlink to wire this up.

The breadcrumbs and the title won't look great with a generic title but that will do for now, later we might refactor that to something more apropriate.

Time to setup a service: `ng g s features/rendering/services/movie`

Seems like we'll be using Movie quite a lot, it's time to move it to a proper place. Let's make a shared module and put there whatever should be available throughout the application.

Why using a shared module? Let's see how dependency tree could work amongst main (app) and lazy loaded modules


We can use a model or interface folder for that and it might be a good idea to use a 'barrel'

We'll now set up the service to get a single Movie result and dump the json data.

The data we get from this single request is not enough to have a proper 'rendering'. But we have links for characters, planets, starships, vehicles and species. Maybe we could render: 

- the characters in a parties component (first one is primary borrower, the rest should be either guarantors or ),
- the planets in a properties component, can be marked as collateral
- the starships as accounts (they should be multi-selectable) 
- the vehicles as products

To get the actual data from the links, we have a few options. We could use a global state like redux / ngrx and store each resource there, then subscribe to the data from the components. We could get everything from the parent component, then pass each collection to the corresponding componnent. Or, we could just pass the i.e. characters url array to the parties component, and let it do it's thing.

An ngrx setup has some concepts that would need a lot of discussion and although it would be nice and clean, we'll pass for now and maybe discuss the patter later if there is time. The second solution sounds messy, there are too many things for one place to handle. So, you know what we'll do.

Our setup, besides the components will require the interfaces (which we'll get from the swapi and maybe add a couple properties) and either a few more methods to our service. Or maybe one, with generics? we'll see.

`ng g c features/rendering/components/parties`

`ng g c features/rendering/components/properties`

`ng g c features/rendering/components/accounts`

`ng g c features/rendering/components/products`

For start, we'll pass the corresponding urls array as an input to each componnent, so each component has a `  @Input() urls: string[];` property







We will probably need another route