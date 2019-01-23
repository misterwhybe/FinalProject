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
I tried to make a pie-chart, but it is not working yet.

# Day 4 (monday, 14-01-2019)
Today was a bad day.
I tried to fix my pie chart, but i did not improve.
However, I found a nice example, so I can try to use it tomorrow.
Maybe, then I can fix my pie chart. I'll keep you updated!

# Day 5(Tuesday, 15-01-2019)
Okay, the pie chart works as well!
It is still not beautiful, so it needs some polishing, but at least it responds.

# Day 6 (Wednesday, 16-01-2019)
I spend the day looking for a nice example of a slider. I want this for my piechart, so you can choose which year you want to see.
I found https://github.com/d3/d3-dispatch#dispatch_on, which I use tomorrow to fix it. It was not a very good day for me.

# Day 7 (Thursday, 17-01-2019)
My slider works!
At least, there is a slider and you can change the year, from 1990 to 2016.
It is not interactive with the pie chart yet. I started to work on it, but it is not finished.
Tomorrow and tonight I will work some more, to make sure everything is interactive and propper before the weekend.
This way, I have next week to make everything look nice, make my code better and add the bootstrap to make my website a bit nicer.

# Day 8 (Friday, 18-01-2019)
I cannot seem to get my slider to work how I want it to work.
It is not yet interactive, you can use the slider but the pie chart won't be updated. 
Instead, I have been working on the code itself. The functions that make the visuals have their own files.
If I can get the slider.js to work in my linked_view.js, I think the slider will also update the pie chart, which is what I want.

# Day 9 (Monday, 21-01-2019)
The Piechart is finally interacting with the slider!
The rest of the day I spend on bootstrap and trying to make my website look nicer.
I will fine tune it more in the next days!

# Day 10 (Tuesday, 22-01-2019)
I spend the day changing my layout, adding a homepage and a navbar, changing my code a little bit.
I added some style, different html's and some more styling.

# Day 11 (Wednesday, 21-01-2019)
The legend of the piechart works! It exists and is accurate. It is not very beautiful, but it works.
I also changed the colours of the pie chart. I added a little smiley at the top of the page.
I also tried to add a slider for the world map, but I stopped.
Furthermore, I read some about updating the svg instead of deleting it. It looks pretty difficult, so I will try but don't know if I will succeed and finish. On the main page, you can move a little bit to the left and right.
I tried to get rid of this, but it did not work. 
I also added the link to my github, so you can press Whybe in the left upper corner and find my github.