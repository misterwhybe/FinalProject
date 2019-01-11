Wiebe Jelsma, 12468223
Process Book of Programmeerproject
January 2019

# Day 1 (Wednesday, 09-01-2019)
Today I spend some time on my datasets. Now, I have two.
It was a bit difficult, because I had to reform them a bit.
Also, some of the names of the columns contained two words.
Because of this, I couldn't get the information I needed out of these datasets.
I spent quite some time figuring out how to make these columns useful.
In the end, I changed the column names when I converted them from CSV and Excel into JSON.
This way, I the column name was one word and I could use it.
The rest of the day, I spent on getting the worldmap on my website, getting the names at the right countries and putting the Life Ladder values next to the countries. Now, the values are those of 2008 (I think), so I have to update it so you can change the years. 
Maybe I can do something like:
if year != 2008:
    i += year - 2008
This way, it is calculated how much difference there is between the current chosen year and 2008, and this amount is added to i so it takes the next year.

# Day 2 (Thursday, 10-01-2019)
Today I finished my world map.
The map is now interactive, if you hover over the country you can see the Life Ladder value of 2008, if you click it a bar chart will pop up to show how the Life Ladder developed over the last 10 years.
The bar chart works as well.
The countries in the world map also have a colour which devides them into the Life Ladder level, so it is easier to see which countries are on the same Life Ladder.

# Day 3 (Friday, 11-01-2019)
The bar chart was not working perfectly, so today I made it work nicely.
Some data is missing, so if the year is missing I had to make sure we would show a blank bar, but before it would fill the blank space with other country's data, so now it is fixed.
It was more difficult than expected, but now it works!
I tried to make a pie-chart, but it is not working yet
