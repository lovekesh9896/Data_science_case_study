export const ques = `After re-analysing the dataset you found out that some investors have invested in the same startup at different number of funding rounds. So before finalising the previous list, you want to improvise it by finding the top 5 investors who have invested in different number of startups. This list will be more helpful than your previous list in finding the investment for your friend startup. Find the top 5 investors who have invested maximum number of times in different companies. That means, if one investor has invested multiple times in one startup, count one for that company. There are many errors in startup names. Ignore correcting all, just handle the important ones - Ola, Flipkart, Oyo and Paytm.`;

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
# # # According to the question we have to handle the major startups manually 
    if startupName == 'Ola' or startupName == 'Ola Cabs' or startupName == 'Olacabs':
        startupName = 'Ola'
    if startupName == 'Flipkart.com':
        startupName = 'Flipkart'
    if startupName == 'Oyo Rooms' or startupName == 'OyoRooms' or startupName == 'Oyorooms' or startupName == 'OYO Rooms':
        startupName = 'Oyo'
    if startupName == 'Paytm Marketplace':
        startupName = 'Paytm'
# # # As we have to calculate the unique investments only by each investor we will use Set for this. We will push investments
# # # by each investor in an Set. 
    investorsArray = investors.split(',')
    for investors in investorsArray:
        investor = investors.strip()
        if investor == '':
            continue
        Set = dict.get(investor,set({}))
        Set.add(startupName)
        dict[investor] = Set
# # # now each key in dict contains the investor and unique investments done by that firm we will take lenght of that set.
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

export const thesis = `This question is a bit tricky as we have to consider the unique investment only. So I used a set. 
In the first for loop first we will correct some famous startup names. Then as we know the relation between a startup
and investor can be many to many means 1 startup can have many investors and one investor can invets in many startups.
we will only consider the unique startups. so we will use a set to store all the startups 1 investor invested. Then as we 
only have to find the count. We will replace the values in our dict with the set length. As set will be unique we will get
the lenght of unique startups 1 inverstor invested. The we will just get the top 5 investor out of them.`;
