const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const url = 'https://s.weibo.com/top/summary?cate=realtimehot';

async function fetchWeiboHot() {
    try {
        const html = await rp({
            uri: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(html);
        const rows = $('#pl_top_realtimehot table tbody tr');
        const result = [];

        rows.each((index, element) => {
            // 跳过表头
            if (index === 0) return;

            const rank = $(element).find('td.td-01').text().trim();
            const titleElem = $(element).find('td.td-02 a');
            const title = titleElem.text().trim();
            const link = 'https://s.weibo.com' + titleElem.attr('href');
            const hotValue = $(element).find('td.td-02 span').text().trim();

            if (title) {
                result.push({
                    rank,
                    title,
                    hotValue,
                    link
                });
            }
        });

        // 保存为CSV
        const csvHeader = '排名,标题,热度,链接\n';
        const csvRows = result.map(item =>
            `"${item.rank}","${item.title}","${item.hotValue}","${item.link}"`
        );
        const csvContent = csvHeader + csvRows.join('\n');

        const filePath = path.join(__dirname, 'weibo_hot.csv');
        fs.writeFileSync(filePath, csvContent, 'utf8');
        console.log('已保存到 weibo_hot.csv');
    } catch (err) {
        console.error('爬取失败:', err.message);
    }
}

fetchWeiboHot();