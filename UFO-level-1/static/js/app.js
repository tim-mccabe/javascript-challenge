// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

data.forEach((sightingReport) => {
    console.log(sightingReport);
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


