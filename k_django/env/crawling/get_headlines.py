from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


chrome_options = webdriver.ChromeOptions()
driver = webdriver.Chrome('./chromedriver', options=chrome_options)
driver.implicitly_wait(3)
driver.get('https://www.naver.com/')

search_input = driver.find_element_by_id('query')
search_input.send_keys('코로나')
search_input.send_keys(Keys.RETURN)

# 뉴스 버튼을 CSS Selector 기반으로 찾기
button = driver.find_element_by_css_selector(
    '#lnb > div.lnb_group > div > ul > li:nth-child(2) > a')
# 해당 element를 마우스로 클릭
button.click()

# 헤드라인을 전부 찾은 뒤, 링크 주소와 텍스트를 출력
headlines = driver.find_elements_by_css_selector('ul.list_news a.news_tit')
for headline in headlines:
    news_link = headline.get_attribute('href')
    headline_text = headline.text
    print(news_link)
    print(headline_text)

# 코드 실행을 잠시 멈춘다.
time.sleep(2)

# 사용을 마치면 드라이버를 종료시킨다. 
driver.quit()