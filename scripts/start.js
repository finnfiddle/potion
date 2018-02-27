const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');
const { spawn } = require('child_process');

const packagesDir = join(__dirname, '../packages');
const isDirectory = source => lstatSync(join(packagesDir, source)).isDirectory();
const packages = readdirSync(packagesDir).filter(isDirectory);

packages.forEach(packageName => {
  const babel = spawn(join(__dirname, '../node_modules/.bin/babel'), [
    '--watch',
    '--plugins',
    'transform-runtime',
    join(__dirname, '../packages/', packageName, './src'),
    '--ignore',
    '__tests__',
    '--out-dir',
    join(__dirname, '../packages/', packageName, './lib'),
  ]);

  babel.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  babel.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  babel.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});
