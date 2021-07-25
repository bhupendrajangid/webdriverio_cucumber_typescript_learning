import { read } from "./../readYaml";
const envFilePath = "./../default_data/environment.yaml";

export const env = { data: read(envFilePath, __dirname) };
