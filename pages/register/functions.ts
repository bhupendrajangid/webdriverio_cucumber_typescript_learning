import { click } from "common/functions/actions";
import { convertToElement } from "common/functions/element_helpers";
import { readYAML } from "common/functions/readYaml";
export const locators = readYAML('locators', __dirname);
export const elements = convertToElement(locators)

async function submitForm() { await click(elements['submit_btn']) }

module.exports = {
    submitForm
}