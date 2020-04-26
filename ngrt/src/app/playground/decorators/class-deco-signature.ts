export function DecoTest(param: any): ClassDecorator {
  // constructor is the class being decorated
  return function (constructor: any) {

    const componentName = constructor.name;
    const instanceData = constructor.prototype;

    console.log('Component name is ', componentName);
    console.log('Class instance is ', instanceData);

  }
}
