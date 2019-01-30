# Welcome to the average Life Ladder Visualization
Welcome to my website! Try it out! 

# Open my website!
if you go to https://misterwhybe.github.io/FinalProject you can see my working website!

# FinalProject
This is the repository of the final project. I will be working on this in January.

# How happy are we really?
Create the map of the World with average levels of the life ladder for each country. Specify which country you want to see. Each colour is a different level (0-10) to see how the countries are divided.
![worldmap|250x250](https://user-images.githubusercontent.com/44019712/51989707-e1ec2a00-24a7-11e9-8fa9-03df630ad352.PNG)
I will use the World Happiness Report. I will download the report of 2018, because it contains the years 2005-2017 per country. 
http://worldhappiness.report/download/.
Hereby, I can specify which country has which happiness score in which year. The item I will use is the Life ladder. It asks respondents to think of a ladder, with the best possible life for them being a 10, and the worst possible life being a 0. They are then asked to rate their own current lives on that 0 to 10 scale. This will give a mean per year per country.
After a country is clicked on, a bar chart will come with each score per year. This way it is possible to see the development of the score per country. 
![barchart|250x250](https://user-images.githubusercontent.com/44019712/51989654-c5e88880-24a7-11e9-8cfa-096744f7aae8.PNG)
A pie chart will come to show the amount of deaths related to drugs and alcohol in that country.
A slider can be used to specify which year, ranging from 1990 to 2016, you want to see. 
![piechart|250x250](https://user-images.githubusercontent.com/44019712/51989687-d698fe80-24a7-11e9-9773-ee6231f5dc66.PNG)
By using the slider, the change of deaths will be visual.


## Problem statement:
The whole world is changing all the time. We must not forget that countries change a lot, and undeveloped countries might be completely different 10 years later. Also, living in an undeveloped country does not automatically mean you think your situation is bad. In undeveloped or poor countries, the average of the life ladder can still be high!

My map will show the transition in the level of happiness over the years for all countries.
My map should have different colours for the different levels of life ladder, and it's a map of the world.
The first data will be from 2005 for the map and the bar chart, and 1990 for the pie chart. 
If you specify a country, you can see the different levels over the years in the bar chart.
Drugs and alcohol related deaths will also be used, so you can see if a lot of people in that country die because of drugs or alcohol.


### Extra:
Moving cursor over countries and bars to get the level of happiness.

### Data:
I will get the data from http://worldhappiness.report/download/. Here, we can get the years 2005-2017 per country. 
I will use a map or the world from http://datamaps.github.io/.
The other dataset i will be using is the amount of people who die related to drugs or alcohol, per country https://ourworldindata.org/substance-use.
Hereby, we can see if there is a correlation between the happiness level and the amount of people who die because of drugs or alcohol. 

### External Compounts: 
I use https://unpkg.com/d3-simple-slider/build/d3-simple-slider.js for the slider! This way it was easier to create a slider, but not too easy. 
I make use of pandas and xlrd.
Bootstrap is used to style the webpage.
Tooltip is used to hover over some parts of the webpage.
I used the smiley image and happiness image, I googled on happiness and chose the two pictures!
I got a map via: http://d3js.org/topojson.v1.min.js
I used D3 via: https://d3js.org/d3.v5.min.js and http://d3js.org/queue.v1.min.js.
I accept their Licence and respect it. 

## Wiebe Jelsma (12468223)