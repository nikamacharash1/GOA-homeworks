# // 1) ხელით შეავსეთ 5-ელემენტიანი მთელი რიცხვების მასივი და გამობეჭდეთ მე-2 და მე-4 ინდექსზე მყოფი ელემენტები.
nums = [3, 45, 54, 10, 98]
print("index n2:", nums[2]) 
print("indexn4:", nums[4])  
# // 2) შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეავსეთ მასივი (0 დან) შეყვანილი რიცხვებით და გამობეჭდეთ კენტ ინდექსზე მყოფი ელემენტები ( a[1], a[3], a[5]...)
N = int(input("nums num: "))
nums = []
for i in range(N):
    num = int(input(f"enter num {i+1}: "))
    nums.append(num)
print("kenti num:")
for i in range(1, N, 2):  
    print(f"a[{i}] = {nums[i]}")
# // 3) აღწერეთ 10 ელემენტიანი მთელი რიცხვების მასივი, შეიყვანეთ კონსოლიდან 10 ელემენტი (for-ით), მასივში არსებული რიცხვები გააორმაგეთ და გამობეჭდეთ ეკრანზე
nums = []
for i in range(10):
    num = int(input(f"enter number {i+1}: "))
    nums.append(num)
doubled_nums = [num * 2 for num in nums]
print("doubled num:")
for num in doubled_nums:
    print(num)
# // 4) შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეინახეთ რიცხვები მასივში და გამობეჭდეთ შებრუნებული თანმიმდევრობით. (მაგ: თუ რიცხვებია 5 7 12, გამობეჭდეთ 12, 7, 5)
N = int(input("numbers num: "))
nums = []
for i in range(N):
    num = int(input(f"enter number {i+1}: "))
    nums.append(num)
reversed_nums = nums[::-1]
print("reversed number:")
for num in reversed_nums:
    print(num)
