# https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
def filter_list(l):
    result = []
    for item in l:
        if isinstance(item,int):
            result.append(item)
    return result
# https://www.codewars.com/kata/558fc85d8fd1938afb000014
def sum_two_smallest_numbers(numbers):
    min1 = min(numbers)
    numbers.remove(min(numbers))
    min2 = min(numbers)
    return min1 + min2
# https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
def solution(text, ending):
    return text.endswith(ending)

# https://www.codewars.com/kata/57f609022f4d534f05000024
def stray(arr):
    result = 0
    for number in arr:
        result ^= number
    return result
# https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
def sort_by_length(arr):
    return sorted(arr, key = len)








# 1: def is_divisible(n,x,y):
# we are making function called is_divisable and we giving n,x,y in parameters
#     if  n  % x == 0 and n % y == 0:
# we say that if n / x devision is clean and n / y devision is clean too 
#         return True
#  we are returning true

#     return False
# else we are returning false



# 2: def array_plus_array(arr1,arr2):
# we are making function called array + array and we are giving  arr1 and arr2 in parameters
#     return sum(arr1) + sum(arr2)
# we are just returning addition of their sum




# 3: def feast(beast, dish):
# we are making function called feast and we are giving beast and dish in parameters 
# beast_first_and_last = beast[0] + beast[-1]
# we are saveing beasts firs and last letters
#     dish_first_and_last = dish[0] + dish[-1]
# we are saveing dish firs and last letters
#     return beast_first_and_last == dish_first_and_last 
# and we are returning true or false based on if beast firs and last letter is ecual dish firs and last letters

# 4: def say_hello(name, city, state):
# we are making function called say_hello and we are giving name,city  and state in parameter
#     name1 = ""
# we are making ampty string called name1
#     for i in name:
# we are seeng throught the name 
#         name1 += i + " "
# we are making some additions 
#     name1 = name1[:-1]
# we are making it reversed
#     return f"Hello, {name1}! Welcome to {city}, {state}!"
# we are sayng hello

# 5: def points(games):
# we are making function called points and we are giving games to parameter
#     score=0
# we are making variable called score and we are giving 0 ass definition
#     for i in games:
# we are seeng  throught 
#         i= i.split(":")
# we are spliting it when ever we see:
#         if i[0] > i[1]:
# if first number is greiter then second
#             score += 3
# when score will incrise by 3
#         elif i[0] == i[1]:
# if first number is ecual to second
#             score += 1
# we encrise score by 1
#     return score
# we are returning score