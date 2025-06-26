const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');

const HOT_URL = 'https://s.weibo.com/top/summary?cate=realtimehot';

(async () => {
    console.log('启动浏览器...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(HOT_URL, {
        waitUntil: 'networkidle2',
        timeout: 60000
    });
    // 等待表格加载
    await page.waitForSelector('table', { timeout: 15000 });
    console.log('页面加载完成');

    // 获取页面内容
    const html = await page.content();
    fs.writeFileSync('weibo_hot_real.html', html, 'utf8');
    console.log('已保存真实页面内容到 weibo_hot_real.html');

    // cheerio 解析
    const $ = cheerio.load(html);
    const hotList = [];
    $('table tr').each((index, element) => {
        if (index === 0) return; // 跳过表头
        const rank = $(element).find('td:nth-child(1)').text().trim();
        const aTag = $(element).find('td:nth-child(2) a');
        if (aTag.length === 0) return;
        const title = aTag.text().trim();
        const href = aTag.attr('href');
        const link = href ? 'https://s.weibo.com' + href : '';
        const hotValue = $(element).find('td:nth-child(2) span').text().trim();
        if (title) {
            hotList.push({ rank, title, hotValue, link });
        }
    });

    // 写入CSV
    const csvWriter = createCsvWriter({
        path: 'weibo_hot.csv',
        header: [
            { id: 'rank', title: '排名' },
            { id: 'title', title: '标题' },
            { id: 'hotValue', title: '热度' },
            { id: 'link', title: '链接' }
        ]
    });
    await csvWriter.writeRecords(hotList);
    console.log('已保存到 weibo_hot.csv');
    await browser.close();
})();