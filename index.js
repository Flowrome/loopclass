#!/usr/bin/env node
const config = require('./config.js');
const fs = require('fs');
const sass = require('node-sass');

const cssvars = config.getVarsConfig().cssClasses;

const customDimensions = config.getVarsConfig().customDimensions;

let result = '$map-loop: (\n';
const dimensions = [...customDimensions, ...config.getVarsConfig().defaultDimensions];

cssvars.map(e => {
  const _class = e.class;
  const _unit = e.unit;
  const _property = e.property;
  result = `${result}${_class}: (classname:'${_class}', unit:'${_unit}', property:'${_property}', dimensions:(${dimensions.join(', ')})),` + '\n';
});

result = `${result});`;

const tmpl = fs.readFileSync(`${config.getInstallationPath()}/loop-classes.scss.tmpl`, 'UTF-8');

const scss = tmpl.replace('[INSERT_SCSS_MAP]', result);

fs.writeFileSync('./_loop-classes.scss', scss);
fs.writeFileSync(
  './loop-classes.css',
  sass.renderSync({
    data: scss
  }).css
);
