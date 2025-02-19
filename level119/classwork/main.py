def multi_table(number):
    result = []
    for i in range(1,11):
        result.append(f"{i} * {number} = {i * number}")
    return '\n'.join(result)

def wave(people):
    result = []
    
    for i in range(len(people)):
        if people[i] != " ":
            word = people[0:i] + people[i].upper() + people[i + 1:]
            result.append(word)
    return result

def is_flush(hand):
    first_suit = hand[0][-1]
    for card in hand:
        if card[-1] !=  first_suit:
            return False
    return True