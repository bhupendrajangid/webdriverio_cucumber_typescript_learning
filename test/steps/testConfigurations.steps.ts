import { Given, When, Then } from '@cucumber/cucumber'
import { openApp } from "common/functions/application"
import { elements } from '../../pages/register';


const pageFctns = new class { get register() { return require('pages/register') } }

Given(/^I am opening Application$/, async () => {
    // await openApp('/mail')

    const locators = {
        submit_btn: "#submit",
        header: "//h1",
        fname: "[name=firstname]",
        lname: "[name=lastname]"
    }
    class ChaiRegister { private get header() { return $("//h1"); } }

    function convertToElement(locatorObject: Object) {
        let elemObj: Object = {}
        Object.entries(locatorObject).forEach(([key, value]) => {
            console.log('key', key, 'value', value)

            Object.defineProperty(elemObj, key,
                { enumerable: true, get: function () { return $(value) } })
        })
        console.log(elemObj)
        return elemObj
    }
    const elem = convertToElement(locators)
    console.log(await elem.header)
});