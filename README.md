# QA Assessment – Web & API Testing

## Project Overview
This assessment contains manual and automated test cases for both **web application testing** (SauceDemo site) and **API testing** (`https://jsonplaceholder.typicode.com`).  
It also includes **bug reports** for issues found during testing and **automation scripts** using Playwright.

---

## Web Application Testing
- **Scope:**  
  - Add To Cart
  - Checkout

- **Documentation:**  
  Test cases are included in the Google Sheets file: [Test Cases – Google Sheets](https://docs.google.com/spreadsheets/d/1HrUGHNK73XKheSDsNUJasiWmC8PEufHwC2k24okH8FA/edit?usp=sharing)

---

## API Testing
- **Scope:**  
  - `GET /users` → Retrieve all users  
  - `GET /users/1` → Retrieve single user  
  - `POST /posts` → Create new post  
  - `PUT /posts/1` → Update existing post  
  - **Edge cases:** Invalid IDs, missing request body, incorrect endpoints  

- **Documentation:**  
  Test cases are included in the Google Sheets file: [Test Cases – Google Sheets](https://docs.google.com/spreadsheets/d/1HrUGHNK73XKheSDsNUJasiWmC8PEufHwC2k24okH8FA/edit?usp=sharing)

---

## Automation (Playwright)
- **Framework:** Playwright + TypeScript  
- **Scripts:** Located in the `/tests` directory  

Run tests with:
```bash
npx playwright test