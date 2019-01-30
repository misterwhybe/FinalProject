# Wiebe Jelsma (12468223)
# Minor programmeren, Final project
# January, 2019
import pandas as pd 
# select dataset,check which columns we need send new dataset to program folder
excel_file = "mortality-from-alcohol-and-drug-use-disorders.csv"
drugs_deaths = pd.read_csv(excel_file)
drugs_deaths = drugs_deaths.drop(["Code"], axis = 1)
drugs_deaths.columns = ["Entity", "Year", "AlcoholDeaths", "DrugsDeaths"]
drugs_deaths.to_json("../program/deaths.json")