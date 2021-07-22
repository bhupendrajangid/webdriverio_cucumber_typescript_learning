import { Given, When, Then } from "@cucumber/cucumber";
import { read } from "../../src/config/readYaml";

Given(/^I have yaml file so reading it$/, async () => {
  console.log("reading YAML File");
  const yamlData = read("../testYAML.yaml"),
    configurationData = read("../conf.yaml");

  console.log(JSON.stringify(yamlData, undefined, 2));
  console.log(
    `Conf Data ->\n${JSON.stringify(configurationData, undefined, 2)}`
  );
});
