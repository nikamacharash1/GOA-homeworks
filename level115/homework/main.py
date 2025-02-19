def sum_digits(n):
    if n < 0:
        return 0
    result = 0
    for i in str(n):
        result += int(i)
    return result


def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    max2 = max(lst)
    while max2 == max1:
        lst.remove(max1)
        max2 = max(lst)


    return max1 + max2