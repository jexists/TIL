
password = 'jexists'

while True:
    my_password = input('password: ')

    if my_password != password:
        print('비밀번호를 다시 입력해주세요.')
    else:
        print('로그인 성공')
        break

level = 0

while level < 10:
    print('열심히 게임하세요')
    level += 1
    if level == 10:
        print('게임 끝')
