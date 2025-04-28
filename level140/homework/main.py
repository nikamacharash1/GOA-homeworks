def get_count(sentence):
    vowels = "aeiou"
    
    count = 0
    
    for char in sentence:
        if char in vowels:
            count += 1
    
    return count


2
def calc_type(a, b, res):
    if a + b == res:
        return "addition"
    elif a - b == res:
        return "subtraction"
    elif a * b == res:
        return "multiplication"
    elif a / b == res:
        return "division"


3
def is_vowel(s):
    vowels = "aeiouAEIOU"
    
    return s in vowels

4
def get_count(sentence):
    vowels = "aeiou"
    
    count = 0
    
    for char in sentence:
        if char in vowels:
            count += 1
    
    return count

5
def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
