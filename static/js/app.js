// Store the URL
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Initialise populating the dropdown menu
function init() {
    // Fetch the json data and console log it
    d3.json(URL).then(function(data) {
        let button_data = data.samples
        let names = data.names
        console.log(data);
    
    
    // Populate the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
        names.forEach((id) => {
        dropdownMenu.append("option").text(id);
    });

    // Obtain the first sample ID from the names list
    let ID_one = names[0];

    // Filter based on the value of the sample
    charts(ID_one)
    metatable(ID_one)

});
};

init();

// Function to update the data when the sampleid is changed
function optionChanged(sampleid) {
    charts(sampleid)
    metatable(sampleid)
}

// Function for the metadata table
function metatable(sampleid) {
    d3.json(URL).then(function(data) {
        let sampledata = data.metadata
        let sampleArray = sampledata.filter(number => number.id == sampleid)[0];
        let tablemenu = d3.select("#sample-metadata");
        // Clear the metadata
        tablemenu.html("")
        // Loop through the array and append the key value pairs to the tablemenu 
        Object.entries(sampleArray).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
            tablemenu.append("h5").text(`${key}: ${value}`);
          });
    });
}

// Function to create the bar and bubble chart
function charts(sampleid) {
    d3.json(URL).then(function(data) {
        let sampledata = data.samples
        // Filter based on sampleid value 
        let sampleArray = sampledata.filter(number => number.id == sampleid)[0];
        // Obtain the corresponding otu_ids, sample_values and otu_labels 
        let OTUids = sampleArray.otu_ids;
        let samplevalues = sampleArray.sample_values;
        let OTUlabels = sampleArray.otu_labels;
        // Set up the bubble chart
        var bubbledata = [{
            x: OTUids ,
            y: samplevalues ,
            text: OTUlabels,
            mode: 'markers',
            marker: {
              color:OTUids,
              size: samplevalues,
              colorscale: "Earth"
            }
          }];
                    
          var bubblelayout = {
            title: 'Bubble Chart',
            showlegend: false,
          };
          
          Plotly.newPlot('bubble', bubbledata, bubblelayout);
          
          // Create the bar chart - obtain the top 10 otu_id valuesby slicing the data and reversing the order
          var bardata = [{
            x: samplevalues.slice(0,10).reverse(),
            y: OTUids.slice(0,10).map(x => `OTU ${x}`).reverse(),
            text: OTUlabels.slice(0,10).reverse(),
            orientation: 'h',
            type: 'bar'
          }];
          
                    
          var barlayout = {
            title: 'Bar Chart',
          };
          
          Plotly.newPlot('bar', bardata, barlayout);
    });
} 





