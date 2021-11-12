
# without class
ferrari = {
    "name": "Ferrari",
    "color": "Rosso Corsa",
    "fuel": 50,
    "mileage": 0
}

lamborghini = {
    "name": "lamborghini",
    "color": "Giallo Spica",
    "fuel": 40,
    "mileage": 0
}


def ferrari_accel():
    ferrari["fuel"] -= 2
    ferrari["mileage"] += 10


def lamborghini_accel():
    lamborghini["fuel"] -= 3
    lamborghini["mileage"] += 12


print(ferrari)
# {'name': 'Ferrari', 'color': 'Rosso Corsa', 'fuel': 50, 'mileage': 0}
print(lamborghini)
# {'name': 'lamborghini', 'color': 'Giallo Spica', 'fuel': 40, 'mileage': 0}

ferrari_accel()
lamborghini_accel()

print(ferrari)
# {'name': 'Ferrari', 'color': 'Rosso Corsa', 'fuel': 48, 'mileage': 10}
print(lamborghini)
# {'name': 'lamborghini', 'color': 'Giallo Spica', 'fuel': 37, 'mileage': 12}

# with class


class Car:
    def __init__(self, name, color, fuel):
        self.name = name
        self.color = color
        self.fuel = fuel
        self.mileage = 0

    def accel(self):
        self.fuel -= 2
        self.mileage += 10


car = Car('GENESIS', 'black', 30)
print(car.name, car.color, car.fuel)  # GENESIS black 30
car.accel()

##########


class Car:
    def __init__(self):
        print('자동차를 만듭니다.')


Car()  # 인자 필요X
# 자동차를 만듭니다.


class Car:
    count = 0  # class 변수: 인스턴스 무관한 변수

    def __init__(self, name, color, fuel):
        # 새롭게 만든 인스턴스 내부 변수 = 매소드에서 파라미터에서 받은 변수
        self.name = name
        self.color = color
        self.fuel = fuel
        self.mileage = 0
        Car.count += 1  # 클래스 변수: 클래스이름으로 사용

    def __str__(self):
        return f'{self.name} {self.color} {self.fuel} {self.mileage}'

    def accel(self):
        self.fuel -= 2
        self.mileage += 10


print(f"Car count : {Car.count}")  # Car count : 1

genesis = Car("GENESIS", "black", 50)
ferrari = Car("Ferrari", "Rosso Corsa", 40)

# def __str__(self):  만들기 전 (16진수 주소)
print(genesis)
# <__main__.Car object at 0x10bc47b80>
print(ferrari)
# <__main__.Car object at 0x10bcb6850>

print(genesis.name)  # GENESIS
print(genesis.color)  # black
print(genesis.fuel)  # 50
print(genesis.mileage)  # 0
print()
print(genesis.name, genesis.color, genesis.fuel, genesis.mileage)
# GENESIS black 50 0

print(genesis)
# GENESIS black 50 0
print(ferrari)
# FerrariRosso Corsa 40 0

genesis.accel()
ferrari.accel()


print(genesis)
# GENESIS black 48 10
print(ferrari)
# FerrariRosso Corsa 38 10

print(f"Car count : {Car.count}")  # Car count : 2


# 상속

class Ferrari(Car):
    def __init__(self):
        self.name = 'Ferrari'
        self.color = 'Rosso Corsa'
        self.fuel = 50
        self.mileage = 0


# 코드 반복!!!! ->  재활용 하고 필요한 코드만 추가


class Ferrari(Car):
    def __init__(self):
        super().__init__('Ferrari', 'Rosso Corsa', 50)
        #super()부모 호출
        self.slogan = 'we are the competition'
    
    def __str__(self):
        return f'{self.name} {self.color} {self.fuel} {self.mileage} {self.slogan}'

ferrari = Ferrari()