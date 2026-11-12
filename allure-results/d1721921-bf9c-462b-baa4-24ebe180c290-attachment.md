# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance.spec.ts >> Dashboard Screen
- Location: tests\Performance.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import * as allure from "allure-js-commons";
  3  | import {envConfig }from '../config/env.config';
  4  | import { LoginPage } from '../pages/LoginPage';
  5  | 
> 6  | test.beforeEach(async({page})=>{
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  7  |     await page.goto('/')
  8  |     const loginP = new LoginPage(page);
  9  |     await loginP.LoginUi(envConfig.username,envConfig.password)
  10 | 
  11 |      });   
  12 | export { test, expect };
```