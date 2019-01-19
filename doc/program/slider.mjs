// import { updatePieChart } from "linked_view.mjs";
// let vale = updatePieChart()
function makeSlider(deathsYears){
            // Draws the slider on the left side of the page
            var dataTime = d3.range(0, 27).map(function(d) {
              return new Date(1990 + d, 0, 1);
            });
          
            // Draws and updates the silder
            var sliderTime = d3
              .sliderRight()
              .min(d3.min(dataTime))
              .max(d3.max(dataTime))
              .step(1)
              .height(400)
              .tickFormat(d3.timeFormat('%Y'))
              .tickValues(dataTime)
              .default(new Date(1990, 0, 1))
              .on('onchange', val => {
                  newDate0 = String(val)
                  newDate = newDate0.split(" ")[3]
                  console.log(newDate)
                  updatePieChart(newDate)
                //   updatePieChart(newDate)
                 });
          
            // Creates a svg in the vertical direction
            var gTime = d3
              .select('div#slider-time')
              .append('svg')
              .attr('width', 100)
              .attr('height', 500)
              .append('g')
              .attr('transform', 'translate(30,30)');
          
            // Cals the function to create svg and the slider
            gTime.call(sliderTime);
          
            // Returns the value of the selected year
            return d3.timeFormat("%Y")(sliderTime.value())
          
          }