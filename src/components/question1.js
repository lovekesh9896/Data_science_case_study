export const code1 = `import csv 
import matplotlib.pyplot as plt
with open('./startup_funding.csv', encoding="utf8") as file_obj:
    file_data = csv.DictReader(file_obj)
    file_data = list(file_data)
    
dict = {}
for row in file_data:
    city = row['CityLocation']
    if city == 'Delhi':
        city = 'New delhi'
    city = city.split('/')[0].strip().capitalize()
    if city != '':
        dict[city] = dict.get(city,0) + 1

# cleaning the data

# # # there is some error in the name of "New Delhi" so to make things consistent I am taking all "Delhi" as "New Delhi".
# # # it is also given in the question
dict['New Delhi'] = dict['New delhi']
dict['New delhi'] = 0

# # # as question said that we have to take all the Indian investments, if we observer the dataset we will found all the indian 
# # # cities name are first if there are multiple city names except for "Bangalore" which comes 2 times in the dataset as after
# # # another city. There are few more cities that comes after another city but we have to take only for NCR, Bangalore, and Mumbai.
dict['Bangalore'] = dict['Bangalore'] + 2

dict['NCR'] = dict['Gurgaon'] + dict['Noida'] + dict['New Delhi']

# calculating the fundings
# # # we can take all three city investment seperately (NCR, Bangalore, Mumbai) but as they are the top investment we can just 
# # # sort them which is less code.
cityDictSortedKeys = sorted(dict, key=dict.get, reverse=True)[:3]
cityDictSortedValues = []
for i in cityDictSortedKeys:
    cityDictSortedValues.append(dict[i])

# ploting the graph
plt.bar( cityDictSortedKeys, cityDictSortedValues, width=0.5)
plt.grid()
plt.xlabel("Cities")
plt.ylabel("No. of Startup fundings")
plt.show()`;

export const ques1 = `Your Friend has developed the Product and he wants to establish the
product startup and he is searching for a perfect location where getting
the investment has a high chance. But due to its financial restriction,
he can choose only between three locations - Bangalore, Mumbai, and NCR.
As a friend, you want to help your friend deciding the location. NCR
include Gurgaon, Noida and New Delhi. Find the location where the most
number of funding is done. That means, find the location where startups
has received funding maximum number of times. Plot the bar graph between
location and number of funding. Take city name "Delhi" as "New Delhi".
Check the case-sensitiveness of cities also. That means, at some place
instead of "Bangalore", "bangalore" is given. Take city name as
"Bangalore". For few startups multiple locations are given, one Indian
and one Foreign. Consider the startup if any one of the city lies in
given locations.`;

export const thesis1 = `The explanantion of this task is simple. We have to count total no. of 
    startups in 3 cities given to us. We can do this by counting the number of startups in each 
    city. The main part is data cleaning. There are some errors in data that are already given 
    in the qustion. The main part is the error in "Banglore" and "New Delhi".After correcting 
    them we can easily plot the graph between 3 top major cities which recieve the maximum number
    of funding rounds.`;
