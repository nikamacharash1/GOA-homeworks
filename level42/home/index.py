<<<<<<< HEAD
# join
list1 = ["nika", "macharashvili", "15"]
list1 = "/".join (list1)
print(list1)
# replace
num = "my name is giorgi"
num = num.replace("giorgi", "nika")
print(num)


# 3) შეასრულეთ codewars:
# 1)
# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python

def to_jaden_case(string):
    return " ".join(word.capitalize()for word in string.split())
# 2)
# https://www.codewars.com/kata/57f609022f4d534f05000024/train/python
def stray(arr):
    result = 0
    for number in arr:
        result ^= number
    return result
# 3)
# https://www.codewars.com/kata/59f08f89a5e129c543000069/train/python
def dup(arry):
    def remove_consecutive_duplicates(s):
        if not s:
            return s
        result = [s[0]]
        for char in s[1:]:
            if char != result[-1]:
                result.append(char)
        return "".join(result)
=======
# join
list1 = ["nika", "macharashvili", "15"]
list1 = "/".join (list1)
print(list1)
# replace
num = "my name is giorgi"
num = num.replace("giorgi", "nika")
print(num)


# 3) შეასრულეთ codewars:
# 1)
# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python

def to_jaden_case(string):
    return " ".join(word.capitalize()for word in string.split())
# 2)
# https://www.codewars.com/kata/57f609022f4d534f05000024/train/python
def stray(arr):
    result = 0
    for number in arr:
        result ^= number
    return result
# 3)
# https://www.codewars.com/kata/59f08f89a5e129c543000069/train/python
def dup(arry):
    def remove_consecutive_duplicates(s):
        if not s:
            return s
        result = [s[0]]
        for char in s[1:]:
            if char != result[-1]:
                result.append(char)
        return "".join(result)
>>>>>>> bac92c47168eeed9b1c41322530f9bf4e090690f
    return [remove_consecutive_duplicates(s) for s in arry]