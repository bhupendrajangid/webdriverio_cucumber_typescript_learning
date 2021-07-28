import fs from "fs";
import yaml from "js-yaml";
import path from "path";

let alreadyImported = {};
export function readYAML(
  filePath: string,
  appRoot = process.env.appRoot || process.cwd.toString()
) {
  if (
    filePath.includes(".yaml") === false &&
    filePath.includes(".yml") === false
  ) {
    filePath += ".yaml";
  }

  try {
    const resolvedPath = path.resolve(appRoot, filePath),
      fileData = fs.readFileSync(resolvedPath, "utf-8");

    if (alreadyImported[resolvedPath]) {
      return alreadyImported[resolvedPath];
    } else {
      const yamlData = yaml.load(fileData);
      alreadyImported[resolvedPath] = yamlData;
      return yamlData;
    }
  } catch (e) {
    console.error(e);
  }
}
