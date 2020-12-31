const fs = require('fs');
const template = fs.readFileSync('./scripts/template').toString();

let createDay = async (day, year) => {
    let dir = `./years/${year}/day${day}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    let currentMD = template.replace(/\$day\$/g, day).replace(/\$year\$/g, year);

    fs.writeFile(dir + '/part1.md', currentMD.replace(/\$part\$/g, 1), (err) => {
        if (err) throw err;
        console.log(`Saved the markdown file of day ${day}, part 1, year ${year}!`);
    });

    fs.writeFile(dir + '/part2.md', currentMD.replace(/\$part\$/g, 2), (err) => {
        if (err) throw err;
        console.log(`Saved the markdown file of day ${day}, part 2, year ${year}!`);
    });
}

(async () => {
    for (let year = 2015; year <= 2020; year++) {
        for (let day = 1; day <= 25; day++) {
            await createDay(day, year);
        }
    }
})();