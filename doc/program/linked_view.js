/* 
    Wiebe Jelsma, 12468223
    Minor Programmeren, Programmeerproject
    January 2019
*/


window.onload = function(){
    data = "world_countries.json"
    happiness = "happiness.json"
    deaths = "deaths.json"
    a = "Life Ladder"

    var requests = [d3.json(data), d3.json(happiness), d3.json(deaths)];

    Promise.all(requests).then(function(response){
        var Data = response[0]
        var Happiness = response[1]
        var Deaths = response[2]
        console.log(Happiness)

        var countriesHappiness = []
        happinessYears = []
        var happiness = []
        var deaths = []

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
        console.log(alcoholDeaths)



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
                    // if(countries.includes(d.properties.name)){
                    //     var place = countries.indexOf(d.properties.name)
                    //     Income = income[place] 
                    //     return (color(Income));
                    // }
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
                    .style("stroke-width",3);
                })
                // Get rid of old barchart and make a new one when country clicked
                // .on("click", function (d){
                //     d3.select("#chart > *").remove()
                //     var data = [];
                //     Life = 0
                //     Education = 0
                //     if(countries.includes(d.properties.name)){
                //         var place = countries.indexOf(d.properties.name)
                //         Life = life[place]
                //         Education = educationYears[place]
                //         // Put all data in a dictionary, give it to the barchart
                //         data.push({name: d.properties.name, value: Life},{name: 
                //             d.properties.name, value: Education})
    
                //         make_barchart(data)
                //     }
                //     // If we don't have data of the country, use the OECD avaerage
                //     else{
                //         Life = life[life.length - 1]
                //         Education = educationYears[educationYears.length - 1]
                //         data.push({name: "Average of OECD", value: Life}, {name: 
                //             "Average of OECD", value: Education})
                //         make_barchart(data)
                //     }
                //     })
                // // If the cursor moves away from the country, stop showing data 
                // .on('mouseout', function(d){
                //     tip.hide(d);
    
                //     d3.select(this)
                //     .style("opacity", 0.8)
                //     .style("stroke","white")
                //     .style("stroke-width",0.3);
                // });
            }
    }).catch(function(e){
        throw(e);
    });
};
