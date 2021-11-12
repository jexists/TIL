import package.car
from package import ferrari
from package.lamborghini import Lamborghini


genesis = package.car.Car('Genesis', 'black', 50)
ferrari = ferrari.Ferrari()
lamborghini = Lamborghini()

print(genesis)
print(ferrari)
print(lamborghini)

