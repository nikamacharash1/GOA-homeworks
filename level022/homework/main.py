def add_five(num):
    return num + 5


def multiply(a, b):
    return a * b


def string_length(s):
    return len(s)


def list_string_lengths(strings):
    return [len(s) for s in strings]


def is_palindrome(s):
    return s == s[::-1]


def longest_string(strings):
    return max(strings, key=len)


def factorial(n):
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


def max_sum(list1, list2):
    return max(list1) + max(list2)


def min_difference(list1, list2):
    return min(list1) - min(list2)


def max_min_difference(numbers):
    return max(numbers) - min(numbers) 