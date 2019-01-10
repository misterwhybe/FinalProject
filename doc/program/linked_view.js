/* 
    Wiebe Jelsma, 12468223
    Minor Programmeren, Programmeerproject
    January 2019
*/


window.onload = function(){
    data = "world_countries.json"
    happiness = "happiness.json"
    deaths = "deaths.json"
    

    var requests = [d3.json(data), d3.json(happiness), d3.json(deaths)];

    Promise.all(requests).then(function(response){
        var Data = response[0]
        var Happiness = response[1]
        var Deaths = response[2]
        console.log(Happiness)

        var countriesHappiness = []
        happinessYears = []
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
        console.log(Deaths)



        // Set tooltips
        var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([-10, 0])
                    .html(function(d) {
                        if(countriesHappiness.includes(d.properties.name)){
                            var place = countriesHappiness.indexOf(d.properties.name)
                            HappinessMark = happiness[place]
                        }
                    // Show household income if someone hovers over the country
                        return "<strong>Country: </strong><span class= \
                        'details'>" + d.properties.name + "<br></span>" 
                        +"<strong>Life Ladder:  </strong><span \
                        class='details'>" + HappinessMark + "<br></span>"
                    })
        // Right margins and coordinates for the map
        var margin = {top: 20, right: 0, bottom: 0, left: 50},
                    width = 960 - margin.left - margin.right,
                    height = 650 - margin.top - margin.bottom;
        var padding = 35;
        var color = d3.scaleThreshold()
            .domain(["No data",1,2,3,4,5,6,7,8,9,10])
            .range(["black" ,"#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", 
                "#41ab5d","#238443","#006837","#004529", "#002529", "#000000"]);
        
         var path = d3.geoPath();

        // Make map
        var svg = d3.select("#map")
                    .append("svg")
                    .attr("width", width)
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
                    d3.select("#chart > *").remove()
                    var data = [];
                    HappinessNumber = 0
                    if(countriesHappiness.includes(d.properties.name)){
                        var place = countriesHappiness.indexOf(d.properties.name)
                        Happiness2008 = happiness[place]
                        Happiness2009 = happiness[place + 1]
                        Happiness2010 = happiness[place + 2]
                        Happiness2011 = happiness[place + 3]
                        Happiness2012 = happiness[place + 4]
                        Happiness2013 = happiness[place + 5]
                        Happiness2014 = happiness[place + 6]
                        Happiness2015 = happiness[place + 7]
                        Happiness2016 = happiness[place + 8]
                        Happiness2017 = happiness[place + 9]
                        // Put all data in a dictionary, give it to the barchart
                        data.push({name: d.properties.name, 
                            value: Happiness2008},
                            {name: d.properties.name, value: Happiness2009},
                            {name: d.properties.name, value: Happiness2010},
                            {name: d.properties.name, value: Happiness2011},
                            {name: d.properties.name, value: Happiness2012},
                            {name: d.properties.name, value: Happiness2013},
                            {name: d.properties.name, value: Happiness2014},
                            {name: d.properties.name, value: Happiness2015},
                            {name: d.properties.name, value: Happiness2016},
                            {name: d.properties.name, value: Happiness2017})
    
                        make_barchart(data)
                    }
                    dataPie = []
                    if(countriesDeaths.includes(d.properties.name)){
                        var placeDeaths = countriesDeaths.indexOf(d.properties.name)
                        DeathsAlcohol = alcoholDeaths[placeDeaths]
                        DeathsDrugs = drugsDeaths[placeDeaths]
                        dataPie.push({name: d.properties.name, value: DeathsAlcohol},
                            {name: d.properties.name, value: DeathsDrugs})
                        make_piechart(dataPie)
                    }

                    // If we don't have data of the country, use the OECD avaerage
                    // else{
                    //     Life = life[life.length - 1]
                    //     Education = educationYears[educationYears.length - 1]
                    //     data.push({name: "Average of OECD", value: Life}, {name: 
                    //         "Average of OECD", value: Education})
                    //     make_barchart(data)
                    // }
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
                            // .data([0-1,1-2,2-3,3-4,4-5,5-6,6-7,7-8,8-9,9-10])
                            .data(["No data",1,2,3,4,5,6,7,8,9,10])
                            .enter()
                            .append("g")
                            .attr("class", ".legend")
                            .attr("transform", function(d, i) { 
                                return "translate(0," + i * 17 + ")"; 
                            });
                // Fill in all colors of the legend
                legend.append("rect")
                    .attr("x", width - padding)
                    .attr("y", 5)
                    .attr("width", padding)
                    .attr("height", margin.top)
                    .style("fill", d => color(d))

                // Add text to legend
                legend.append("text")
                        .attr("x", width - 85)
                        .attr("y", margin.top)
                        .style("color", "#FFF")
                        .text(function(d){
                        return d;
                        })
                    }
            function make_barchart(data){
                // Set margins and coordinates for barchart
                var margin = {top: 15, right: 5, bottom: 60, left: 25};
                var width = 480 - margin.left - margin.right;
                var height = 380 - margin.top - margin.bottom;
        
                var padding = 20;
                // Specify different colors per bar
                var colors = d3.scaleLinear()
                                .domain([0, 10])
                                .range(["#d9f0a3","#004529"]);
                                // .range(["red", "green"])
        
                var tooltip = d3.select("body")
                                .append("div")
                                .style('position','absolute')
                                .style('background', "rgba(0,0,0,0.6)")
                                .style('color', "#ffa500")
                                .style('border','1px #333 solid')
                                .style('padding', "6px")
                                .style('font-family', "sans-sherif")
                                .style('border-radius','3px');
                // Make the SVG 
                var barchart = d3.select("#chart")
                                .append("svg")
                                .attr("width", width + margin.left + margin.right)
                                .attr("height", height + margin.top + margin.bottom);
                // Scale X and Y
                var yScale = d3.scaleLinear()
                    .domain([0,10])
                    .range([height , margin.bottom])

                var yAxis = d3.axisLeft(yScale);

                var xScale = d3.scaleBand()
                    .domain(d3.range(0,10))
                    .range([margin.right, width - margin.right - margin.left])

                    // Add everything we need for the bar to the barchart
                    barchart.append('g')
                            .selectAll("rect")
                            .data(data)
                            .enter()
                            .append("rect")
                            .attr("width", width / 11)
                            .attr("height", function(d){
                            return height - yScale(d.value) ;
                            })
                            .attr("x", function(d, i) {
                            return xScale(i) + margin.left
                            })
                            .attr("y", function(d){
                            return yScale(d.value);
                            })
                            .attr("fill", function(d,i) {
                                return colors(i);
                            })
                            // If the cursor touches the barchart, show the value
                            .on('mouseover', function(d){
                                tooltip.transition()
                                    .duration(600)
                                    .style('opacity', 0.9)
                                tooltip.html(d.value)
                                    .style('left', (d3.event.pageX) + 'px')
                                    .style('top', (d3.event.pageY + 'px'))
                                d3.select(this).style('opacity', 0.5)
                                })
                            // Slowely fade out if cursor is not on bar chart
                            .on('mouseout', function(d) {
                                tooltip.transition()
                                    .duration(1000)
                                    .style('opacity', 0)
                                d3.select(this).style('opacity', 1)
                                })
                            
                    var hScale =  d3.scaleBand()
                    .domain(["2008","2009","2010","2011","2012","2013","2014",
                    "2015","2016","2017"])
                    .range([margin.left, width - margin.right])
        
                    // Make axis
                    barchart.append("g")
                            .attr("class", "axis")
                            .attr("transform", "translate("+[0, height]+")")
                            .call(d3.axisBottom(hScale).ticks(10))
                            .selectAll("text")
                            .style("text-anchor", "end")

                    barchart.append("g")
                            .attr("class", "axis")
                            .attr("transform", "translate("+[margin.left, 0]+")")
                            .call(yAxis)
                
                    // barchart.append("text")
                    //     .data(data)
                    //     .attr("x", width / 2)
                    //     .attr("y", margin.top)
                    //     .attr("text-anchor", "middle")
                    //     .style("font-family", "sans-sherif")
                    //     .style("font-size", "20px")
                    //     .style("font-weight", "bold")
                        // .text(function(d){
                        //     return d.name;
                        // });
            };
            function make_piechart(dataPie){
                
                // var width = 600;
                // var height = 500;
                // var svg = d3.select("body")
                //             .append("svg")
                //             .attr("width", width)
                //             .attr("height", height)
                //             .style("background", "pink")
                // console.log(DeathsAlcohol)
                // console.log(DeathsDrugs)
            }
    }).catch(function(e){
        throw(e);
    });
};
