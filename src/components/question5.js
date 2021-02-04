export const ques = `Due to your immense help, your friend startup successfully got seed funding and it is on the operational mode. Now your friend wants to expand his startup and he is looking for new investors for his startup. Now you again come as a saviour to help your friend and want to create a list of probable new new investors. Before moving forward you remember your investor friend advice that finding the investors by analysing the investment type. Since your friend startup is not in early phase it is in growth stage so the best-suited investment type is Private Equity. Find the top 5 investors who have invested in a different number of startups and their investment type is Private Equity. Correct spelling of investment types are - "Private Equity", "Seed Funding", "Debt Funding", and "Crowd Funding". Keep an eye for any spelling mistake. You can find this by printing unique values from this column.There are many errors in startup names. Ignore correcting all, just handle the important ones - Ola, Flipkart, Oyo and Paytm.
`;

export const code = `import csv 
import matplotlib.pyplot as plt
with open('./startup_funding.csv', encoding="utf8") as file_obj:
    file_data = csv.DictReader(file_obj)
    file_data = list(file_data)
    
dict = {}
for row in file_data:
    startupName = row['StartupName'].strip()
    investors = row['InvestorsName']
#     cleaning the data
    if startupName == 'Ola' or startupName == 'Ola Cabs' or startupName == 'Olacabs':
        startupName = 'Ola'
    if startupName == 'Flipkart.com':
        startupName = 'Flipkart'
    if startupName == 'Oyo Rooms' or startupName == 'OyoRooms' or startupName == 'Oyorooms' or startupName == 'OYO Rooms':
        startupName = 'Oyo'
    if startupName == 'Paytm Marketplace':
        startupName = 'Paytm'
    
    investmentType = row['InvestmentType']
    if investmentType == 'PrivateEquity':
        investmentType = 'Private Equity'
    
    if investmentType != '' and investmentType == 'Private Equity':
        investorsArray = investors.split(',')
        for investors in investorsArray:
            investor = investors.strip()
            if investor == '':
                continue
            Set = dict.get(investor,set({}))
            Set.add(startupName)
            dict[investor] = Set

    
for row in dict:
    dict[row] = len(dict[row])

# calculating the no. of investments
investorDictSortedKeys = sorted(dict, key=dict.get, reverse=True)[:5]
investorDictSortedValues = []
for investor in investorDictSortedKeys:
    investorDictSortedValues.append(dict[investor])
    
# ploting graph
plt.bar(investorDictSortedKeys, investorDictSortedValues, width=0.5)
plt.xticks(rotation=45)
plt.grid()
plt.xlabel("Investor Names")
plt.ylabel("No. of Investments")
plt.show()`;

export const thesis = `This is exact same question as before as now we will just add the check for Private Equity 
instead of Seed Funding and Crowd Funding. Everything else is same.`;
