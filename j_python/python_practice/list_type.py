
animals = ['dog', 'cat', 'pig', 'sheep', 'rebbit']

print(animals[2]) #pig

print(animals[1:3]) #['cat', 'pig']

print(len(animals)) #5

animals.append('deer') #아이템 하나만 추가

print(animals) #['dog', 'cat', 'pig', 'sheep', 'rebbit', 'deer']

birds = ['chicken', 'duck', 'pigeon']

animals.extend(birds) #리스트 속 아이템들 전부 추가

print(animals) #['dog', 'cat', 'pig', 'sheep', 'rebbit', 'deer', 'chicken', 'duck', 'pigeon']

animals[0] = 'lion'

print(animals) #['lion', 'cat', 'pig', 'sheep', 'rebbit', 'deer', 'chicken', 'duck', 'pigeon']

#  순서 간단한 정렬

numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

# 리스트 오름차순으로 정렬
numbers.sort() 
print(numbers)

# 리스트 내림차순으로 정렬
numbers.reverse() #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers) #[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# 리스트의 마지막 아이템을 제거, 주로 마지막 아이템을 꺼내어 활용하는 목적으로 사용
last_number = numbers.pop() 
print(last_number) #1

print(numbers) #[10, 9, 8, 7, 6, 5, 4, 3, 2]

numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2]

# 원하는 위치에 삽입
numbers.insert(1,9) #insert(인덱스번호, 삽입 데이터)
print(numbers)

# 해당 값이 리스트 내에 몇 개
print(numbers.count(9)) #2

# 리스트에서 특정 값 삭제. (없을경우 에러/앞에 값 하나만 삭제)
numbers.remove(9) 
print(numbers) #[10, 9, 8, 7, 6, 5, 4, 3, 2]

# 해당 값이 리스트에서 몇 번째 위치 (없을경우 에러)
print(numbers.index(3)) #7