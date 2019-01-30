/* 
    Wiebe Jelsma, 12468223
    Minor Programmeren, Programmeerproject
    January 2019
*/
function make_piechart(dataPie){
  // get values for the pie chart
  alcohol = Math.round(dataPie[0].value)
  drugs = Math.round(dataPie[1].value)
  // put values together in a list
  var data = [alcohol, drugs]

  // determine width, height, radius
  var width = 450,
    height = 400,
    radius = height / 4;
    padding = 10

  // determine the colour  
  var color = d3.scaleOrdinal()
    .range(["#525252", "#bdbdbd"]);

  // determine how big the piechart will be, and if there will be a 
  // inner "gap" to make a donut chart
  var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(10);

  var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d; });

  // make SVG for pie chart, determine how big
  var svg = d3.select("#piechart")
    .append("svg")
    .attr("width", width - 100)
    .attr("height", height )
    .append("g")
    .attr("transform", "translate(" + width / 4 + "," + height / 1.5 + ")");

  // enter data into pie chart
  var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  // make sure the colour matches the colour we gave
  g.append("path")
    .attr("d", arc)
    .style("fill", function(d) { return color(d.data); });
  // show the values inside the pie chart
  g.append("text")
    .attr("transform", function(d) { return "translate(" + 
    labelArc.centroid(d) + ")"; })
    .attr("dy", "-1.5em")
    .text(function(d) { return d.data; })
    .style("color", "white")
  // title of the pie chart
  g.append("text")
    .attr("x", width / 7)
    .attr("y", height - 550)
    .attr("text-anchor", "middle")
    .style("font-family", "sans-sherif")
    .style("font-size", "12px")
    .text(function(d){
      return "Amount of deaths related to drugs or alcohol in " + 
      dataPie[0].name;
    });
  
  // Fill in all colors of the legend
  g.append("rect")
    .attr("x", width / 2.2)
    .attr("y", height - 500)
    .attr("width", width / 14)
    .attr("height", height / 16)
    .attr("transform", function(d, i) { 
      return "translate(0," + i * 35 + ")"})
    .style("fill", d => color(d.data))

  // Add text to legend
  g.append("text")
    .data(["Alcohol deaths", "Drugs deaths"])
    .attr("x", width / 4.3)
    .attr("y", height - 480)
    .attr("transform", function(d, i) { 
      return "translate(0," + i * 28 + ")"})
    .style("color", "red")
    .text(function(d){
      return d;
    })          
}