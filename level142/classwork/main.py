def format_poem(text):
    sentences = text.strip().split(". ")  
    sentences = [s if s.endswith(".") else s + "." for s in sentences] 
    return "\n".join(sentences) 


2
from decimal import Decimal, ROUND_HALF_UP

def round_to_five(arr):
    return [int((Decimal(str(x)) / 5).quantize(0, rounding=ROUND_HALF_UP)) * 5 for x in arr]