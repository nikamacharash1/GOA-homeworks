// def tower_builder(n_floors):
//     tower = []
//     width = n_floors * 2 - 1  
    
//     for i in range(n_floors):
//         stars = '*' * (2 * i + 1)  
//         line = stars.center(width)  
//         tower.append(line)

//     return tower

2
// def find_missing_letter(chars):
//     for i in range(len(chars) - 1):
//         if ord(chars[i + 1]) != ord(chars[i]) + 1:
//             return chr(ord(chars[i]) + 1)

3
// def sort_array(source_array):
//     odd_numbers = sorted([num for num in source_array if num % 2 != 0])
    
//     odd_index = 0
//     result = []
    
//     for num in source_array:
//         if num % 2 != 0:
//             result.append(odd_numbers[odd_index])
//             odd_index += 1
//         else:
//             result.append(num)
    
//     return result

4

// def find_even_index(arr):
//     for i in range(len(arr)):
//         if sum(arr[:i]) == sum(arr[i+1:]):  
//             return i
//     return -1