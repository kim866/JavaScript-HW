// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!

function createTable(ufoReport) {
    ufoReport.forEach((data) => {

        var row = tbody.append("tr");

        Object.entries(data).forEach(function([key, value]) {
        
            // Step 4: Use d3 to append 1 cell per UFO report value
            // Append a cell to the row for each value 
            var cell = tbody.append("td");
           
            // Step 5: Use d3 to update each cell's text with
            cell.text(value);
          });
    }
)};

createTable(tableData);

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(row => row.datetime === inputValue);

    // Reset the data
    tbody.html("");

    if (filteredData == ""){
        createTable(tableData)
    } else {
        createTable(filteredData)
    };
    
});