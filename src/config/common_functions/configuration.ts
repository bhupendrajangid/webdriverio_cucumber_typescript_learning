import { readYAML } from "common/functions/readYaml";
const envFilePath = "./../default_data/environment.yaml";

export const env = { data: readYAML(envFilePath, __dirname) };
