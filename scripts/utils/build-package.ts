import chalk from 'chalk';
import createPackageConfig from '../../config/rollup/create-package-config';
import locatePackage from './locate-package';
import compile from './compile';
import generateDts from './generate-dts';
import { Logger } from './Logger';

const logger = new Logger('build-package');

export interface BuildOptions {
  analyze: boolean;
  sourcemap: boolean;
  minify: boolean;
  formats: string[];
}

export async function buildPackage(packageName: string, options?: BuildOptions) {
  const packagePath = await locatePackage(packageName || '');

  if (!packagePath) {
    logger.error(`Package ${chalk.cyan(packageName)} does not exist`);
    process.exit(1);
  }

  logger.info(`Building package ${chalk.cyan(packageName)}`);

  try {
    const startTime = Date.now();
    await generateDts(packagePath);

    for (const format of options?.formats) {
      const config = await createPackageConfig({
        ...options,
        basePath: packagePath,
        format,
      });

      logger.info(`Building to ${chalk.cyan(format)} format...`);
      await compile(config);
    }

    logger.info(`Package ${chalk.cyan(packageName)} was build in ${chalk.green(`${((Date.now() - startTime) / 1000).toFixed(2)}s`)}`);
  } catch (err) {
    logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}
