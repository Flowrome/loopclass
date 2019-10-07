const fs = require('fs');
const { getInstalledPathSync } = require('get-installed-path');

const appName = 'loopclass';

module.exports = {
  getInstallationPath() {
    return getInstalledPathSync(appName);
  },
  getConfig() {
    return JSON.parse(fs.readFileSync(`${this.getInstallationPath()}/config.json`, 'UTF-8'));
  },
  getVarsConfig() {
    let customVarsConfig = {};
    if (fs.existsSync(this.getConfig().customPath)) {
      customVarsConfig = JSON.parse(fs.readFileSync(`${this.getConfig().customPath}`, 'UTF-8'));
    } else {
      console.warn('generatescssloopclasses - NO CUSTOM VARS CONFIGURATION ADDED');
    }
    const defaultVarsConfig = JSON.parse(fs.readFileSync(`${this.getInstallationPath()}/default-var-config.json`, 'UTF-8'));

    const everyConfig = {
      cssClasses: [...defaultVarsConfig.cssClasses, ...customVarsConfig.cssClasses],
      customDimensions: [...defaultVarsConfig.customDimensions, ...customVarsConfig.customDimensions],
      defaultDimensions: [...defaultVarsConfig.defaultDimensions, ...customVarsConfig.defaultDimensions],
    }

    return everyConfig;
  }
};
