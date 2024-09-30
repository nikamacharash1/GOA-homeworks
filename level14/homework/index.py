# For Loop:

# 1) Print all integers from 0 to 20 inclusive.

# for i in range(21):
#     print(i)

# 2) Print the first 10 natural numbers.

# for i in range(10):
#     print(i)

# 3) Print even numbers separately and odd numbers separately from 0 to 100 inclusive.
  

# for i in range(0, 100, 2):
#     print(i)


# 4) Enter a number to the user and then using a for loop output the sum of all the 
# numbers up to this number (for example, if he enters 10, output the sum of all the numbers up to 10, for example).
# num =int(input("please enter a number"))
# sum =0
# for i in range(num):
#     sum +=i 
# print(sum)

# 5) Write an algorithm that prints multiples of 5 (numbers divisible by 5) from 1 to 50 inclusive

# for i in range(1, 50):
#     if i % 5 ==0:
#         print(i)
    


# 1) Print even numbers up to 20.
# num = 0
# while num <20:
#      print(num)
#      num +=2

# 2) calculate the sum of numbers from 1 to 10.
# num6 = 1
# sum = 0
# while num6 <10:
#     sum +=num6
#     num6 +=1
# print(sum)
    

# 3) Write a while loop that asks the user to guess a number between 1 and 10 until they get it right. The correct number is 7.
# correct_num = 7
# user_num = None
# while user_num != correct_num:
#     user_num =int(input("please enter a correct number:"))
#     if user_num != correct_num:
#         print("try again")
#     else:
#         print("congratulations")
# 4) Write a while loop that processes a list of numbers, doubling each number, and prints the new list.

 
#  5) Write a while loop that repeatedly asks the user to enter a password until the correct password "password123" is entered.
# passw = "password123"
# user_pass = None
# while user_pass != passw:
#     user_pass = input("please enter a correct password:")
#     if user_pass != passw:
#        print("try again")
#     else:
#         print("it's right")

# 1) Write an if-else statement that prints "Good morning!" if the current hour is less than 12 and "Good afternoon!" otherwise.
# clock = int(input("please enter a clock:"))
# if clock  < 12:
#     print("good morning")
# else:
#     print("good afternoon")

# 2) Write an if-else statement that checks if a number is even or odd. If the number is even, print "Even"; otherwise, print "Odd."
# number = int(input("please enter a number:"))
# if number % 2 == 0:
#     print("even")
# else:
#     print("odd")

# 3) Create an if-else statement to check if the temperature is above 30 degrees. 
# If it is, print "It's hot outside!"; otherwise, print "It's not too hot."
# temp = int(input("please enter a temperature"))
# if temp > 30:
#     print("it's hot outside")
# else:
#     print("it's not hot outside")

# 4) Create an if-else statement that determines if a person is a teenager. 
# If the age is between 13 and 19 (inclusive), print "You are a teenager!"; otherwise, print "You are not a teenager."
# age =int(input("please enter your age"))
# if 13 < age < 19:
#     print("you are a teenager")
# else :
#     print("you are not a teenager")


# For Loop:
# 1) Write a program that calculates and prints the sum of numbers from 1 to 10 using a for loop.
# sum = 0
# for i in range(1, 10):
#     sum += i
# print(sum)


# 2)Print the squares of numbers from 1 to 15.
# for i in range(1, 15):
#     print(i ** 2)

# 3)Write a program that calculates and prints the sum of squares of numbers from 1 to 5 using a for loop.
# sum1 = 0
# for i in range(1, 5):
#     sum1 += i**2
# print(sum1)


# 4)Print numbers divisible by both 3 and 5 from 1 to 100 inclusive.
# for i in range(1, 100):
#     if i % 3 == 0 and i % 5 == 0:
#         print(i)

# 5)Write a program that prints numbers from 10 to 1 in reverse order using a for loop.
# for i in range(10, 1, -1):
#     print(i)

# While Loop:
# 1)Calculate the sum of digits of a number entered by the user.
# num = int(input("please enter a number"))
# sum = 0
# i = 0
# while i < num:
#      sum += i
#      i += 1
# print(sum)


# 2)Write a program that uses a while loop to print numbers from 10 down to 1.
# i = 10
# while i > 1:
#     print(i)
#     i -= 1

# 3)Write a program that calculates and prints the sum of all integers from 1 to 100 using a while loop.
# numb = 1
# sum = 0
# while numb <100:
#      sum +=numb
#      numb +=1
# print(sum)




# 4)Write a program that calculates and prints the square of numbers from 1 to 10 using a while loop.
# num5 = 1
# sum = 0
# while num5 <10:
#    sum += num5 ** 2
#    num5 += 1
# print(sum)

# If - Else:
# 1)Write an if-else statement to determine if a year entered by the user is a leap year.
# year = int(input("please enter a year:"))
# if year % 4 == 0:
#     print("it's leap year")
# else:
#     print("it's not leap year")

# 2)Check if a given string entered by the user is a palindrome.
# word = input("please enter a word:")
# if word == word[::-1]:
#     print("it's palindrome")
# else:
#     print("its not palindrome")


# 3)termine if a number entered by the user is positive, negative, or zero.
# num =int(input("please enter a number"))
# if num > 0 :
#     print("its positive")
# elif num <0 :
#     print("its negative")
# else:
#     print("its zero")



# 4)lculate the BMI of a person based on their height and weight entered by the user and classify their BMI category using if-else.
# height = int(input("please enter your height"))
# weight = int(input("please enter your weight"))
# bmi = weight / ((height / 100) ** 2)
# if bmi < 18.5:
#     print("naklebia")
# elif 18.5 < bmi <24.9:
#     print("normal")
# elif 25 < bmi <29.9:
#     print("metia")
# else:
#     print("zedmetia")
    