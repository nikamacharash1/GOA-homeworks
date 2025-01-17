def matrix_sum(matrix):
    total = 0
    for row in matrix:
        for element in row:
            total += element
    return total

print(matrix_sum([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))



# 2
def swap_rows_and_columns(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    return matrix

print (swap_rows_and_columns([[1, 4, 7],[2, 5, 8],[3, 6, 9]]))


# 3
def diagonal_sum(matrix):
    n = len(matrix)
    diagonal1 = 0
    diagonal2 = 0
    
    for i in range(n):
        diagonal1 += matrix[i][i]
        diagonal2 += matrix[i][n - 1 - i]
    
    return diagonal1, diagonal2

print (diagonal_sum([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))