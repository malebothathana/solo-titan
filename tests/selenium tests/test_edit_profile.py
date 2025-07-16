
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
    edit_button = driver.find_element(By.XPATH, "//button[normalize-space()='Edit Profile']")
    edit_button.click() 
    
    input_field = driver.find_element(By.NAME, "name")
    input_field.clear()                # Clear existing text
    input_field.send_keys("New Name")   
    
    save_button = driver.find_element(By.XPATH, "//button[normalize-space()='Save']")
    save_button.click()
    
    h2_element = driver.find_element(By.TAG_NAME, "h2")

# Get the text and assert it
    assert h2_element.text.strip() == "New Name", f"Expected 'New Name', but got '{h2_element.text.strip()}'"
    
    logout_element = driver.find_element(By.CLASS_NAME, "nav-logout")

    assert logout_element.is_displayed(), "Logout button not displayed"
    driver.quit()