# belly-button-challenge
In this assignment, I have built an interactive dashboard to explore the Belly Button Biodiversity data, which catalogues  microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Dashboard
The dashboard has been deployed on github-pages. See below for the link:
        https://eviekeo.github.io/belly-button-challenge/

## Code Source - used in app.js

        let sampleArray = sampledata.filter(number => number.id == sampleid)[0];
The above code was used to filter the sampledata to find the sampleid
The code was adapted from the below site: https://blog.debugeverything.com/how-to-use-arrow-functions-with-javascript-filter/

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
The above code was used to create the bubble graph and was adapted from the below site:
https://plotly.com/javascript/bubble-charts/


                Object.entries(sampleArray).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
            tablemenu.append("h5").text(`${key}: ${value}`);
          });
The above code was used to searcg through the metadata and obtain key value pairs.