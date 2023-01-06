const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack-build-1',
      source: 'webdriverio:sample-master:v1.1',
      debug: true,
      networkLogs: true,
      localIdentifier: "TEAM3",
      "geoLocation": "CN",
      "timezone": "New_York",
    }
  },
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
      },
    },
    {
      browserName: 'safari',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
      },
    },
    {
      browserName: 'chrome',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S20',
      },
    },
    {
      browserName: 'android',
      'bstack:options': {
        deviceOrientation: 'portrait',
        deviceName: 'Samsung Galaxy S22 Ultra',
        osVersion: '12.0'
      }
    },
    {
      browserName: 'ios',
      'bstack:options': {
        deviceOrientation: 'portrait',
        deviceName: 'iPhone 14 Pro Max',
        osVersion: '16'
      }
    }
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
