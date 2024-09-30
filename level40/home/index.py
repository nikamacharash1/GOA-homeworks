# https://www.codewars.com/kata/57ed30dde7728215300005fa
# def bumps(road):
#     if road.count("n") <=15:
#         return "Woohoo!"
#     else:
#         return "Car Dead"
    
# https://www.codewars.com/kata/535474308bb336c9980006f2
# def greet(name): 
#     name = name.lower()
#     name = name.capitalize()
#     return "Hello " + name + "!"
# https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
# def sum_even_numbers(seq): 
#     list1 = []
#     for i in seq:
#         if i % 2 == 0:
#             list1.append(i)
#     return sum(list1)
# https://www.codewars.com/kata/5413759479ba273f8100003d
# def reverse(lst):
#     list1 = list()
#     length = len(lst)
#     for i in range(length):
#         list1.append(lst[length -1 - i])
#     return list1
            
    
# https://www.codewars.com/kata/57d2807295497e652b000139
# def averages(arr):
#     if not arr or len(arr)<2:
#         return []
#     result = []
#     for i in range(len(arr)-1):
#         avg = (arr[i]+ arr[i+1]) / 2
#         result.append(avg)
#     return result
    
# https://www.codewars.com/kata/5effa412233ac3002a9e471d
# def add(num1, num2):
#     str1 = str(num1)
#     str2 = str(num2)
#     len1 = max(len(str1), len(str2))
#     str1 = "0" * (len1-len(str1))+str1
#     str2 = "0" * (len1-len(str2))+str2
#     result = ""
#     for i in range(len1):
#         dgt_a = int(str1[i])
#         dgt_b = int(str2[i])
#         sum_dgt = dgt_a + dgt_b
#         result += str(sum_dgt)
#     return int(result)
# https://www.codewars.com/kata/609eee71109f860006c377d1
# def last_survivor(letters, coords): 
#     char_list = list(letters)
#     for index in coords:
#         char_list.pop(index)
#         coords = [c-(c>index)for c in coords]
#     return char_list[0]
# https://www.codewars.com/kata/5768a693a3205e1cc100071f
# def initialize_names(name):
#     name = ' '.join(name.split())
#     parts = name.split()
#     if len (parts) == 1:
#         return parts[0]
#     first_name = parts[0]
#     last_name = parts[-1]
#     if len(parts) == 2:
#         return f"{first_name} {last_name}"
#     middle_names = [part[0]+"."for part in parts[1:-1]]
#     return f"{first_name} {' '.join(middle_names)} {last_name}"

# https://www.codewars.com/kata/5701e43f86306a615c001868
# def get_issuer(number):
#     card = str(number)
#     length = len(card)
#     if length == 15 and (card.startswith("34")or card.startswith("37")):
#         return "AMEX" 
#     elif length == 16 and card.startswith("6011"):
#         return "Discover"
#     elif length == 16 and card.startswith(("51", "52", "53", "54", "55")):
#         return "Mastercard"
#     elif length in (13, 16) and card.startswith("4"):
#         return "VISA"
#     else:
#         return "Unknown"
# https://www.codewars.com/kata/57f7b8271e3d9283300000b4
# def even_or_odd(s):
#     even_sum = 0 
#     odd_sum = 0
#     for i in s:
#         num = int(i)
#         if num % 2 == 0:
#             even_sum += num
#         else:
#             odd_sum += num
#     if even_sum > odd_sum:
#         return "Even is greater than Odd"
#     elif odd_sum > even_sum:
#         return "Odd is greater than Even"
#     else:
#         return "Even and Odd are the same"
            