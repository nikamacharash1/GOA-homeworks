def palindrome(num):
    if not isinstance(num, int) or num < 0:
        return "Not valid"
    s = str(num)
    count = 0
    length = len(s)
    for i in range(length):
        for j in range(i + 2, length + 1):
            substr = s[i:j]
            if substr == substr[::-1]:
                count += 1             
    return count