# For Loops:

# 1. For Loop-ის მეშვეობით გამოიტანე 1-დან 10-მდე ციფრები.

# for i in range(1, 10):
#     print(i)

# 2. For Loop-ის მეშვეობით დაბეჭდეთ სასურველი წინადადება რამდენჯერმე.
  
# for i in range(5):
#     print("hello world")

# While Loops: 

# 1. While Loop-ის მეშვეობით გამოიტანე ციფრები 1-დან 5-მდე.

# num = 1
# while num <5:
#     print(num)
#     num +=1



# 2. While loop-ის მეშვეობით გამოიტანე Hello 3-ჯერ.

# hi =1 
# while hi <4:
#     print("hello")
#     hi +=1


# Conditional Statements:

# Easy:
# 1. დაწერეთ პროგრამა, რომელიც ამოწმებს მომხმარებლის მიერ შეყვანილი ასაკი დადებითია თუ უარყოფითი.
# age =int(input("please enter your age"))
# if age >0:
#     print("dadebitia")
# else :
#     print("uaryopitia")


# 2. დაწერეთ პროგრამა, რომელიც ამოწმებს მომხმარებლს მიერ შეყვანილი რიცხვი უდრის თუ არა 10-ს.

# num2 =int(input("please enter a number"))
# if num2 ==10:
#     print("yes")
# else :
#     print("no")




# Hard:
# 3. დაწერეთ, პროგრამა, რომელსაც იმ შემთხვევაში, თუ მომხარებლის მიერ შეყვანილი რიცხვი მეტია 0-ზე და ნაკლებია 10-ზე, გამოაქვს 'child'.

# num3 =int(input("please enter a number"))
# if num3 >0 and num3 <10:
#     print("child")
# else :
#     print("good")
 # Extreme:
# 4. მომხარებელს შეაყვანინეთ სამ ცვლადში სამკუთხედის სამი გვერდი, შემდეგ კი დააადგინეთ, ამ გვერდებისგან შესაძლებელია თუ არა სამკუხთედის აწყობა.

gver1 =int(input("gtxovt shemoitanet samkutxedis erti gverdi"))
gver2 =int(input("gtxovt shemoitanet samkutxedis erti gverdi"))
gver3 =int(input("gtxovt shemoitanet samkutxedis erti gverdi"))
if gver1 + gver3 >gver2 and gver2 + gver3 >gver1 and gver1 + gver2 > gver3:
    print("yes")
else :
    print("no")