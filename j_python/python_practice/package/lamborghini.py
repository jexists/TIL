
import package.car

class Lamborghini(package.car.Car):
    def __init__(self):
        super().__init__('Lamborghini', 'Giallo Spica', 40)
        #super()부모 호출
        self.slogan = 'we are supercars'
    
    def __str__(self):
        return f'{self.name} {self.color} {self.fuel} {self.mileage} {self.slogan}'