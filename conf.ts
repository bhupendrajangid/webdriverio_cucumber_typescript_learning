import { read } from "./src/config/readYaml";
export const conf = {
  data: read("conf", __dirname),
};
