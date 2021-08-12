import { getAppUrl } from "common/functions/configurations"

export async function openApp(appUrl?: string) {
    let urlToOpen = getAppUrl()
    if (appUrl) {
        if (appUrl.includes('http://') || appUrl.includes('https://')) urlToOpen = appUrl
        else urlToOpen = urlToOpen + appUrl
    }
    console.log(`Opening application with url: ${urlToOpen}`)
    await browser.maximizeWindow()
    await browser.url(urlToOpen)
}