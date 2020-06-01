const puppeteer = require('puppeteer');
const downloader = require('image-downloader');
const path = require('path');

(async ()=>{
    const brower = await puppeteer.launch({headless:true});
    console.log('brower opened...');
    const page = await brower.newPage();
    console.log('Created a new tab...');
    const url = 'https://kenh14.vn/ai-roi-cung-khac-cac-hot-girl-nay-cung-khong-ngoai-le-khi-vong-1-cu-ngay-cang-phong-phao-20171207193958533.chn';
    await page.goto(url);
    console.log('Page loaded ..');

    // get array of link images:
    let imgLinks = await page.evaluate(()=>{
        let imgLinks = document.querySelectorAll('.sp-img-zoom > img, .sp-img-lightbox > img, .detail-img-lightbox > img');
        imgLinks = [...imgLinks];

        const imgLinksArr = imgLinks.map((link)=>{
            return link.getAttribute('src');
        });
        return imgLinksArr;
        
    });
    console.log(imgLinks);
    // download all image and to save imgs path:
    await Promise.all(
        imgLinks.map((linkImg)=>{
            return downloader.image({
                    url: linkImg,
                    dest: path.join(__dirname,'/imgs/')
                }
            );
        })
    );
    await page.close();
    await brower.close();
})();