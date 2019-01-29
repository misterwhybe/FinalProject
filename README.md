# Open my website!
if you go to https://misterwhybe.github.io/FinalProject you can see my working website!

# FinalProject
This is the repository of the final project. I will be working on this in January.

# How happy are we really?
By: Wiebe Jelsma.
Create the map of the World with average levels of the life ladder for each country. Specify which country you want to see. Each colour is a different level (0-10) to see how the countries are divided.
I will use the World Happiness Report. I will download the report of 2018, because it contains the years 2005-2017 per country. 
http://worldhappiness.report/download/.
Hereby, I can specify which country has which happiness score in which year. The item I will use is the Life ladder. It asks respondents to think of a ladder, with the best possible life for them being a 10, and the worst possible life being a 0. They are then asked to rate their own current lives on that 0 to 10 scale. This will give a mean per year per country.
After a country is clicked on, a bar chart will come with each score per year. This way it is possible to see the development of the score per country. A pie chart will come to show the amount of deaths related to drugs and alcohol in that country.
A slider can be used to specify which year, ranging from 1990 to 2016, you want to see. By using the slider, the change of deaths will be visual.

## Problem statement:
The whole world is changing all the time. We must not forget that countries change a lot, and undeveloped countries might be completely different 10 years later. Also, living in an undeveloped country does not automatically mean you think your situation is bad. In undeveloped or poor countries, the average of the life ladder can still be high!

My map will show the transition in the level of happiness over the years for all countries.
My map should have different colours for the different levels of life ladder, and it's a map of the world.
The first data will be from 2005 for the map and the bar chart, and 1990 for the pie chart. 
If you specify a country, you can see the different levels over the years in the bar chart.
Drugs and alcohol related deaths will also be used, so you can see if a lot of people in that country die because of drugs or alcohol.

## MVP:
Having the map, have different colours for the levels of happiness.
Being able to see the specific years in a country so you can compare it's transition.
Selecting countries to have a history of the happiness, and see the deaths per year.

### Extra:
Moving cursor over countries and bars to get the level of happiness.

### Visual Scetch:
![doc/scetch](https://user-images.githubusercontent.com/44019712/48985304-5d2b0b80-f106-11e8-896c-b6a96508c6b8.jpg)
I wont be using gender but years.

### Prerequisites:
I will get the data from http://worldhappiness.report/download/. Here, we can get the years 2005-2017 per country. 
I will use a map or the world from http://datamaps.github.io/.
The other dataset i will be using is the amount of cannabis is used per country https://dataunodc.un.org/drugs/prevalence_table.
Hereby, we can see if there is a correlation between the happiness level and the usage of cannabis. 

### External Compounts: 
I use https://unpkg.com/d3-simple-slider/build/d3-simple-slider.js for the slider! This way it was easier to create a slider, but not too easy. 
I make use of pandas and xlrd.
Bootstrap is used to style the webpage.

### Review:
https://ourworldindata.org/happiness-and-life-satisfaction
This is what i want to do!

### Hardest parts:
I think specifying the country and then getting a history of the levels is pretty difficult. Also, not all countries participated every time so there is a lack of data sometimes.
When looking back:
To form a bar chart with missing data was pretty difficult. 
I tried to make the slider work for the worldmap as well, but this turned out to be too difficult.
Styling a website takes way more time than I would have thought. 
The pie chart was also quite hard to make, but luckily the data was complete so when I could see the pie chart, it worked directly (only getting the SVG right took extra time).
 