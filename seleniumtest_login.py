# seleniumtest_login.py

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import os
import time

#  Path to chromedriver.exe (change if needed)
CHROMEDRIVER_PATH = r"C:\chromedriver-win64\chromedriver.exe"

#  Load local index.html
HTML_FILE = f"file:///{os.getcwd()}/index.html"

#  Setup the Chrome driver
service = Service(CHROMEDRIVER_PATH)
driver = webdriver.Chrome(service=service)

#  Open your local HTML file
driver.get(HTML_FILE)
time.sleep(1)

#  Click the Login tab
try:
    driver.find_element(By.ID, "nav-login").click()
    print("🔹 Login tab clicked")
except:
    print("❌ Login tab not found")

time.sleep(1)

#  Fill the login form
try:
    driver.find_element(By.ID, "loginEmail").send_keys("admin@example.com")
    driver.find_element(By.ID, "loginPassword").send_keys("admin123")
    driver.find_element(By.ID, "loginForm").submit()
    print("🔹 Login form submitted")
except:
    print("❌ Login form elements not found")

#  Wait and check if login was successful
time.sleep(2)

if "Dashboard" in driver.page_source or "Logout" in driver.page_source:
    print("✅ Login test passed!")
else:
    print("❌ Login test failed.")

#  Close the browser
driver.quit()
