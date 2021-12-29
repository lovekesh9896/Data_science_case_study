export const ques = `Even after trying for so many times, your friend’s 
startup could not find the investment. So you decided to take this matter 
in your hand and try to find the list of investors who probably can invest 
in your friend’s startup. Your list will increase the chance of your friend 
startup getting some initial investment by contacting these investors. Find the 
top 5 investors who have invested maximum number of times (consider repeat investments 
in one company also). In a startup, multiple investors might have invested. So consider each 
investor for that startup. Ignore undisclosed investors.`;

export const code = `import csv 
import matplotlib.pyplot as plt
with open('./startup_funding.csv', encoding="utf8") as file_obj:
    file_data = csv.DictReader(file_obj)
    file_data = list(file_data)
    
dict = {}
# As each startup can have multiple investors seperated by comma (",") we are doing a split operation
for row in file_data:
    investors = row['InvestorsName']
    investorsArray = investors.split(',')
    for investors in investorsArray:
        investor = investors.strip()
        if investor == '':
            continue
        dict[investor] = dict.get(investor,0) + 1

# calculating the no. of investments
# # # we will just calculate the top 5 investors
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
plt.show()

# sequiia capital is in eCommerce and consumer internet == 7
# Accel partners is in consumer internet = 14
# kalaari capital is in technology = 11 ans consumer internet 7
# SAIF partenrs is in consumer internet = 13
# indian angel network is in consumer internet = 14 and technology  = 9`;

export const thesis = `This is also a simple task. As each startup can have multiple investors
we will use split to include each one of them. Then we are using strip to remove any white spaces.
Then we will just pick the first 5 investors. 
One more amazing insight that we can get from this data is where is each of the above investor 
invest maximum. Like sequiia capital invested 7 times in Ecommerce and consumer internet. indian angel network
invested 14 times in consumer internet. We can find the type of my friends startup and then approach the 
investor according to that.

    Some of the top investors now are sequiia capital, Accel partners, Blume Ventures, Elevation Capital, Tiger Global Management etc.
`;
