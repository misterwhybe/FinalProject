import pandas as pd

excel_file = "WHR2018Chapter2OnlineData.xls"
happiness = pd.read_excel(excel_file)


happiness = happiness.drop(["Log GDP per capita", "Social support", \
    "Healthy life expectancy at birth", "Freedom to make life choices"\
    ,"Generosity", "Perceptions of corruption", "Positive affect", \
    "Negative affect", "Confidence in national government", \
    "Democratic Quality", "Delivery Quality", \
    "Standard deviation of ladder by country-year", \
    "Standard deviation/Mean of ladder by country-year", \
    "GINI index (World Bank estimate)", \
    "gini of household income reported in Gallup, by wp5-year", \
    "GINI index (World Bank estimate), average 2000-15"], axis = 1)
happiness.columns = ["country", "year", "LifeLadder"]
happiness.to_json("../program/happiness.json")