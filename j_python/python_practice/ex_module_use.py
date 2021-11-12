import ex_module
#내장된 모듈(built-in) -> 직접된모듈
#없는 모듈을 가져오면 ERROR 

ex_module.good_morning() #good morning 
ex_module.good_afternoon() #good afternoon

from ex_module import good_morning, good_afternoon

good_morning() #good morning 
good_afternoon() #good afternoon
