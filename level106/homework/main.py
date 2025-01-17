# 1
def to_underscore(string):
    string = str(string)
    camel_case = string[0].lower()
    for c in string[1:]:
        camel_case += '_{}'.format(c.lower()) if c.isupper() else c
    return camel_case


# 2
def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr, reverse=True):
        return "yes, descending"
    else:
        return "no"
    
    
# 3
# function sort(initialArray, sortingArray) {
#     const arr = [];

#     for (let i = 0; i < sortingArray.length; i++) {
#         arr[sortingArray[i]] = initialArray[i];     
#     }

#     return arr;
# }