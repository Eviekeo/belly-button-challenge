// Store the URL
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//let buttondata;

// Initialise the page with a default plot
function init() {
    d3.json(URL).then((data) => {
        buttondata = data;
    DropDown(buttondata);

});
};

// This function is called when a dropdown menu item is selected
function DropDown (data) {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Extract the names from the data dictionary and store into a variable
    let names = data.names;
}


    
    
// Use D3 to select the dropdown menu
//let dropdownMenu = d3.select("#selDataset");
    
    
    
    
    
    


// Fetch the JSON data and console log it
//d3.json(URL).then(function(data) {
//  console.log(data);


//    let samples_values = data.samples[0].sample_values;
//    console.log(samples_values)

//    let 
//});

console.log("hello");
