from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import os
import time

CHROMEDRIVER_PATH = r"C:\chromedriver-win64\chromedriver.exe"
CHROME_BINARY_PATH = r"C:\CleanChrome\chrome-win64\chrome.exe"
HTML_FILE = f"file:///{os.getcwd()}/index.html"

options = Options()
options.binary_location = CHROME_BINARY_PATH
service = Service(CHROMEDRIVER_PATH)
driver = webdriver.Chrome(service=service, options=options)

driver.get(HTML_FILE)
time.sleep(1)

try:
    driver.find_element(By.ID, "nav-register").click()
    print("🔹 Register tab clicked")
except:
    print("❌ Register tab not found")

time.sleep(1)

try:
    driver.find_element(By.ID, "registerName").send_keys("New Test User")
    driver.find_element(By.ID, "registerPhone").send_keys("+1-555-9999")
    driver.find_element(By.ID, "registerEmail").send_keys("newuser@test.com")
    driver.find_element(By.ID, "registerPassword").send_keys("NewPass123")
    driver.find_element(By.ID, "registerConfirmPassword").send_keys("NewPass123")
    driver.find_element(By.ID, "registerForm").submit()
    print("🔹 Registration form submitted")
except:
    print("❌ Could not fill registration form")

time.sleep(2)

if "Login" in driver.page_source or "Successfully registered" in driver.page_source:
    print("✅ Registration test passed!")
else:
    print("❌ Registration test failed.")

driver.quit()
