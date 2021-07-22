import { read } from "./src/config/readYaml";

export const confData = () => {
  return read("conf");
};
