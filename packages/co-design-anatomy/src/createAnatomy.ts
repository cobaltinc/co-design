export interface AnatomyPart {
  name: string;
  selector: string;
  attrs: Record<'data-scope' | 'data-part', string>;
}

export type AnatomyInstance<T extends string> = Omit<Anatomy<T>, 'parts'>;

export type AnatomyPartName<T> = T extends AnatomyInstance<infer U> ? U : never;

export interface Anatomy<T extends string> {
  extendWith: <V extends string>(...parts: V[]) => AnatomyInstance<T | V>;
  rename: (newName: string) => Anatomy<T>;
  keys: () => T[];
  generate: () => Record<T, AnatomyPart>;
}

export const createAnatomy = <T extends string>(name: string, parts = [] as T[]): Anatomy<T> => ({
  extendWith: (...values) => createAnatomy(name, [...parts, ...values]),
  rename: (newName) => createAnatomy(newName, parts),
  keys: () => parts,
  generate: () =>
    [...new Set(parts)].reduce<Record<string, AnatomyPart>>(
      (prev, part) =>
        Object.assign(prev, {
          [part]: {
            name,
            selector: [
              `&[data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`,
              `& [data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`,
            ].join(', '),
            attrs: { 'data-scope': toKebabCase(name), 'data-part': toKebabCase(part) },
          },
        }),
      {},
    ),
});

const toKebabCase = (value: string) =>
  value
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
