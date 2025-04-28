def calculator(x, y, op):
    if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
        return "unknown value"
    
    if op == "+":
        return x + y
    elif op == "-":
        return x - y
    elif op == "*":
        return x * y
    elif op == "/":
        if y == 0:
            return "unknown value"  
        return x / y
    else:
        return "unknown value"

2
def kata_13_december(lst):
    result = []
    
    for num in lst:
        if num % 2 != 0:  
            result.append(num)
    
    return result



3
def replace_exclamation(st):
    return ''.join('!' if char in 'aeiouAEIOU' else char for char in st)



4
# from preloaded import Animal

# class Cat(Animal):
#     def speak(self):
#         return f"{self.name} meows."
