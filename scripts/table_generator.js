const fetch = require('node-fetch');
const htmlParser = require('node-html-parser');
require('dotenv').config();

const template = '| Day $day$ - $title$ | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/$year$/day$day$/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/$year$/day$day$/part1.md) |';

let createTable = async year => {
    let table = '';

    for (let day = 1; day <= 25; day++) {
        const response = await fetch(
            `https://adventofcode.com/${year}/day/${day}`, { headers: { cookie: `session=${process.env.SESSION_ID}` } }
        );

        const html = await response.text();
        const root = htmlParser.parse(html);

        let title = root.querySelectorAll('h2')[0].innerText.split(' ');
        title = title.slice(3, title.length - 1).join(' ');

        table += template.replace(/\$day\$/g, day).replace(/\$year\$/g, year).replace(/\$title\$/g, title) + '\n';
    }
    return table;
}

(async () => {
    for (let year = 2015; year <= 2020; year++) {
        console.log(await createTable(year));
    }
})();