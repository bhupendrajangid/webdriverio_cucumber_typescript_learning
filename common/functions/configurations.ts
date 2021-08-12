import { readYAML } from "common/functions/readYaml";
const
    confFilePath = "./../../conf.yaml",
    confData = readYAML(confFilePath, __dirname),
    envDataFilePath = "./../data/environment.yaml",
    envData = readYAML(envDataFilePath, __dirname)

export function getEnvironment(): string { return confData.environment }
export function getAppUrl(): string { return envData[getEnvironment()].appUrl }