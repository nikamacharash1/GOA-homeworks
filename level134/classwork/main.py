# 2) გადმოგეცემათ დოლარების (ინტეჯერების) მასივი, შექმენით ახალი მასივი და მასში შეინახეთ ლარების ვერსია
dollar = [24, 26, 87, 98, 10]
exchangeLariRate = 2.80
lari = [round(dollar * exchangeLariRate, 2) for dollar in dollar]
print(lari)

# 3) გადმოგეცემათ მასივი სიტყვების და შეინახეთ სხვა ცვლადში მხოლოდ პალინდრომები
words = ["ama", "elene", "imimi", "romani", "imi", "nika", "levani"]
palindrome = [word for word in words if word == word[::-1]]
print(palindrome)


# 4) გადმოგეცემათ კრედიტ კარტის რიცცვები და გადააკეთეთ ეს მასივი რომ ჩანდეს მხოლოდ ამ კარტების ბოლოს 4 რიცხვები. (მაგ: ************5678)
card_numbers = ["127654985432", "347566451094", "564389470813"]
masked_cards = ["*" * (len(card) - 4) + card[-4:] for card in card_numbers]
print(masked_cards)


