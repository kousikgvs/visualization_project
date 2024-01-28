const inheritanceModule = require('./Inheritance');

const result = [];

const classesAndMethods = Object.entries(inheritanceModule)
  .filter(([key, value]) => typeof value === 'function' && value.prototype !== undefined)
  .map(([key, value]) => {
    const properties = [];
    const methods = Object.getOwnPropertyNames(value.prototype).filter((method) => method !== 'constructor');

    for (const prop in value.prototype) {
      if (typeof value.prototype[prop] !== 'function') {
        properties.push(prop);
      }
    }

    const constructorProperties = Object.keys(new value());
    properties.push(...constructorProperties);

    return {
      className: key,
      properties,
      methods,
    };
  });
 
classesAndMethods.forEach((classInfo) => {
  result.push({
    class: classInfo.className,
    Properties: classInfo.properties.join(', '),
    Methods: classInfo.methods.join(', ')
  });
});

console.log(result);
