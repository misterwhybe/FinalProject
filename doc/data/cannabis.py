import pandas as pd 

excel_file = "mortality-from-alcohol-and-drug-use-disorders.csv"
drugs_deaths = pd.read_csv(excel_file)
print(drugs_deaths)