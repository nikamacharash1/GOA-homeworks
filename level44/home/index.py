<<<<<<< HEAD
# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python
def pig_it(text):
    result = []
    current_word = ""
    for char in text:
        if char.isalpha():
            current_word += char
        else:
            if current_word:
                result.append(current_word[1:]+current_word[0]+"ay")
                current_word = ""
            result.append(char)
    if current_word:
        result.append(current_word[1:]+current_word[0]+"ay")
    return "".join(result)
        


# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
def duplicate_count(text):
    text = text.lower()
    list1 = []
    list2 = []
    for letter in text:
        if letter not in list1:
            list1.append(letter)
        else:
            list2.append(letter)
=======
# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python
def pig_it(text):
    result = []
    current_word = ""
    for char in text:
        if char.isalpha():
            current_word += char
        else:
            if current_word:
                result.append(current_word[1:]+current_word[0]+"ay")
                current_word = ""
            result.append(char)
    if current_word:
        result.append(current_word[1:]+current_word[0]+"ay")
    return "".join(result)
        


# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
def duplicate_count(text):
    text = text.lower()
    list1 = []
    list2 = []
    for letter in text:
        if letter not in list1:
            list1.append(letter)
        else:
            list2.append(letter)
>>>>>>> bac92c47168eeed9b1c41322530f9bf4e090690f
    return len(tuple(set(list2)))