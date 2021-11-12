
def make_function(data):
    print('어떤 데이터를 받았을까요?')
    print(f'받은 데이터: {data}')


make_function('data')


def is_even(num):
    if num % 2 == 0:
        return True
        print(f'{num1}: 짝수')  # Return 이후 호출X
    else:
        print(f'{num1}: 짝수')  # Return 전에 입력
        return False


num1 = 10
result = is_even(num1)  # True
print(result)

print(is_even(5))  # False
print(print(result))  # True # None
# print() -> Return None

if result == True:
    print(f'{num1}: 짝수')  # 10: 짝수
else:
    print(f'{num2}: 홀수')


# final
def is_even(num):
    return num % 2 == 0


if is_even(num1):
    print(f'{num1}: 짝수')  # 10: 짝수
else:
    print(f'{num2}: 홀수')


num_list = [7, 12, 94]

for num in num_list:
    print(is_even(num)) #False, True, True