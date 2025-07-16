

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

def test_valid_login():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")

    login_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/login"]')
    login_link.click()
    driver.implicitly_wait(5) 
    driver.find_element(By.ID, "login-email").send_keys("admin@example.com")
    driver.find_element(By.ID, "login-password").send_keys("admin123")
    login_button = driver.find_element(By.CLASS_NAME, "login-btn")
    login_button.click()
    
    driver.implicitly_wait(5) 
    logout_element = driver.find_element(By.CLASS_NAME, "nav-logout")

    assert logout_element.is_displayed(), "Logout button not displayed"
    driver.quit()
   
 
def test_login_with_incorrect_email():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")

    login_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/login"]')
    login_link.click()
    driver.implicitly_wait(5) 
    driver.find_element(By.ID, "login-email").send_keys("wrongemail@example.com")
    driver.find_element(By.ID, "login-password").send_keys("admin123")
    login_button = driver.find_element(By.CLASS_NAME, "login-btn")
    login_button.click()
    
    driver.implicitly_wait(5) 
    

    try:
        logout_element = driver.find_element(By.CLASS_NAME, "nav-logout")
        assert not logout_element.is_displayed(), "Logout button is visible but should not be"
    except NoSuchElementException:
    # Element not found in DOM — this is also valid for "not displayed"
        pass
    driver.quit()
    
    
def test_login_with_incorrect_password():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")

    login_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/login"]')
    login_link.click()
    driver.implicitly_wait(5) 
    driver.find_element(By.ID, "login-email").send_keys("admin@example.com")
    driver.find_element(By.ID, "login-password").send_keys("IncorrectPass")
    login_button = driver.find_element(By.CLASS_NAME, "login-btn")
    login_button.click()
    
    driver.implicitly_wait(5) 
    

    try:
        logout_element = driver.find_element(By.CLASS_NAME, "nav-logout")
        assert not logout_element.is_displayed(), "Logout button is visible but should not be"
    except NoSuchElementException:
    # Element not found in DOM — this is also valid for "not displayed"
        pass
    driver.quit()
    
    
    #ADD MORE TESTS FROM YOUR TEST CASES (LOGIN WITH INVALID)