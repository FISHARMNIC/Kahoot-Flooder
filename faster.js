const puppeteer = require('puppeteer');


var gameid = 6639063 //change this
var botnum = 5 //don't change this

async function nbot() {

    const browser = await puppeteer.launch({ headless: true })

    var page = [];

    for (n = 0; n < botnum; n++) {
        page[n] = await browser.newPage();
        page[n].goto('https://kahoot.it');
    }

    for (n = 0; n < botnum; n++) {

        //type id
        await page[n].focus('input[name=gameId]');
        await page[n].keyboard.type(`${gameid}`);
        page[n].keyboard.press('Enter');
        
        //wait for redirect
        await page[n].waitForNavigation();

        //type user
        await page[n].focus('input[name=nickname]');
        await page[n].keyboard.type(`${rnduser()}`);
        page[n].keyboard.press('Enter');


    }
}

function rnduser() {
    var build = []
    for (i = 0; i < 5; i++) {
        build.push(Math.floor(Math.random() * 9))
    }
    return build.join('')
}

nbot()

