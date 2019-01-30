/* 
    Wiebe Jelsma, 12468223
    Minor Programmeren, Programmeerproject
    January 2019
*/


function visualization(){
    data = "world_countries.json"
    happiness = "happiness.json"
    deaths = "deaths.json"
    var requests = [d3.json(data), d3.json(happiness), d3.json(deaths)];
    Promise.all(requests).then(function(response){
        var Data = response[0]
        var Happiness = response[1]
        var Deaths = response[2]
        var countriesHappiness = []
        var happinessYears = []
        var happiness = []

        for(i=0;i<1560;i++){
            countriesHappiness.push(Object.values(Happiness.country)[i])
            happiness.push(Object.values(Happiness.LifeLadder)[i])
            happinessYears.push(Object.values(Happiness.year)[i])
        }
        var countriesDeaths = []
        var deathsYears = []
        var alcoholDeaths = []
        var drugsDeaths = []
        for(i=0;i<6154;i++){
            deathsYears.push(Object.values(Deaths.Year)[i])
            countriesDeaths.push(Object.values(Deaths.Entity)[i])
            alcoholDeaths.push(Object.values(Deaths.AlcoholDeaths)[i])
            drugsDeaths.push(Object.values(Deaths.DrugsDeaths)[i])
        }
        colourScale = ["N.D.",1,2,3,4,5,6,7,8,9,10]
        // Set tooltips
        var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([-10, 0])
                    .html(function(d) {
                        if(countriesHappiness.includes(d.properties.name)){
                            var place = countriesHappiness.indexOf(d.properties.name)
                            HappinessMark = happiness[place]
                            happinessPlace = happinessYears[place]
                        }
                    // Show household income if someone hovers over the country
                        return "<strong>Country: </strong><span class= \
                        'details'>" + d.properties.name + "<br></span>" 
                        +"<strong>Life Ladder:  </strong><span \
                        class='details'>" + HappinessMark.toFixed(2) + "<br></span>" 
                        +"<strong>Year:  </strong><span class='details'>" 
                        + happinessPlace + "<br></span>"
                    })
        // Right margins and coordinates for the map
        var margin = {top: 20, right: 5, bottom: 0, left: 50},
                    width = 910 - margin.left - margin.right,
                    height = 650 - margin.top - margin.bottom;
        var padding = 25;
        var color = d3.scaleThreshold()
            .domain(colourScale)
            .range(["black" ,"#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", 
                "#41ab5d","#238443","#006837","#004529", "#002529", "black"]);
        
         var path = d3.geoPath();

        // Make map
        var svg = d3.select("#map")
                    .append("svg")
                    .attr("width", width - margin.right)
                    .attr("height", height)
                    .style("fill", "green")
                    .append('g')
                    .attr('class', 'map');
                    var projection = d3.geoMercator()
                    .scale(130)
                   .translate( [width / 2, (height) / 1.5]);

        var path = d3.geoPath().projection(projection);
        var t = d3.transition()
                .duration(750);

        svg.call(tip);
        ready(Data, Happiness, Deaths);

        function ready(Data, Happiness, Deaths) {
           
            // Put all the countries in the right places, link income to the color
            svg.append("g")
                .attr("class", "countries")
                .selectAll("path")
                .data(Data.features)
                .enter()
                .append("path")
                .attr("d", path)
                .style("fill", function(d) {
                    
                    if(countriesHappiness.includes(d.properties.name)){
                      var place = countriesHappiness.indexOf(d.properties.name)
                      HappinessMark = happiness[place]
                      return (color(HappinessMark));
                    }
                    return "black"
                })
                        
                .style('stroke-width', 1.5)
                .style("opacity",0.8)
                // tooltips
                .style("stroke","grey")
                .style('stroke-width', 0.3)
                // Only show country and income if the country is in our list
                .on('mouseover',function(d){
                    if(countriesHappiness.includes(d.properties.name)){
                        tip.show(d);
                    }
                    d3.select(this)
                    .style("opacity", 1)
                    .style("stroke","white")
                    .style("stroke-width",2.5);
                })
                // Get rid of old barchart and make a new one when country clicked
                .on("click", function (d){
                    d3.select("#piechart > *").remove()
                    d3.select("#chart > *").remove()
                    d3.select("#slider-time > *").remove()
                    makeSlider(deathsYears);
                    function makeSlider(deathsYears){
                        // Draws the slider on the left side of the page
                        var dataTime = d3.range(0, 27).map(function(d) {
                            return new Date(1990 + d, 0, 1);
                        });
                    
                        // Draws and updates the silder
                        var sliderTime = d3
                            .sliderBottom()
                            .min(d3.min(dataTime))
                            .max(d3.max(dataTime))
                            .step(1)
                            .height(1)
                            .width(800)
                            .tickFormat(d3.timeFormat('%Y'))
                            .tickValues(dataTime)
                            .default(new Date(1990, 0, 1))
                            .on('onchange', val => {
                                startDate = 1990
                                newDate0 = String(val)
                                newDate = newDate0.split(" ")[3]
                                correction = newDate - startDate
                                newPieChart(correction);
                                });
                    
                        // Creates a svg in the vertical direction
                        var gTime = d3
                            .select('div#slider-time')
                            .append('svg')
                            .attr('width', 950)
                            .attr('height', 100)
                            .append('g')
                            .attr('transform', 'translate(50,50)');
                    
                        // Cals the function to create svg and the slider
                        gTime.call(sliderTime);
                    
                        // Returns the value of the selected year
                        return d3.timeFormat("%Y")(sliderTime.value())
                        }
                    var data = [];
                    HappinessNumber = 0
                    if(countriesHappiness.includes(d.properties.name)){
                        var place = countriesHappiness.indexOf(d.properties.name)
                        var yearCorrect = 0
                        for(i=0; i<13; i++){
                            Happiness2008 = happiness[(place + i - yearCorrect)]
                            yearOfHappiness = happinessYears[(place + i - yearCorrect)]
                            yearCheck = 2005 + i
                            if(yearOfHappiness == yearCheck){
                                data.push({name: d.properties.name, 
                                value: Happiness2008.toFixed(2), year : yearOfHappiness})
                            }
                            else{
                                yearCorrect++
                                data.push({name: d.properties.name,
                                value: 0, year: yearOfHappiness})
                            } 
                        }  
                        make_barchart(data)
                    }
                    function newPieChart(correction){
                        dataPie = []
                        d3.select("#piechart > *").remove()
                        if(countriesDeaths.includes(d.properties.name)){
                          var placeDeaths = countriesDeaths.indexOf(d.properties.name)
                          DeathsAlcohol = alcoholDeaths[placeDeaths + correction]
                          DeathsDrugs = drugsDeaths[placeDeaths + correction]
                          dataPie.push({name: d.properties.name, value: DeathsAlcohol},
                              {name: d.properties.name, value: DeathsDrugs})
                          make_piechart(dataPie)
                        }    
                      } 
                    dataPie = []
                    correction = 0
                    if(countriesDeaths.includes(d.properties.name)){
                        var placeDeaths = countriesDeaths.indexOf(d.properties.name)
                        DeathsAlcohol = alcoholDeaths[placeDeaths + correction]
                        DeathsDrugs = drugsDeaths[placeDeaths + correction]
                        dataPie.push({name: d.properties.name, value: DeathsAlcohol},
                            {name: d.properties.name, value: DeathsDrugs})
                        make_piechart(dataPie)
                    }
                    })
                // If the cursor moves away from the country, stop showing data 
                .on('mouseout', function(d){
                    tip.hide(d);
    
                    d3.select(this)
                    .style("opacity", 0.8)
                    .style("stroke","white")
                    .style("stroke-width",0.3);
                });
                // Make legend
                legend = svg.selectAll("#map")
                            .data(colourScale)
                            .enter()
                            .append("g")
                            .attr("class", ".legend")
                            .attr("transform", function(d, i) { 
                                return "translate(0," + i * 17 + ")"; 
                            });
                // Fill in all colors of the legend
                legend.append("rect")
                    .attr("x", width - padding)
                    .attr("y", 0)
                    .attr("width", padding)
                    .attr("height", margin.top)
                    .style("fill", function(d){
                        console.log(d)
                        return color(d);
                        })

                // Add text to legend
                legend.append("text")
                        .attr("x", width - 60)
                        .attr("y", 14)
                        .style("color", "#FFF")
                        .text(function(d){
                        return d;
                        })
                    }
    }).catch(function(e){
        throw(e);
    });
};

