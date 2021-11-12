
import package.car

class Ferrari(package.car.Car):
    def __init__(self):
        super().__init__('Ferrari', 'Rosso Corsa', 50)
        #super()부모 호출
        self.slogan = 'we are the competition'
    
    def __str__(self):
        return f'{self.name} {self.color} {self.fuel} {self.mileage} {self.slogan}'