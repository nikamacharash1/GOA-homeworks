 #1 sololearn-working with data-მდე





#2   განიხილეთ ეს კოდი და ახსენით კომენტარებით თუ რატომ მივიღებთ Trues ან False
# num = 5

# print(True and True) # True. აქ რიცხვი ორივე მხარეს მოერგო და კარგად ჩაჯდა ამიტომ true
# print(True and False) # False. აქ პირველ მხარეს მოერგო მხოლოდ და მეორეს ვერა საჭირო იყო რომ ორივე მხარესთან შეთავსებულიყო ამიტმომ false
# print(False and True) # False.  აქ მეორე მხარეს მოერგო მხოლოდ და პირველს ვერა საჭირო იყო რომ ორივე მხარესთან შეთავსებულიყო ამიტმომ false
# print(False and False) # False. აქ ვერცერთ მხარესთან ვერ შეთავსდა ამიტომ false

# print(True or True) # True.აქ საჭირო იყო რომ ერთ მხარესთან მაინც შეთავსებულიყო მაგრამ ორივესთან შეთავსდა ამიტომ true
# print(True or False) # True.აქ საჭირო იყო რომ ერთ მხარესთან მაინც შეთავსებულიყო   შეთავსდა ამიტომ true
# print(False or True) # True.აქ საჭირო იყო რომ ერთ მხარესთან მაინც შეთავსებულიყო   შეთავსდა ამიტომ true
# print(False or False) # False.აქ საჭირო იყო რომ ერთ მხარესთან მაინც შეთავსებულიყო მაგრამ ვერ შეთავსდა ამიტომ false

# print("----------- AND -----------")

# print(num >= 1 and num <= 10) # True.აქ რიცხვი ორივე მხარეს მოერგო და კარგად ჩაჯდა როგორც იყო საჭირო ამიტომ true
# print(num >= 1 and num <= 4) # False.აქ რიცხვი ორივე მხარეს უნდა მორგებულიყო მაგრამ ვერ შეთავსდა ამიტომ false
# print(num > 5 and num <= 10) # False.აქ რიცხვი ორივე მხარეს უნდა მორგებულიყო მაგრამ ვერ შეთავსდა ამიტომ false
# print(num > 5 and num > 10) # False.აქ რიცხვი ორივე მხარეს უნდა მორგებულიყო მაგრამ ვერ შეთავსდა ამიტომ false

# print("----------- OR -----------")

# print(num >= 1 or num <= 10) # True.or ოპერატორის შემთხვევაში ერთ ერთს მაინც თუ შეუთავსდა მაშინ წარმატებით განხორციელდა ფუნქცია როგორც ჩანს
# print(num >= 1 or num <= 4) # True
# print(num > 5 or num <= 10) # True
# print(num > 5 or num > 10) # False
#  განიხილეთ ეს კოდი და ახსენით კომენტარებით თუ რატომ მივიღებთ Trues ან False

#3  ახსენით როგორ მუშაობს and ოპერატორი და or ოპერატორი

  #and ოპერატორის შემთხვევაში ყველა მოთხოვნილი მოქმედება უნდა იყოს შესრულებული პირნათლად-
#მაგალითად: თუ გვინდა რომ მომხმარებელმა შემიტანოს ჩვენ საიტზე რეგისტრაციის დროს ჩვენი მოთხოვნილი სახელი და გვარი (აქ ჩვენ ვიყენებთ and-ს)
#და შემოიტანა მხოლოდ სახელი ან გვარი.მაშინ მოქმედება არ იქნება შესრულებული და ვერ დარეგისტრირდება.
  #or ოპერატორის შემთხვევაში არ არის საჭირო რომ ყველაფერი იყოს პირნათლად შესრულებული-
#მაგალითად თუ კი მომხმარებელს ვთხოვთ შემოიტანოს სახელი ან გვარი ან ორივე (აქ ჩვენ ვიყენებთ or-ს)მაშინ არ არის აუცილებელი მან დაწეროს 
#სრული სახელი და გვარი რათა დარეგისტრირდეს.

#4  გამოიყენეთ ლოგიკური ოპერატორები (and,or) და გააკეთეტ 5-5 მაგალითი
 #and
num1 = int(input("please enter a num"))
num2 = int(input("please enter seqond num"))
print(num1 > 5 and num2 < 10)

num3 = int(input("please enter a num"))
num4 = int(input("please enter second num"))
print (num1 > 20 and num2 < 60)

num = int(input("please enter a num"))
print(num > 36 and num < 12)

num5 = int(input("please enter a num"))
print(num5 < 45 and num5 >2)

number = int(input("please enter a num"))
print(number < 8  >1)
#  #or
num_1 = int(input("please enter a num"))
print(num_1 >5 or num_1 < 5)

num_2 = int(input("please enter a num"))
print(num_2 < 100 or num_2 > 130 )

num22 = int(input("please enter a num"))
num11 = int(input("please enter seqond num"))
print (num22 > 90 or num11 < 80)

num6 = int(input("please enter a num"))
num7 = int(input("please enter seqond num"))
print (num6 > 5 or num7 < 10)

num12 = int(input("please enter a num"))
num13 = int(input("please enter seqond num"))
print (num12 > 11 or num13 < 67)

#5 გამოიყენეთ ყველა შედარების ოპერატორი ორ რიცხვს შორის
num1 = (input("please enter a number"))
num2 = (input("please enter second number"))
print(num1 < num2)
print(num1 > num2)
print(num1 <= num2)
print(num1 >= num2)
print(num1 == num2)
