export const click = async (elem: Promise<WebdriverIO.Element>) => { await (await elem).click() }