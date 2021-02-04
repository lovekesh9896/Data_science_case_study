export const ques = `Even after putting so much effort in finding the probable investors, it didn't turn out to be helpful for your friend. So you went to your investor friend to understand the situation better and your investor friend explained to you about the different Investment Types and their features. This new information will be helpful in finding the right investor. Since your friend startup is at an early stage startup, the best-suited investment type would be - Seed Funding and Crowdfunding. Find the top 5 investors who have invested in a different number of startups and their investment type is Crowdfunding or Seed Funding. Correct spelling of investment types are - "Private Equity", "Seed Funding", "Debt Funding", and "Crowd Funding". Keep an eye for any spelling mistake. You can find this by printing unique values from this column. There are many errors in startup names. Ignore correcting all, just handle the important ones - Ola, Flipkart, Oyo and Paytm.`;

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
# # # as we have to calculate only the Seed Funding and Crowd Funding. There are some error in names so we are correcting them.
    investmentType = row['InvestmentType']
    if investmentType == 'SeedFunding':
        investmentType = 'Seed Funding'
    if investmentType == 'Crowd funding':
        investmentType = 'Crowd Funding'
#     as we have to calculate the unique investment by each 
    if investmentType != '' and (investmentType == 'Seed Funding' or investmentType == 'Crowd Funding'):
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

# calculating the no. of investors
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

export const thesis = `This question is same as the last question except we will add an extra check for investment 
type in the first for loop. There is 1 more thing the, on the 2nd and 3rd place in the list there were Undisclosed 
investors so we set them to 0 so that they will not come to the top 5.`;
