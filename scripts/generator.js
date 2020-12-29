const fs = require('fs');

let createDay = async (day, year) => {
    let dir = `./days/${year}/day${day}`;
    
    fs.mkdirSync(dir);
    fs.writeFileSync(dir + '/part1.txt');
    fs.writeFileSync(dir + '/part2.txt');
}

(async () => {
    for (let year = 2015; year <= 2020; year++) {
        for (let day = 1; day <= 25; day++) {
            await createDay(day, year);
        }
    }
})();