import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import { buildPackage, BuildOptions } from './utils/build-package';

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('project', {
    type: 'string',
    description: 'Specify package should be bundled.',
  })
  .option('analyze', {
    type: 'boolean',
    default: false,
    description: 'Generate analyze files.',
  })
  .option('sourcemap', {
    type: 'boolean',
    default: true,
    description: 'Generate sourcemap.',
  })
  .option('formats', {
    type: 'string',
    array: true,
    choices: ['es', 'cjs'],
    default: ['es', 'cjs'],
    description: "Specify module code generation: 'es', 'cjs'.",
  })
  .example([
    ['$0 all --formats umd cjs', 'Building only umd and cjs packages.'],
    ['$0 co-core --analyze', 'Building co-core package and generating analyzing file.'],
  ]);

(async () => {
  await buildPackage((argv._[0] || argv.project) as string, argv as BuildOptions);
})();
