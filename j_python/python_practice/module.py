import random

numbers = [1, 2, 3, 4, 5]

rand_numbers = random.sample(numbers, 3)

print(rand_numbers) #[1, 3, 4]

lotto_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]


lotto = random.sample(lotto_nums, 6)
lotto.sort()
print(lotto.sort()) #RETRUN 없음 = None
print(lotto) #[4, 10, 17, 22, 27, 41]

lotto_random = random.sample(range(1, 46), 6)
lotto_random.sort()
print(lotto_random) #[5, 10, 26, 38, 40, 43]

print(sorted(random.sample(range(1, 46), 6)))