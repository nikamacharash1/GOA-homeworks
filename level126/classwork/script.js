// def sort_it(words, n):
//     word_list = words.split(', ')
//     sorted_words = sorted(word_list, key=lambda word: word[n-1].lower())
//     return ', '.join(sorted_words)
2
// def digit_degree(n):
//     degree = 0
//     while n >= 10:  # While the number has more than one digit
//         n = sum(int(digit) for digit in str(n))  
//         degree += 1  
//     return degree
