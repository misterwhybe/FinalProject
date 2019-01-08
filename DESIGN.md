Helloo,

I have two datasets at this point:
The first one is about the life satisfaction. 
I found a dataset which checks if people are happy with their life.
imagine a ladder in front of you, with 10 steps. The respondents need to say on which step they currently are.
The higher you go, the closer they come to their best possible life.
This dataset is the WHR2018Chapter2OnlineData.xls, and needs to be cleaned.
First, I drop a lot of other columns. This is done in happiness.py. 
After this, I only have the countries, the years and the life ladder.
The data is found on http://worldhappiness.report/ed/2018/, chapter 2.

The other one is about drugs related deaths.
Here, we have 2 different kinds of data, the alcohol-related deaths and drugs-related deaths.
I choose this dataset because it contains a lot of different countries, with several years of data.
It is found on https://ourworldindata.org/substance-use.
The data is cleaned in cannabis.py.
I also want a dataset which shows how much drugs is being used in a country, but this dataset is harder to obtain.

![Knipsel]
Here, we can see the basic of what I will do.
We will start with the worldmap, different colours per life ladder average.
If a country is clicked, there will be a chart bar showing how much drugs people use in a country, and a piechart showing how many people die because of drugs and die because of alcohol.
There will be a slider, so you can differentiate the years. 

There is a requirements.txt, here I state which things you need to download in order for this visualization to work.
So far, we need Pandas and xlrd.