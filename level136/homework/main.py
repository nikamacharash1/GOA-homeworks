def whatday(num):
    if num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"


2
def string_clean(s):
    return ''.join([char for char in s if not char.isdigit()])


3
def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"
    return name[:4] if name[2] in "aeiou" else name[:3]

4
def convert(st):
    st = st.replace('a', 'o').replace('o', 'u') 
    return st


5
def palindrome(num):
    if not isinstance(num, int) or num < 0:
        return "Not valid"
    s = str(num)
    count = 0
    length = len(s)
    for i in range(length):
        for j in range(i + 2, length + 1):
            substr = s[i:j]
            if substr == substr[::-1]:
                count += 1             
    return count