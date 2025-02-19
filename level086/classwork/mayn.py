# 1) https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
def find_it(seq):
    result = 0
    for number in seq:
        result ^= number
    return result