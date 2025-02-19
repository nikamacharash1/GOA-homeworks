<<<<<<< HEAD
# 3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქენი დავალებაა შეკრიბოთ ყველა
# ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან

def odd_index_sum(numbers):
    total_sum = 0 
    for index in range(1, len(numbers), 2):
        total_sum += numbers[index]   
    return total_sum
=======
# 3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქენი დავალებაა შეკრიბოთ ყველა
# ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან

def odd_index_sum(numbers):
    total_sum = 0 
    for index in range(1, len(numbers), 2):
        total_sum += numbers[index]   
    return total_sum
>>>>>>> 52b68c66241e3ada5f3faddd06b0eb87c89a924c
print(odd_index_sum([12, 33, 45, 98, 64]))