import { Given, When, Then } from "@cucumber/cucumber";
import { read } from "../../src/config/readYaml";

Given(/^I have yaml file so reading it$/, async () => {
  console.log("reading YAML File");
  console.log(__dirname);
  const configurationData = read("../../conf.yaml", __dirname);

  console.log(
    `Conf Data ->\n${JSON.stringify(configurationData, undefined, 2)}`
  );
});
