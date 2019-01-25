function make_piechart(dataPie){
          alcohol = Math.round(dataPie[0].value)
          drugs = Math.round(dataPie[1].value)

          var data = [alcohol, drugs]

          var width = 440,
            height = 660,
            radius = height / 6;
            padding = 10

          var color = d3.scaleOrdinal()
            .range(["#525252", "#bdbdbd"]);

          var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(10);

          var labelArc = d3.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);

          var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d; });

          var svg = d3.select("#piechart")
            .append("svg")
            .attr("width", width - 100)
            .attr("height", height - 100)
            .append("g")
            .attr("transform", "translate(" + width / 4 + "," + height / 1.5 + ")");

          var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

          g.append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data); });

          g.append("text")
            .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
            .attr("dy", "-1em")
            .text(function(d) { return d.data; })
            .style("color", "white")
          g.append("text")
            .attr("x", width / 9)
            .attr("y", height - 780)
            .attr("text-anchor", "middle")
            .style("font-family", "sans-sherif")
            .style("font-size", "13px")
            // .style("font-weight", "bold")
            .text(function(d){
                return "Amount of deaths related to drugs or alcohol in " + dataPie[0].name;
            });
          
        // Fill in all colors of the legend
        g.append("rect")
          .attr("x", width / 2.2)
          .attr("y", height - 600)
          .attr("width", width / 14)
          .attr("height", height / 16)
          .attr("transform", function(d, i) { 
            return "translate(0," + i * 35 + ")"})
          .style("fill", d => color(d.data))

        // Add text to legend
        g.append("text")
              .data(["Alcohol deaths", "Drug deaths"])
              .attr("x", width / 4.3)
              .attr("y", height - 570)
              .attr("transform", function(d, i) { 
                return "translate(0," + i * 25 + ")"})
              .style("color", "red")
              .text(function(d){
              return d;
              })          
        }