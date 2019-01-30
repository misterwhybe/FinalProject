#Life Ladder Visualization

# Open my website!
Go to https://misterwhybe.github.io/FinalProject to be directed to my website!

# FinalProject
This is the repository of the final project. I will be working on this in January.

# How happy are we really?
Create the map of the World with average levels of the life ladder for each country. Specify which country you want to see. Each colour is a different level (0-10) to see how the countries are divided.
![worldmap](https://user-images.githubusercontent.com/44019712/51989707-e1ec2a00-24a7-11e9-8fa9-03df630ad352.PNG)
I will use the World Happiness Report. I will download the report of 2018, because it contains the years 2005-2017 per country. 
http://worldhappiness.report/download/.
Hereby, I can specify which country has which happiness score in which year. The item I will use is the Life ladder. It asks respondents to think of a ladder, with the best possible life for them being a 10, and the worst possible life being a 0. They are then asked to rate their own current lives on that 0 to 10 scale. This will give a mean per year per country.
After a country is clicked on, a bar chart will come with each score per year. This way it is possible to see the development of the score per country. 
![barchart](https://user-images.githubusercontent.com/44019712/51989654-c5e88880-24a7-11e9-8cfa-096744f7aae8.PNG)
A pie chart will come to show the amount of deaths related to drugs and alcohol in that country.
A slider can be used to specify which year, ranging from 1990 to 2016, you want to see. 
![piechart](https://user-images.githubusercontent.com/44019712/51989687-d698fe80-24a7-11e9-9773-ee6231f5dc66.PNG)
By using the slider, the change of deaths will be visual.

## Problem statement:
The whole world is changing all the time. We must not forget that countries change a lot, and undeveloped countries might be completely different 10 years later. Also, living in an undeveloped country does not automatically mean you think your situation is bad. In undeveloped or poor countries, the average of the life ladder can still be high!

My map will show the transition in the level of happiness over the years for all countries.
My map should have different colours for the different levels of life ladder, and it's a map of the world.
The first data will be from 2005 for the map and the bar chart, and 1990 for the pie chart. 
If you specify a country, you can see the different levels over the years in the bar chart.
Drugs and alcohol related deaths will also be used, so you can see if a lot of people in that country die because of drugs or alcohol.

### Data:
I will get the data from http://worldhappiness.report/download/. Here, we can get the years 2005-2017 per country. 
I will use a map or the world from http://datamaps.github.io/.
The other dataset i will be using is the amount of people who die related to drugs or alcohol, per country https://ourworldindata.org/substance-use.
Hereby, we can see if there is a correlation between the happiness level and the amount of people who die because of drugs or alcohol. 

### External Compounts: 
I make use of pandas and xlrd.
I used the happiness image, I googled on happiness and chose the picture. 
- Slider
https://unpkg.com/d3-simple-slider/build/d3-simple-slider.js
- Bootstrap, Copyright: Bootstrap Authors
https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css
- Tooltip, Copyright: Justin Palmer (2013)
- Worldmap
http://d3js.org/topojson.v1.min.js
- D3
https://d3js.org/d3.v5.min.js and http://d3js.org/queue.v1.min.js
- Smiley in the website
https://use.fontawesome.com/releases/v5.6.3/css/all.css

## License
My work in unlicensed, so feel free to use whatever you want/need!

## Author:
Wiebe Jelsma (12468223)