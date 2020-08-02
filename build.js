const path = require('path');
const rollup = require('rollup');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

const dye = require('./utils/ansiDyer');

const PATH_SRC = path.resolve('src');
const PATH_DIST = path.resolve('dist');

const buildList = [
  {
    fileName: 'index.css',
    source: 'index.scss',
    minimize: false,
  },
  {
    fileName: 'index.min.css',
    source: 'index.scss',
    minimize: true,
  },
  {
    fileName: 'rwd.css',
    source: 'rwd.scss',
    minimize: false,
  },
  {
    fileName: 'rwd.min.css',
    source: 'rwd.scss',
    minimize: true,
  },
];

const createConfig = (entry) => {
  const config = {
    inputOptions: {
      input: path.join(PATH_SRC, entry.source),
      onwarn(warning) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);
        /* eslint-disable no-console */
        console.warn(dye('33', `>> ${warning.message}`));
        /* eslint-enable no-console */
      },
      plugins: [
        postcss({
          plugins: [autoprefixer],
          minimize: entry.minimize,
          sourceMap: entry.minimize,
          extract: true,
        }),
      ],
    },
    outputOptions: {
      file: path.join(PATH_DIST, entry.fileName),
    },
  };
  return config;
};

const build = async (entry) => {
  /* eslint-disable no-console */
  try {
    console.log(`\nBuilding ${entry.fileName} ...`);
    const { inputOptions, outputOptions } = createConfig(entry);
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
    console.log(`Building ${entry.fileName}... ${dye('92', 'Done')}!`);
  } catch (error) {
    console.error(`Building ${entry.fileName} ... ${dye('31', 'Fail')}!`);
    console.error(dye('31', `>> ${error}`));
  }
  /* eslint-enable no-console */
};

const process = async () => {
  /* eslint-disable no-console */
  console.log(dye('34', `\n####### Building CSS ... beginning #######`));
  try {
    /* eslint-disable no-await-in-loop */
    for (let index = 0; index < buildList.length; index += 1) {
      await build(buildList[index]);
    }
    /* eslint-disable no-await-in-loop */
  } catch (error) {
    console.error(dye('31', error));
    process.exit(1);
  }
  console.log(dye('34', `\n####### Building CSS ... finished #######`));
  /* eslint-enable no-console */
};

process();
