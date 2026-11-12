# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance.spec.ts >> Dashboard Screen
- Location: tests\Performance.spec.ts:6:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import * as allure from "allure-js-commons";
  3  | import {envConfig }from '../config/env.config';
  4  | import { LoginPage } from '../pages/LoginPage';
  5  | 
  6  | test.beforeEach(async({page})=>{
> 7  | test('Login Scenerio for valid Credentials',async({page})=>{
     |     ^ Error: Playwright Test did not expect test() to be called here.
  8  |            await page.goto('/')
  9  |        })
  10 |        const loginP = new LoginPage(page);
  11 |        await loginP.LoginUi(envConfig.username,envConfig.password)
  12 | 
  13 |       
  14 | })
  15 | export { test, expect };
```