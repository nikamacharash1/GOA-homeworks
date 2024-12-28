def func(matrix):
    list1 = []
    for row in matrix:
        for elem in row:
            list1.append(elem)
    
    unique_elements = []
    
    for elem in list1:
        count = list1.count(elem)
        if count == 1 and elem not in unique_elements:
            unique_elements.append(elem)
    
    return unique_elements

matrix = [
    [1, 2, 5],
    [2, 5, 6],
    [3, 3, 6]
]

print(func(matrix))








def most_frequent_characters(string):
    frequency = {}
    
    for char in string:
        if char in frequency:
            frequency[char] += 1
        else:
            frequency[char] = 1
    
    max_freq = 0
    for char in frequency:
        if frequency[char] > max_freq:
            max_freq = frequency[char]
    
    result = []
    for char in frequency:
        if frequency[char] == max_freq:
            result.append(char)
    
    return result

string = "aabbbcccdde"
print(most_frequent_characters(string))