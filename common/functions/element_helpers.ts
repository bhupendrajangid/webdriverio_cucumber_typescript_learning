import { resolveModuleName } from "typescript"

export function convertToElement(page) {
    let results = {}
    if (!page) throw new Error('Page is not available')

    Object.entries(page).forEach(record => {
        if (record[0] !== 'groups' && typeof record[1] === 'string') {
            console.log(`Converting ${record[0]} to element`)
            results[record[0]] = $(record[1])
        }
    })
    console.log(results)
    return results
}
