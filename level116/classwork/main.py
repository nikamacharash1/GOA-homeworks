def series_sum(n):
    if n == 0:
        return "0.00"
    total = 0.0
    for i in range(n):
        total += 1 / (1 + 3 * i)
    return f"{total:.2f}"