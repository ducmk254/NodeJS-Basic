const puppeteer = require('puppeteer');
const shortid = require('shortid');

(async ()=>{
    const brower = await puppeteer.launch( // tao 1 brower co cho phep GUI headless: false 
        {
            headless:false
        }
    );
    const page = await brower.newPage(); // tao 1 page moi

    page.viewport({width:1280,height:720}); // set kich co cho page
    await page.goto('https://kenh14.vn',{waitUntil:"networkidle2"});  // di toi 1 trang web va cho toi khi page load toan bo js va img
    await page.screenshot({path: './imgs/'+shortid.generate()+'-kenh14.png'}); // chup anh man hinh tab hien tai va luu file anh lai

    await brower.close(); // close trinh duyet tu dong
})();