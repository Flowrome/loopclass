const fs = require('fs');
const config = require('./config');

const exps = [
  {
    recognizer: '-path=',
    fn() {
      setCustomPath();
    }
  },
  {
    recognizer: '-reset-path',
    fn() {
      setCustomPath(true);
    }
  }
];

function setCustomPath(reset = false) {
  const path = process.argv.find(e => e.indexOf(exps[0].recognizer) > -1);

  const json = config.getConfig();
  json.customPath = reset ? null : path.replace(exps[0].recognizer, '');
  fs.writeFileSync(`${config.getInstallationPath()}/config.json`, JSON.stringify(json));
}

module.exports = [...exps];
