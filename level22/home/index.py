<<<<<<< HEAD
# 1. შექმენით ფუნქცია, რომელიც იღებს რაიმე რიცხვს და აბრუნებს მასზე 5'ით მეტს.
# def plus_five(num):
#     return num + 5
# end = plus_five(34)
# print(end) grmgrdurbu


# 2. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ ნამრავლს
# def sum(a, b):
#     return a * b
# end = sum(23, 45)
# print(end)


# 3. შექმენით ფუნქცია, რომელიც იღებს string'ს ამ string'ის სიგრძეს (გამოიყენეთ ფუნქცია len()).

# def string_len(str):
#     return len(str)
# leng = string_len("goa best")
# print(leng)




# 4. შექმენით ფუნქცია, რომელიც იღებს string'ების list'ს და აბრუნებს ამ string'ების სიგრძეების list'ს (გამოიყენეთ ფუნქცია len()).

# def string_leng(strings):
#     return [len(s) for s in strings]
# strings = ["car", "teddy", "chair"]
# lengths = string_leng(strings)
# print(lengths)  


# 5. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს თუ ის არის Palindrome (ანუ იგივენაირად იკითხება მარცნიდანაც და მარჯვნიდანაც 
# მაგალითად: "wow") და სხვა შემთხვევაში False-ს.
# def is_palindrome(p):
#     p = p.replace(" "," ").lower()
#     return p == p[::-1]
# print(is_palindrome("wow"))

# 6. შექმენით ფუნქცია, რომელიც პოულობს ყველაზე გრძელ string'ს string'ების სიაში.

# def len_str(string):
#     if not string: 
#         return None
#     return max(string, key=len)
# list_len = ["giraffe", "bear", "dog", "bird"]
# print(len_str(list_len))  





# 7. შექმენით ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მის factorial'ს (რა არის ფაქტორიალი: https://en.wikipedia.org/wiki/Factorial).

# ??????????????????/


# 8. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მაქსიმალური რიცხვების ჯამს.
# def sum_ints(list1_9, list10_):
#     max1_9 = max(list1_9)
#     max10_ = max(list10_)
#     return max1_9 + max10_
# list1_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# list10_ = [10, 34, 56, 32, 87, 91]
# print(sum_ints(list1_9, list10_))

# 9. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მინიმალური რიცხვების სხვაობას.

# def difference_ints(list1, list2):
#     min1 = min(list1)
#     min2 = min(list2)
#     return min1 - min2
# list1 = [6, 8, 56, 45, 35]
# list2 = [5, 34, 32, 51, 54]
# print(difference_ints(list1, list2))



# 10. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ამ სიაში მაქსიმალური და მინიმალური რიცხვების სხვაობას.

# def difference_ints(list5):
#      max_num = max(nums)
#      min_num = min(nums)
#      return max_num - min_num
# nums = [7, 4, 6, 8, 2, 76]
# print(difference_ints(nums))








# 11. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ყველა ელემენტის ჯამს.
# def sum_nums(nums):
#     return sum(nums)
# nums = [7, 7, 4, 3, 6, 5]
# print(sum_nums(nums))



# 12. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს ხმოვანი ასოების რაოდენობას string'ში.
# def str_xmovnebi(s):
#     xmovnebi = "a, e, i, o, u"
# ??????????/



# 13. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ახალ list'ს თითოეული integer'ის კვადრატით. 
# (მაგალითად: input: [2, 4]. output: [4, 16])
# def num_squares(nums):
#     return(x ** 2 for x in nums)
# nums = [3, 4, 2, 7]
# print(num_squares(nums))

# 14. შექმენით ფუნქცია, რომელიც იღებს string's და აბრუნებს მის შებრუნებულს.


# ??


# 15. შექმენით ფუნქცია, რომელიც იღებს რაიმე integer'ს და თუ ლუწია აბრუნებს True'ს, თუ კენტი False'ს.
# def is_even(e):
#     return e % 2 == 0
# print(is_even(66))  
# print(is_even(63))




# 16. შექმენით ფუნქცია, რომელიც იღებს string'ების სიას და აბრუნებს ყველაზე გრძელ string'ს.


# def len_str(string):
#     if not string: 
#         return None
#     return max(string, key=len)
# list_len = ["giraffe", "bear", "dog", "bird"]
# print(len_str(list_len))  





# 17. შექმენით ფუნქცია, რომელიც იღებს მთელი რიცხვების სიას და აბრუნებს სიაში ყველაზე მცირე რიცხვს.

# def min_num(nums):
#     return min(nums)
# nums = [3, 5, 45, 62, 12]
# print(min_num(nums))



# 18. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ უდიდეს საერთო გამყოფს (GCD-Greatest common divisor).



# /?????????


# 19. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს იმავე string'ს uppercase'ში. 
# (მაგალითად: input: "Hello World". output: "HELLO WORLD".
# def str_uppercase(s):
#     return s.upper()
# text = "Hello World"
# print(str_uppercase(text))





# 20. შექმენით ფუნქცია, რომელიც იღებს integer'ების სიას და აბრუნებს მათ საშუალო არითმეტიკულს.
# (მაგალითად: input: [1, 5, 12]. output: (1 + 5 + 12)/3, ანუ 6.) (ელემენტების დასათვლელად გამოიყენეთ ფუნქცია len).
# def aritmetic_num(nums):
#     return sum(nums) / len(nums)
# nums = [1, 5, 12]
=======
# 1. შექმენით ფუნქცია, რომელიც იღებს რაიმე რიცხვს და აბრუნებს მასზე 5'ით მეტს.
# def plus_five(num):
#     return num + 5
# end = plus_five(34)
# print(end) grmgrdurbu


# 2. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ ნამრავლს
# def sum(a, b):
#     return a * b
# end = sum(23, 45)
# print(end)


# 3. შექმენით ფუნქცია, რომელიც იღებს string'ს ამ string'ის სიგრძეს (გამოიყენეთ ფუნქცია len()).

# def string_len(str):
#     return len(str)
# leng = string_len("goa best")
# print(leng)




# 4. შექმენით ფუნქცია, რომელიც იღებს string'ების list'ს და აბრუნებს ამ string'ების სიგრძეების list'ს (გამოიყენეთ ფუნქცია len()).

# def string_leng(strings):
#     return [len(s) for s in strings]
# strings = ["car", "teddy", "chair"]
# lengths = string_leng(strings)
# print(lengths)  


# 5. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს თუ ის არის Palindrome (ანუ იგივენაირად იკითხება მარცნიდანაც და მარჯვნიდანაც 
# მაგალითად: "wow") და სხვა შემთხვევაში False-ს.
# def is_palindrome(p):
#     p = p.replace(" "," ").lower()
#     return p == p[::-1]
# print(is_palindrome("wow"))

# 6. შექმენით ფუნქცია, რომელიც პოულობს ყველაზე გრძელ string'ს string'ების სიაში.

# def len_str(string):
#     if not string: 
#         return None
#     return max(string, key=len)
# list_len = ["giraffe", "bear", "dog", "bird"]
# print(len_str(list_len))  





# 7. შექმენით ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მის factorial'ს (რა არის ფაქტორიალი: https://en.wikipedia.org/wiki/Factorial).

# ??????????????????/


# 8. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მაქსიმალური რიცხვების ჯამს.
# def sum_ints(list1_9, list10_):
#     max1_9 = max(list1_9)
#     max10_ = max(list10_)
#     return max1_9 + max10_
# list1_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# list10_ = [10, 34, 56, 32, 87, 91]
# print(sum_ints(list1_9, list10_))

# 9. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მინიმალური რიცხვების სხვაობას.

# def difference_ints(list1, list2):
#     min1 = min(list1)
#     min2 = min(list2)
#     return min1 - min2
# list1 = [6, 8, 56, 45, 35]
# list2 = [5, 34, 32, 51, 54]
# print(difference_ints(list1, list2))



# 10. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ამ სიაში მაქსიმალური და მინიმალური რიცხვების სხვაობას.

# def difference_ints(list5):
#      max_num = max(nums)
#      min_num = min(nums)
#      return max_num - min_num
# nums = [7, 4, 6, 8, 2, 76]
# print(difference_ints(nums))








# 11. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ყველა ელემენტის ჯამს.
# def sum_nums(nums):
#     return sum(nums)
# nums = [7, 7, 4, 3, 6, 5]
# print(sum_nums(nums))



# 12. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს ხმოვანი ასოების რაოდენობას string'ში.
# def str_xmovnebi(s):
#     xmovnebi = "a, e, i, o, u"
# ??????????/



# 13. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ახალ list'ს თითოეული integer'ის კვადრატით. 
# (მაგალითად: input: [2, 4]. output: [4, 16])
# def num_squares(nums):
#     return(x ** 2 for x in nums)
# nums = [3, 4, 2, 7]
# print(num_squares(nums))

# 14. შექმენით ფუნქცია, რომელიც იღებს string's და აბრუნებს მის შებრუნებულს.


# ??


# 15. შექმენით ფუნქცია, რომელიც იღებს რაიმე integer'ს და თუ ლუწია აბრუნებს True'ს, თუ კენტი False'ს.
# def is_even(e):
#     return e % 2 == 0
# print(is_even(66))  
# print(is_even(63))




# 16. შექმენით ფუნქცია, რომელიც იღებს string'ების სიას და აბრუნებს ყველაზე გრძელ string'ს.


# def len_str(string):
#     if not string: 
#         return None
#     return max(string, key=len)
# list_len = ["giraffe", "bear", "dog", "bird"]
# print(len_str(list_len))  





# 17. შექმენით ფუნქცია, რომელიც იღებს მთელი რიცხვების სიას და აბრუნებს სიაში ყველაზე მცირე რიცხვს.

# def min_num(nums):
#     return min(nums)
# nums = [3, 5, 45, 62, 12]
# print(min_num(nums))



# 18. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ უდიდეს საერთო გამყოფს (GCD-Greatest common divisor).



# /?????????


# 19. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს იმავე string'ს uppercase'ში. 
# (მაგალითად: input: "Hello World". output: "HELLO WORLD".
# def str_uppercase(s):
#     return s.upper()
# text = "Hello World"
# print(str_uppercase(text))





# 20. შექმენით ფუნქცია, რომელიც იღებს integer'ების სიას და აბრუნებს მათ საშუალო არითმეტიკულს.
# (მაგალითად: input: [1, 5, 12]. output: (1 + 5 + 12)/3, ანუ 6.) (ელემენტების დასათვლელად გამოიყენეთ ფუნქცია len).
# def aritmetic_num(nums):
#     return sum(nums) / len(nums)
# nums = [1, 5, 12]
>>>>>>> 52b68c66241e3ada5f3faddd06b0eb87c89a924c
# print(aritmetic_num(nums))