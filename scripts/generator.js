const fs = require('fs');
const fetch = require('node-fetch');
const htmlParser = require('node-html-parser');
const htmlToMarkdown = require('turndown')();
require('dotenv').config();

htmlToMarkdown.keep(['span']);
htmlToMarkdown.addRule('header2', {
    filter: ['h2'],
    replacement: content => {
        return '## ' + content.slice(1);
    }
});

let createDay = async (day, year) => {
    const response = await fetch(
        `https://adventofcode.com/${year}/day/${day}`, { headers: { cookie: `session=${process.env.SESSION_ID}` } }
    );

    const html = await response.text();
    const root = htmlParser.parse(html);
    const markdown = htmlToMarkdown.turndown(root.querySelectorAll('.day-desc')[0].innerHTML + '\n' + root.querySelectorAll('.day-desc')[1].innerHTML);

    let dir = `./years/${year}/day${day}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.writeFile(dir + '/README.md', markdown, (err) => {
        if (err) throw err;
        console.log(`Saved the README of day ${day}, year ${year}!`);
    });
}

(async () => {
    for (let day = 1; day <= 25; day++) {
        await createDay(day, 2015);
    }
})();