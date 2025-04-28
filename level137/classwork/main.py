def battle(x, y):
    def calculate_power(s):
        return sum(ord(char) - ord('A') + 1 for char in s)
    
    power_x = calculate_power(x)
    power_y = calculate_power(y)
    
    if power_x > power_y:
        return x
    elif power_y > power_x:
        return y
    else:
        return "Tie!"
