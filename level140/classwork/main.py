a = "code"
b = "wa.rs"
name = a + b


2
def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    return sum(range(begin_number, end_number + 1, step))


3
def solution(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b
