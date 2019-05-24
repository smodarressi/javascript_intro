// from data.js
var tableData = data;

//console.log(tableData);
tableData.filter

//select tbody for table creation
var tbody = d3.select("tbody");

//select submit button
var submit_button = d3.select("#filter-btn");

//console.log("hello");
//console.log(submit_button);

//default table will have all data
getData(tableData);
  
// Attach an event to detect button press after input
  
submit_button.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    //get text from input form
    var datetime_input = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = datetime_input.property("value");

    //console.log("input Value:",inputValue);
    
    //create filter function with tableData
    //use the filter function to get the data specific data for the date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //console.log("filterData>>>", filteredData);
    
    getData(filteredData);
    // //console.log(filteredData);
    
});

//use function to iterate through and get the values to append to td
function getData(tableData){
    tableData.forEach((sighting) => {
        //console.log(sighting)
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          //console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
}




