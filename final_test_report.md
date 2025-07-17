
# 🧪 SOLO TITAN – FINAL QA TEST REPORT  
### CleanCity Waste Pickup Scheduler  
### Submitted by: [malebo thathana]  
### Date: 16 July 2025

---

## 🧱 1. SYSTEM UNDER TEST (SUT)

The application under test is a single-page web app with the following:

- **User Roles**: Regular User & Admin  
- **Core Modules**:
  - Login
  - Registration
  - Pickup Request
  - Feedback
  - Dashboard
  - Admin Panel
  - Awareness Blog
- **Data Layer**: `localStorage` only (no backend API)

---

## 🛠️ 2. TOOLS & TECHNOLOGIES USED

| Purpose              | Tools/Technologies                   |
|----------------------|--------------------------------------|
| Unit Testing         | ✅ Jest (58 tests)                    |
| UI Automation        | ✅ Selenium (Chrome for Testing)      |
| Manual Testing       | ✅ Exploratory, validation flows      |
| Issue Logging        | ✅ GitHub Issues + `defect-log.md`    |
| Test Planning        | ✅ Markdown test plans                |
| Video Recording      | OBS Studio + Scripted Voiceover      |
| Test Data Generation | Custom accounts + JSON structure     |
| Test Management      | GitHub Projects (Kanban-style)       |

---

## 🔍 3. SCOPE OF TESTING

- Full manual and automated testing for **ALL major features**
- **6 fully tested modules**:
  - Login
  - Registration
  - Pickup Request Form
  - Feedback Form
  - Dashboard Filters
  - Admin Panel Controls

- Selenium browser tests for key workflows:
  - Registration
  - Login
  - Pickup scheduling
  - Logout

---

## 🧪 4. TEST COVERAGE SUMMARY

| Module        | Manual | Jest | Selenium |
|---------------|--------|------|----------|
| Login         | ✅     | ✅   | ✅        |
| Registration  | ✅     | ✅   | ✅        |
| Pickup Form   | ✅     | ✅   | ✅        |
| Feedback      | ✅     | ✅   | ✅        |
| Dashboard     | ✅     | ✅   |          |
| Logout        | ✅     | ✅   | ✅        |

🟢 **Total Unit Tests (Jest)**: 58  
🟢 **Test Coverage**: 96% statements, 100% functions  
🟢 **UI Flows Automated**: 4 critical user journeys

---

## 🐛 5. DEFECTS FOUND

| Bug ID   | Description                            | Severity |
|----------|----------------------------------------|----------|
| BUG001   | Eldoret filter returns Nairobi data    | Major    |
| BUG002   | Plain-text password storage            | Critical |
| BUG003   | Feedback accepts empty comments        | Minor    |
| BUG004   | Pickup form allows past dates          | Medium   |
| BUG005   | Name field accepts too short strings   | Medium   |
| BUG006   | Duplicate email registration possible  | Critical |
| BUG007   | Session loss if localStorage clears    | Major    |

---

## ✅ 6. WHAT WAS COMPLETED

- 🧩 Wrote complete Jest test suites for all core modules
- 🧪 Created and ran Selenium scripts for login, register, pickup, logout
- 🔐 Performed basic security testing (XSS, HTML injection, password checks)
- 📝 Logged and categorized all bugs in `defect-log.md`
- 🎬 Recorded a 5-minute narrated video demo
- 📦 Organized all files into final repo structure: `/tests`, `/docs`, `/scripts`

---

## 🔄 7. CHANGES SINCE WEEK 1

| Area                  | Final Outcome                                         |
|-----------------------|-------------------------------------------------------|
| Team Structure        | Solo Titan (see reflection below)                    |
| Tooling               | Manual → Jest → Selenium                              |
| Automation            | Fully integrated Selenium with real browser           |
| Bug Tracking          | Formal logs + GitHub Issue-style format               |
| Test Data             | Custom user sets + registration scenarios             |
| Submission Artifacts  | README, Video, Report, Test Scripts, Coverage Data    |

---

## ⚠️ 8. CHALLENGES FACED

- ❌ **Original group (Bug Busters)** stopped contributing entirely
- 💬 Raised issue with module lead and was advised to form **Solo Titan**
- ⚙️ Selenium setup errors (ChromeDriver path issues, localStorage not found)
- 🔁 Manual testing became slow due to localStorage resets and form bugs
- ⏱️ Very little time, yet had to do **everything alone** — no backup

---

## 💭 9. REFLECTION

> **This course pushed me beyond what I thought I could do.**

In the beginning, I was part of the **Bug Busters** group, but I quickly realized I was the only one contributing. Test cases, plans, tools — everything was on me.

After speaking to the module lead, I was advised to **start a solo group**, and that’s how **Solo Titan** was born.

From that point forward, I worked alone:
- I set up **all environments**
- Wrote every **test script** (manual, Jest, Selenium)
- Logged every **bug**
- Designed the **test plan**, wrote the **report**, and recorded the **final video**

The journey was difficult — especially dealing with test failures, async Selenium errors, and restarting everything on a second laptop.  
But it was also **rewarding**.

By doing all of this **on my own**, I now feel **confident and ready** for real-world QA work. I’ve learned how to:
- Organize test flows
- Choose the right tools
- Debug tests under pressure
- Automate form-based workflows
- Communicate issues clearly

> I am **Solo Titan**, and this report is proof of what I can do — even alone.

---

## 🏁 10. FINAL STATUS

| Component             | Status       |
|----------------------|--------------|
| Manual Test Cases     | ✅ Complete  |
| Jest Test Suites      | ✅ Complete  |
| Selenium Tests        | ✅ Complete  |
| Bug Logging           | ✅ Complete  |
| Final Report          | ✅ Complete  |
| Video Demo            | ✅ Complete  |
| Submission Package    | ✅ Ready     |

---

✅ **SOLO TITAN – MISSION COMPLETE.**
