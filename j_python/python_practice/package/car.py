

class Car:
    def __init__(self, name, color, fuel):
        self.name = name
        self.color = color
        self.fuel = fuel
        self.mileage = 0

    def accel(self):
        self.fuel -= 2
        self.mileage += 10