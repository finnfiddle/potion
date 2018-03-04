const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');

const packagesDir = join(__dirname, '../packages');
const isDirectory = source => lstatSync(join(packagesDir, source)).isDirectory();
const packages = readdirSync(packagesDir).filter(isDirectory);

packages.forEach(packageName => {
  execSync(`${
    join(__dirname, '../node_modules/.bin/babel')
  } ${
    join(__dirname, '../packages/', packageName, './src')
  } --ignore __tests__ --out-dir ${
    join(__dirname, '../packages/', packageName, './lib')
  }`);
});
