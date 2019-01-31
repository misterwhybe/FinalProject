# Final Report

## Table of Contents
- Introduction
- Technical design
    - overview
- Challenges
- Decisions

## Introduction
First, I will start by explaining my program.
The first thing you see when opening my website is a welcoming screen.
Above that, a nav bar is shown with different links.
My website contains a worldmap, in which the average Life Ladder score per country is given.
After a country is clicked, a bar chart, pie chart and slider will come.
The bar chart contains the average life ladder score for that country over the years 2005-2017.
The pie chart was one year, with the amount of deaths as a direct result from alcohol and drugs.
With the slider, you can select this year (ranging from 1990-2016).
![screenshotreport](https://user-images.githubusercontent.com/44019712/52057501-75cffb80-2565-11e9-89e3-28a90191e8d0.png)


## Technical design
Overview:
- navigation bar at the top, which always sticks at the top of the page. Here, you can go to "Home", where my visualizations are, "information", where more is explained and the datasets can be found, and "Whybe", a link to my Github.
- interactive worldmap with on click
- bar chart which can be hoovered to see the value
- pie chart
- slider which changes the pie chart

Code structure:
My code is divided in several folders, and the root repository with the demanded files.
In the folder data, my datasets are read in, converted, cleaned, transformed and send to program.
We have a xls and csv file, which contains the data.
In happiness.py the xls data is transformed, in mortality.py the csv file.

doc contains the pictures we needed.
In the folder program, we have some files and some other folders.
We have the processed data, called "deaths.json", "happiness.json" and the file "world_countries.json" to make the worldmap.
We have both the html files. "linked_views.html" is for the "home" website, so with all the visualizations, while "information.html" is for the information page, so with extra information and links to the sources of the dataset.
In the folder css we have two files. "style.css" contains the style code for "linked_views.html" and "information.css" contains the styling code for "information.html". Both html webpages have a different layout, so different css were needed.

In the folder js we have all the javascript files. 
We use "barChart.js" to make everything for the bar chart. "d3-tip.js" is used to hover over a certain country/bar.
"linked-view.js" is my main file. Here, the data is put in lists, the worldmap is made and everything is connected to this. With the on click in the worldmap, a lot of things change so most of the files are connected in here. Without the "linked_view.js", no visualization would work. "main.js" is there to make sure everything is loaded before it has to be displayed, so some functions can interact with each other. If I wouldn't use this, some functions in my program would be called before they would be made, so the program would crash. "pieChart.js" is there to make the pie chart. It is also called with the on click, so it is linked to "linked_view.js". 

## Challenges
It was more work then I would have thought. The layout of the page was pretty difficult for me. I thought you would be able to make your website look nice within a couple of hours, but you have to take everything into account! I wanted to make the bar chart and the pie chart on the right of the worldmap. If you would then make the screen smaller, they would go under the worldmap. It took me some time before the bar chart and the pie chart were above one another (I used bootstrap). Then, when the screen would become smaller, there would be a huge gap between the bar chart and the pie chart, when they moved below the world map. Then, my hoover function did not work anymore on my bar chart. I decided the place the bar chart under the worldmap, and now everything works normal.
Another very difficult thing for me was the slider with the worldmap. I wanted to link the slider to the worldmap as well, but I did not succeed. Making the pie chart was also pretty difficult for me. It was completely new, and I'm still not very happy with the result.  

## Decisions
Am I happy with the decisions I made? In some aspects, yes. I mean, I do have a working page, with links to other pages, and three visualizations. The welcome photo is also quite nice I think. What I would have really liked is to link the world map to the slider, so you could use the slider to see the transition of countries. Luckily the bar chart also shows this, but it would be a cool feature. If I would have more time, I would have definately made the pie chart look better. I think that, given more time, I would have made two sliders. One for the worldmap, and one for the pie chart. Then, if you would click a country, a page would pop up with the pie chart and the slider, to make it a bit more interactive. Another thing I changed was the countries. In the beginning, I only wanted to do European countries, but using all countries is better. Also, I wanted to use drug use and not drug deaths, but this data was not complete. I could only find the drug use for one year per country, not several years. So it is better that I used the drug deaths, so we can use the slider to see how it changed! 
In the beginning I thought I would just make one file containing everything, because this is what I have always done, but then I thought it would look way better to devide the code over several files. It was quite difficult to move several functions out of the linked_view.js file and five them an own file, but it worked out. Given more time, I would have scraped more code from the linked_view.js file and put it in a seperate file. 