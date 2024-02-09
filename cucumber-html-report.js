const report = require("multiple-cucumber-html-reporter");
const fs = require('fs')

function getBrowserDetails(){
  const strignifyData = JSON.stringify(fs.readFileSync("./browserDetails.json", "utf-8"))
  const parsedData = JSON.parse(JSON.parse(strignifyData))
  console.log(typeof parsedData)
  return parsedData;
}

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-html-report.js",
  metadata: {
    browser: {
      name: "chrome",
      version: getBrowserDetails.version,
    },
    device: "Local Test Machine",
    platform: {
      name: "Mac OS",
      version: "Sonoma 14.0",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "QWID" },
      { label: "Release", value: "0.0.1" },
      { label: "Cycle", value: "Onboarding" },
      { label: "Execution Start Time", value: "Oct 26 2023, 15:40 PM EST" },
      { label: "Execution End Time", value: "Oct 26 2023, 15:44" },
    ],
  },
});
