def row_weights(array):
    a = array[::2]
    b = array[1::2]
    return sum(a),sum(b)
2
def remove_smallest(numbers):
    if not numbers:  
        return []
    min_value = min(numbers)  
    min_index = numbers.index(min_value) 
    return numbers[:min_index] + numbers[min_index + 1:] 

3
def make_readable(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    return f"{hours:02}:{minutes:02}:{seconds:02}"
4

def generate_hashtag(s):
    s = s.strip()
    if not s:
        return False
    result = "#" + "".join(word.capitalize() for word in s.split())
    if len(result) > 140:
        return False
    return result