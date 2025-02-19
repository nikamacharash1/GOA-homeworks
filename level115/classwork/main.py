def sum_array(arr):
    if not arr:
        return 0
    if len(arr) < 2:
        return 0
    return sum(arr) - min(arr) - max(arr)