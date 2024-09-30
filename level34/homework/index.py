<<<<<<< HEAD
#  2) განიხილეთ და კომენტარებით ახსენით როგორ მუშაობს გაკვეთილზე დაწერილი კოდი: 

# def find_short(s):
# აქ შევქმენით ცვლადი list1
#     list1 = s.split(" ")

# აქ ხდება პირველ სიტყვაზე დაფუძნებული სიგრძის განსაზღვრა
#     word_len = len(list1[0])
# შევამოწმეთ ლისტში სიტყვების სიგრძე
#     for i in list1:
# თუ სიტყვის სიგრძე უფრო მეტია მაშინ.
#         if len(i) < word_len:
#             word_len = len(i)
    #    ვაბრუნებთ word_len-ს
#     word_len = 3
#     return word_len
# პრინტ ფუნქციის დახმარებით ვპრინტავთ კოდს
# print(find_short("bitcoin take over the world maybe who knows perhaps")) 




# იმუშავეთ split-ის გამოყენებაზე: შექმენით 10 string და თითოეულზე გამოიყენეთ split ბრძანება, მოახდინეთ გახლეჩვა ნებისმიერი სიმბოლოთი

#  2) განიხილეთ და კომენტარებით ახსენით როგორ მუშაობს გაკვეთილზე დაწერილი კოდი: 

# def find_short(s):
# აქ შევქმენით ცვლადი list1
#     list1 = s.split(" ")

# აქ ხდება პირველ სიტყვაზე დაფუძნებული სიგრძის განსაზღვრა
#     word_len = len(list1[0])
# შევამოწმეთ ლისტში სიტყვების სიგრძე
#     for i in list1:
# თუ სიტყვის სიგრძე უფრო მეტია მაშინ.
#         if len(i) < word_len:
#             word_len = len(i)
    #    ვაბრუნებთ word_len-ს
#     word_len = 3
#     return word_len
# პრინტ ფუნქციის დახმარებით ვპრინტავთ კოდს
# print(find_short("bitcoin take over the world maybe who knows perhaps")) 

# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
# def reverse_words(text):
#     words = text.split(" ")
#     reverse_words = [word[::-1]for word in words]
#     return " ".join(reverse_words)
    
# https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
# def factorial(n):
#     if n < 0 or n > 12:
#         raise ValueError("input mast be beetwen 0 and 12")
#     result = 1
#     for i in range (2,n + 1):
#          result *= i
#     return result