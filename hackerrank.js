
let puppeteer = require("puppeteer");
// const emailPassObj = require("./secrets");
const answer = require("./code");

let browserStartPromise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args : ["--start-maximized", "--disable-notification"]
});
let page;

(async function fn(){
    try{
        let browserObj = await browserStartPromise;
        page = await browserObj.newPage();
        await newTab.goto("https://www.google.com/");
        await page.type("input[title='Search']","hackerrank");
        await page.waitForSelector('h3>a',{visible: true});
        let sign = await page.$$("h3>a")
        await sign[0].click();
        await page.waitForSelector("#input-1")
        await page.type("#input-1","xiyiro8056@enpaypal.com")
        await page.type("#input-2","xiyiro8056@enpaypal.com")
        await page.waitForSelector(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        await page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        await page.waitForSelector("div[data-automation='algorithms']");
        await page.click("div[data-automation='algorithms']");
        await page.waitForSelector("input[value='warmup']")
        await page.click("input[value='warmup']")
        let questionArr = await page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:100});
        for(let i=0; i<questionArr.length; i++){
            await qestionSolver(page,questionArr[i],answer[i]);
        }
    }catch{
        console.log(err);
    }
})();


(async function qestionSolver(page,quetion,answer){
    try{
        await quetion.click();
        await page.waitForSelector(".view-lines")
        await page.click("input[class='checkbox-input']");
        await page.click(".text-area.custominput",{delay : 50});
        await page.keyboard.type(answer);
        await page.keyboard.down('Control')
        await page.keyboard.press('a')
        await page.keyboard.press('x')
        await page.click(".view-lines")
        await page.keyboard.press('a')
        await page.keyboard.press('v')
        await page.click(".hr-monaco__run-code")
        await page.click(".hr-monaco-submit")
    }catch{
        console.log(err)
    }
})();
