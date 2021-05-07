const puppeteer = require('puppeteer');


var gameid = 6639063
var botnum = 5

async function nbot() {

    const browser = await puppeteer.launch({ headless: true }) //{ headless: false } <- to avoid handshake kicking

    var page = [];

    for (n = 0; n < botnum; n++) {
        page[n] = await browser.newPage();
        page[n].goto('https://kahoot.it'); //, { waitUntil: 'networkidle2' }
    }

    for (n = 0; n < botnum; n++) {

        //type id
        await page[n].focus('input[name=gameId]');
        await page[n].keyboard.type(`${gameid}`);
        //setTimeout(function(){ page[n].keyboard.press('Enter'); }, 3000);
        page[n].keyboard.press('Enter');

        await page[n].waitForNavigation();
        //await page.pdf({ path: 'kahootbot/s1.pdf', format: 'a4' });

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
///for (r = 0; r < botnum; r++) {
    //setTimeout(function(){ nbot() }, 3000);
    nbot()
    

//}
