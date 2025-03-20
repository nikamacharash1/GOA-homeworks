# def filter_list(l):
#     return [item for item in l if isinstance(item, int)]

import random

def create_groups(people):
    groups = []
    available_people = people.copy()  
    while len(available_people) >= 3: 
        group = random.sample(available_people, 3)
        for member in group:
            available_people.remove(member) 
        groups.append(group)
    return groups
people = ['ჭიტაძე', 'მინდორაშვილი', 'ქორიძე', 'ჭიკაძე', 'ჩიგოგიძე', 'აზალაძე', 'მაჭრარაშვილი', 'ფოფხაძე', 'წითლაური', 'კოჩალიძე']
groups = create_groups(people)
for idx, group in enumerate(groups, 1):
    print(f"ჯგუფი {idx}: {group}")
