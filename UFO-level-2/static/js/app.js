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

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();

    //deleteTbody();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    tbody.html("");

    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value]) =>{
            var cell = row.append("td");
            cell.text(value);
        })
    })
});

//dateInput.on("change", ClickSelect);
