import { environment } from '../../../environments/environment';

// NOTE: there are issues with lifecycle hooks and IVY
// https://github.com/angular/angular/issues/31495
// So this is not currently working properly.

export function ClassLogger(hooks = []) : ClassDecorator {
  return function (constructor: any) {
    if( !environment.production ) {
      const LIFECYCLE_HOOKS = [
        'ngOnInit',
        'ngOnChanges',
        'ngOnDestroy'
      ];
      const component = constructor.name;

      LIFECYCLE_HOOKS.forEach(hook => {
        const original = constructor.prototype[hook];
        constructor.prototype[hook] = function (...args) {
          console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
          original && original.apply(this, args);
        }
        // constructor.prototype[hook]();
      });
    }

  }
}
