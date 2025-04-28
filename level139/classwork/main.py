import re

def is_letter(s):
    if isinstance(s, str) and len(s) == 1:
        return bool(re.match(r'^[a-zA-Z]$', s))
    return False


2
def count_zeros(x):
    count = 0
    for i in range(1, x + 1):
        count += str(i).count('0')
    return count

3
def count_red_beads(n):
    if n < 2:
        return 0
    return 2 * (n - 1)
