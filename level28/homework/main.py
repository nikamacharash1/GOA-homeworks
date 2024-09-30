# https://www.codewars.com/kata/5583090cbe83f4fd8c000051
def digitize(n):
    number_str = str (n)[::-1]
    reverse = []
    for i in  number_str:
        reverse.append(int(i))
    return reverse
#   https://www.codewars.com/kata/53af2b8861023f1d88000832
def are_you_playing_banjo(name):
    if name[0].lower() == "r":
        return name + " plays banjo" 
    else:
        return name + " does not play banjo"
#   https://www.codewars.com/kata/5672a98bdbdd995fad00000f
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif (p1 == "rock" and p2 == "scissors") or \
        (p1 == "paper" and p2 == "rock") or \
        (p1 == "scissors" and p2 == "paper"):
        return "Player 1 won!" 
    else:
        return "Player 2 won!"
#   https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
def quarter_of(month):
    if month in [1,2,3]:
        return 1
    elif month in [4,5,6]:
        return 2
    elif month in [7,8,9]:
        return 3
    elif month in [10,11,12]:
        return 4
    else:
        return "invalid month"
#   https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
def count_sheep(n):
    result = ""
    for i in range(1, n+1):
        result += f"{i} sheep..."
    return result.strip()
#   https://www.codewars.com/kata/5772da22b89313a4d50012f7
def greet(name, owner):
    if name == owner:
        return 'Hello boss'
    else:
        return "Hello guest"
#   https://www.codewars.com/kata/568d0dd208ee69389d000016
def rental_car_cost(d):
    daily_rate = 40
    total_coast = d * daily_rate
    if d >= 7:
        total_coast -= 50
    elif d >= 3:
        total_coast -= 20
    return total_coast
    
#   https://www.codewars.com/kata/57a0885cbb9944e24c00008e
def remove_exclamation_marks(s):
    return s.replace("!","")
