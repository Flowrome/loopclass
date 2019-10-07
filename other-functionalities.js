#!/usr/bin/env node
const functions = require('./functions');

process.argv.map(e => {
  functions.map(k => {
    if (e.indexOf(k.recognizer) > -1) {
      k.fn();
    }
  });
});
