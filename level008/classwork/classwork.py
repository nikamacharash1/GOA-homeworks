password = (input("gtxovt shmoitanet tqveni paroli:"))
re_password = (input("gtxovt  gaimeoret paroli:"))

print(password == re_password)


#მომხმარებელს შემოატანინეთ ორი რიცხვი და ამ ორ რიცხვს შორის გამოიყენეთ ყველა შესაძლო შედარების ოპერაცია <,>,<=,>=,== 
num1 = (input("please enter a number"))
num2 = (input("please enter second number"))
print(num1 < num2)
print(num1 > num2)
print(num1 <= num2)
print(num1 >= num2)
print(num1 == num2)

#შემოატანინეთ მომხმარებელს ერთი რიცხვი და შეამოწმეთ არის თუ არა ეგ რიცხვი მეტი 5-ზე ზე და ნაკლები ან ტოლი 10-ზე გამოიყენეთ and
num = (input("please enter a number"))
print = int(num > 5 <10)

#გატესტეთ ყველა კომბინაცია and-ზეც და or-ზეც მაგ:true or false ,false or true
num=5
# print(True and True) # True
# print(True and False) # False
# print(False and True) # False
# print(False and False) # False 

# print(True or True) # True
# print(True or False) # True
# print(False or True) # True
# print(False or False) # False

print("----------- AND -----------")

print(num >= 1 and num <= 10) # True
print(num >= 1 and num <= 4) # False
print(num > 5 and num <= 10) # False
print(num > 5 and num > 10) # False

print("----------- OR -----------")

print(num >= 1 or num <= 10) # True
print(num >= 1 or num <= 4) # True
print(num > 5 or num <= 10) # True
print(num > 5 or num > 10) # False