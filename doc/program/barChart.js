function make_barchart(data){
                // Set margins and coordinates for barchart
                var margin = {top: 15, right: 5, bottom: 60, left: 25};
                var width = 450 - margin.left - margin.right;
                var height = 380 - margin.top - margin.bottom;
                var color = d3.scaleThreshold()
                .domain(["No data",1,2,3,4,5,6,7,8,9,10])
                .range(["black" ,"#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", 
                    "#41ab5d","#238443","#006837","#004529", "#002529", "#001416"]);
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
                                .attr("width", width - margin.right)
                                .attr("height", height + margin.top + margin.bottom);
                // Scale X and Y
                var yScale = d3.scaleLinear()
                    .domain([0,10])
                    .range([height , margin.bottom])

                var yAxis = d3.axisLeft(yScale);

                var xScale = d3.scaleBand()
                    .domain(d3.range(0,13))
                    .range([margin.right, width - margin.right - margin.left])

                    // Add everything we need for the bar to the barchart
                    barchart.append("g")
                            .selectAll("rect")
                            .data(data)
                            .enter()
                            .append("rect")
                            .attr("width", width / 17)
                            .attr("height", function(d){
                                return height - yScale(d.value) ;
                            
                            })
                            .attr("x", function(d, i) {
                            return xScale(i) + margin.left
                            })
                            .attr("y", function(d){
                            return yScale(d.value);
                            })
                            .attr("fill",function(d){
                                return color(d.value)
                            }
                            )
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
                    .domain(["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014",
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
                
                    barchart.append("text")
                        .data(data)
                        .attr("x", width / 2)
                        .attr("y", margin.top)
                        .attr("text-anchor", "middle")
                        .style("font-family", "sans-sherif")
                        .style("font-size", "15px")
                        .style("font-weight", "bold")
                        .text(function(d){
                            return d.name +", Life Ladder years 2005-2017";
                        });
            };