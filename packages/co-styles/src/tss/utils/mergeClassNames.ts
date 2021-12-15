export function mergeClassNames<T extends Record<string, string>>(cx: (..._classNames: any) => string, classes: T, name: string) {
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], name ? `co-${name}-${className}` : null);
    return acc;
  }, {}) as T;
}
