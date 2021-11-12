albums = {
    'winner' : ['Island', 'Really Really'],
    'ikon' : ['Hug me', 'freedom']
}
print(len(albums)) #2

print(albums['winner']) #['Island', 'Really Really']
# print(albums['bigbang']) #ERROR 해당키가 없을 경우

print(albums.get('bigbang')) #None
print(albums.get('winner')) #['Island', 'Really Really']

albums['ikon'] = ['hello', 'Anthem']
print(albums) #{'winner': ['Island', 'Really Really'], 'ikon': ['hello', 'Anthem']}


# 삭제
del(albums['ikon'])
# del(albums['hello']) #ERROR 해당키가 없을 경우 
print(albums) #{'winner': ['Island', 'Really Really']}

akmu = {'akmu' : ['200%', 'Give Love']}

#넣기
albums.update(akmu)

print(albums) #{'winner': ['Island', 'Really Really'], 'akmu': ['200%', 'Give Love']}