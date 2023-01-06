exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",

  updateJob: false,
  specs: ["./tests/specs/*"],
  exclude: [],

  logLevel: "warn",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  hostname: "hub.browserstack.com",
  services: [
    [
      "browserstack",
      {
        browserstackLocal: true,
        setSessionName: true,
        setSessionStatus: true,
        opts: {
          localIdentifier: "TEAM3",
          verbose: "3",
        },
      },
    ],
  ],

  before: function () {
    var chai = require("chai");
    global.expect = chai.expect;
    chai.Should();
  },
  after: function (){
    console.log("======>>>>>My Session ID<<<=======");
    var sessionId = browser.sessionId;
    console.log(`https://api.browserstack.com/automate/${sessionId}/logs`);
  },
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
