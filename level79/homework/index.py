# // დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,
# //   წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)
# // ( პითონში და ასევე ჯავასკიპტში ) 
# // ( სამკუთხედზე გამოიყენეთ ჰერონის ფორმულა )
def count_area_rectangle(length, width):
    area = length * width
    return area

def count_area_circle(radius):
    area = 3.14159 * radius * radius
    return area

def count_area_triangle(a, b, c):
    s = (a + b + c) / 2
    area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
    return area