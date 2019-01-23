function make_piechart(dataPie){
          alcohol = Math.round(dataPie[0].value)
          drugs = Math.round(dataPie[1].value)

          var data = [alcohol, drugs]

          var width = 660,
            height = 600,
            radius = height / 3;
            padding = 10

          var color = d3.scaleOrdinal()
            .range(["#525252", "#bdbdbd"]);

          var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(100);

          var labelArc = d3.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);

          var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d; });

          var svg = d3.select("#piechart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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
            .attr("x", width / 20)
            .attr("y", - 220)
            .attr("text-anchor", "middle")
            .style("font-family", "sans-sherif")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .text(function(d){
                return "Amount of deaths related to drugs or alcohol in " + dataPie[0].name;
            });
          
        // Fill in all colors of the legend
        g.append("rect")
          .attr("x", width -350)
          .attr("y", height - 800)
          .attr("width", width - 500)
          .attr("height", height - 560)
          .attr("transform", function(d, i) { 
            return "translate(0," + i * 35 + ")"})
          .style("fill", d => color(d.data))

        // Add text to legend
        g.append("text")
              .data(["Alcohol deaths", "Drug deaths"])
              .attr("x", width - 450)
              .attr("y", height - 780)
              .attr("transform", function(d, i) { 
                return "translate(0," + i * 40 + ")"})
              .style("color", "red")
              .text(function(d){
              return d;
              })          
        }