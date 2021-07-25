import { Given, When, Then } from "@cucumber/cucumber";
import { read } from "../../src/config/readYaml";
import { env } from "./../../src/config/common_functions/configuration";

const conf = read("../../conf.yaml", __dirname);

const environment: string = "e2";

Given(/^I have yaml file so reading it$/, async () => {
  console.log("reading YAML File");
  console.log(__dirname);
  const configurationData = read("../../conf.yaml", __dirname);

  console.log(
    `Conf Data ->\n${JSON.stringify(configurationData, undefined, 2)}`
  );
});

Then(/^Read environment file$/, async () => {
  console.log("reading Environment File");


  console.log(`Environment -> ${env.data[conf.environment.toLowerCase()].environment}`);
  console.log(`URL -> ${env.data[conf.environment.toLowerCase()].url}`);
});

Then(/^Open Application$/, async () => {
  await browser.url(env.data[conf.environment.toLowerCase()].url)
  await browser.maximizeWindow()
  console.log(`Opening Application for ${env.data[conf.environment.toLowerCase()].environment}`);
})
