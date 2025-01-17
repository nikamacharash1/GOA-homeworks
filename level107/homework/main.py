# 1) შემოგდით n და n ზომის მასივი. დაბეჭდეთ მასივის ორი უდიდესი ელემენტის ჯამი.
#    მაგ 5, 18 12 40 1 19
#    პასუხია 40+19=59.
def sum_two_largest(arr):
    if len(arr) < 2:
        return None  
    max1, max2 = float('-inf'), float('-inf')
    for num in arr:
        if num > max1:
            max2 = max1  
            max1 = num   
        elif num > max2:
            max2 = num   
    
    return max1 + max2  
arr = [5, 18, 12, 40, 1, 19]
result = sum_two_largest(arr)
print(result)  


# 2) შემოგდით n და n ზომის მასივი. თქვენი ამოცანაა იპოვოთ მასივში ყველაზე ბოლოს გამეორებული ელემენტი და 
# დაბეჭდოთ იგი. თუ  ასეთი ელემენტი არ არსებობს დაბეჭდეთ რომ მასივში არცერთი ელემენტი არ მეორდება
# მაგ : 5, 1 3 4 1 3 12 
# პასუხია 3 (მასივში გამიმეორდა 1-იანი და 3-იანი თუმცა რადგან 3 უფრო გვიან გამეორდა ეგაა საძებნი ელემენტიც)    

def find_last_repeated(arr):
    seen = set() 
    last_repeated = None  
    
    for num in reversed(arr):
        if num in seen:
            last_repeated = num  
            break
        seen.add(num) 
    if last_repeated is not None:
        return last_repeated
    else:
        return "მასივში არცერთი ელემენტი არ მეორდება"
arr = [5, 1, 3, 4, 1, 3, 12]
result = find_last_repeated(arr)
print(result)  



# 3) შემოდის n და n ზომის მასივი. თქვენი  ამოცანაა თითოეული ელემენტისთვის დაბეჭდოთ მის მარცხნივ მყოფ ელემენტებს შორის რამდენზე მეტია იგი.
# მაგ  n=5, 3 2 6 5 1
# პასუხია 0,0,2,2,0  (3-ის წინ არცერთი ელემეტნია, 2ის წინ 3ია თუმცა არაა მასზე მეტი ,
# 6ის წინ 3 და 2  წერია რადგან ორივეზე მეტია დაიბეჭდება 2, 5ის 3 2 6 წერია ამათგან 2 მათგანზე მეტია აქაც 2 და ბოლოს 1იანი არცერთზე მეტი არაა და დაიბეჭდება 0 )
def count_greater_left(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for j in range(i):
            if arr[j] > arr[i]:
                count += 1
        result.append(count)
    return result
arr = [3, 2, 6, 5, 1]
result = count_greater_left(arr)
print(result) 