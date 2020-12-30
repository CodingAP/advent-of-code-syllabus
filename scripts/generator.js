const fs = require('fs');

let createDay = async (day, year) => {
    let dir = `./years/${year}/day${day}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.writeFile(dir + '/README.md', '## Nothing Yet', (err) => {
        if (err) throw err;
        console.log(`Saved the README of day ${day}, year ${year}!`);
    });

    fs.writeFile(dir + '/part1.txt', '', (err) => {
        if (err) throw err;
        console.log(`Saved the README of day ${day}, year ${year}!`);
    });

    fs.writeFile(dir + '/part2.txt', '', (err) => {
        if (err) throw err;
        console.log(`Saved the README of day ${day}, year ${year}!`);
    });
}

(async () => {
    for (let year = 2015; year <= 2020; year++) {
        for (let day = 1; day <= 25; day++) {
            await createDay(day, year);
        }
    }
})();