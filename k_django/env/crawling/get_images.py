from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import os
import requests


chrome_options = webdriver.ChromeOptions()
driver = webdriver.Chrome('./chromedriver', options=chrome_options)
driver.implicitly_wait(3)
driver.get('https://www.naver.com/')

search_input = driver.find_element_by_id('query')
search_input.send_keys('유승호')
search_input.send_keys(Keys.RETURN)

# '이미지' 라는 텍스트를 가진 링크를 찾기
button = driver.find_element_by_link_text('이미지')
button.click()
time.sleep(2)

# 이미지 링크 수집
images = driver.find_elements_by_css_selector('img._listImage')

# 이미지를 저장할 images 폴더 생성
if not os.path.exists('./images'):
    os.mkdir('./images')
#image폴더가 존재하지않는다면 생성

for index, image in enumerate(images):
    image_src = image.get_attribute('src')
#enumerate -> 인덱스 사용 가능

    # gif / base64 가 아닌 jpg 이미지만 다운로드
    if 'https' in image_src and '.jpg' in image_src:
        print(f'{index}: {image_src}')
        img_data = requests.get(image_src).content
        with open(f'./images/seungho-{index}.jpg', 'wb') as handler:
            handler.write(img_data)
            
# 코드 실행을 잠시 멈춘다.
time.sleep(2)

# 사용을 마치면 드라이버를 종료시킨다. 
driver.quit()