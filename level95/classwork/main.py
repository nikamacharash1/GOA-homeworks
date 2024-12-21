# def check_winner(game_board):
#     for row in game_board:
#         if row[0] == row[1] == row[2] and row[0] != "":
#             return "Player "+ row[0] + " wins!"
    
#     for column in range(3):
#         if (game_board[0][column] == game_board[1][column] == game_board[2][column] and game_board[0][column] != ""):
#             return "Player " + game_board[0][column] + " wins!"
    
#     if game_board[0][0] == game_board[1][1] == game_board[2][2] and game_board[0][0] != "":
#         return "Player " + game_board[0][0] + " wins!"
    
#     if game_board[0][2] == game_board[1][1] == game_board[2][0] and game_board[0][2] != "":
#         return "Player " + game_board[0][2] + "wins!"
    
#     for row in game_board:
#         for cell in row:
#             if cell == "":
#                 return "The game is still ongoing."
#     else:
#         return "It's a draw!"

# print (check_winner([ [ 'X', "O", ""], ["X", "X", "O"], ["", "", ""] ]))




# 3
def something (num1, num2):
    num1 = str(num1)
    num2 = str(num2)
    numbers = []
    for i in num1:
        numbers.append(int(i))

    for x in num2:
        numbers.append(int(x))
    
    num1_times_num2 = int(num1) * int(num2)
    num1_times_num2 = str(num1_times_num2)

    for y in num1_times_num2:
        if y not in num1:
            if y not in num2:
                return False
            
    else: 
        return True

print (something (6, 21))
print (something (6, 22))

# 4
def task4(string):
    for i in string:
        if string.count(i) > 1:
            return False
    return True

print(task4("12354")) 
print(task4("11234")) 