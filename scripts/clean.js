const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');

const packagesDir = join(__dirname, '../packages');
const isDirectory = source => lstatSync(join(packagesDir, source)).isDirectory();
const packages = readdirSync(packagesDir).filter(isDirectory);

execSync(`rm -rf ${join(__dirname, '../__screenshots__')}`);

packages.forEach(packageName => {
  execSync(`rm -rf ${join(__dirname, '../packages/', packageName, './umd')}`);
  execSync(`rm -rf ${join(__dirname, '../packages/', packageName, './lib')}`);
});
