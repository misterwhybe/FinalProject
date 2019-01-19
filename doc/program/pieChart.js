function make_piechart(dataPie){
          alcohol = Math.round(dataPie[0].value)
          drugs = Math.round(dataPie[1].value)
          var data = [alcohol, drugs]

          var width = 560,
            height = 500,
            radius = height / 2;

          var color = d3.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888"]);

          var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

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
            .attr("dy", "0em")
            .text(function(d) { return d.data; });
          svg.append("text")
            // .data(data)
            .attr("x", width / 20)
            .attr("y", 250)
            .attr("text-anchor", "middle")
            .style("font-family", "sans-sherif")
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .text(function(d){
                return "Amount of alcohol/drugs deaths";
            });
        }