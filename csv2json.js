const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("csv/data.csv")
  .pipe(csv())
  .on("data", data => results.push(data))
  .on("end", () => {
    let rank = 0;

    results.forEach(result => {
      let totalLabs =
        parseInt(result["# of Skill Badges Completed in Track 1"]) +
        parseInt(result["# of Skill Badges Completed in Track 2"]);
      result.totalLabs = totalLabs;
    });

    results.sort((a, b) => {
      if (b.totalLabs - a.totalLabs === 0)
        return a["Student Name"] > b["Student Name"] ? 1 : -1;
      return b.totalLabs - a.totalLabs;
    });

    results[0].rank = ++rank;

    for (let i = 1; i < results.length; i++) {
      if (results[i].totalLabs === results[i - 1].totalLabs) {
        results[i].rank = rank;
      } else {
        results[i].rank = ++rank;
      }
    }

    fs.writeFileSync("src/studentsData.json", JSON.stringify(results), err => {
      if (err) throw err;
      console.log("Data saved!");
    });
  });
