import pandas as pd 

excel_file = "mortality-from-alcohol-and-drug-use-disorders.csv"
drugs_deaths = pd.read_csv(excel_file)
drugs_deaths = drugs_deaths.drop(["Code"], axis = 1)
drugs_deaths.columns = ["Entity", "Year", "AlcoholDeaths", "DrugsDeaths"]
print(drugs_deaths)
drugs_deaths.to_json("../program/deaths.json")