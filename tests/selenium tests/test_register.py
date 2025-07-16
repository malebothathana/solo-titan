
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

def test_valid_registration():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")

    register_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/register"]')
    register_link.click()
    driver.implicitly_wait(5) 
    driver.find_element(By.ID, "register-name").send_keys("New User")
    driver.find_element(By.ID, "register-email").send_keys("newuser@gmail.com")
    driver.find_element(By.ID, "register-password").send_keys("newuserpass")
    
    register_button = driver.find_element(By.CLASS_NAME, "register-btn")
    register_button.click()
    
    driver.implicitly_wait(5) 

    assert "login" in driver.current_url, "URL does not contain 'dashboard'"
    driver.quit()
   
