# IA2 Angular course - day 2

## Let's review the exercise "Buildinng a layout shell"
 
![Diagram: app bootstraping](./diagrams/3.shell_module.svg)

Our layout should be based on patternfly, and we have a good example for a similar layout: [this page layout](https://www.patternfly.org/v4/documentation/core/demos/page/default-nav). 

### Creating the module

The most difficult part in creating modules, components etc with cli is coming up with a good name and being consistent in our naming conventions :)

`ng generate module ui-shell` or the shortcut version which is exactly the same thing `ng g m ui-shell`

Note that there are more switches we can use in creating a module, like 