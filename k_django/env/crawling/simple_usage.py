
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

chrome_options = webdriver.ChromeOptions()

# options 옵션
# 크롬 헤드리스 모드 사용 위해 disabled-gpu setting
chrome_options.add_argument('--disable-gpu')
# 크롬 헤드리스 모드 사용 위해 hedless setting
chrome_options.add_argument('--headless')
# => 렌더링 (직접 브라우져 켜지는 것/눈으로 보이는 것) 절차 생략

driver = webdriver.Chrome('./chromedriver', options=chrome_options)
# 크롬을 자동화할수 있는 드라이버 생성
# webdriver.Chrome('크롬 드라이버 위치 지정', options=(chrome_options)) 

driver.implicitly_wait(3)
# 몇초동안 대기할 것인지 지정 (웹페이지가 뜨기까지 3초 기달려줌 / 3초 이상시 에러)
driver.get('https://www.naver.com/')
# Selenium을 통해 우리가 지정한 웹페이지 접속

search_input = driver.find_element_by_id('query')
# HTML/CSS 코드로 선택
search_input.send_keys('코로나')
# 검색창에 코로나 입력
search_input.send_keys(Keys.RETURN)
# 엔터 누르기 (특수한 키 모음: Keys.)
print(driver.title)
# 제목 출력


# 코드 실행을 잠시 멈춘다. 
time.sleep(2)

# 사용을 마치면 드라이버 종료 
driver.quit()