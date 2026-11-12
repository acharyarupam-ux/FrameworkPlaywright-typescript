import {test, expect} from '@playwright/test'
import * as allure from "allure-js-commons";
import {envConfig }from '../config/env.config';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async({page})=>{
    await page.goto('/')
    const loginP = new LoginPage(page);
    await loginP.LoginUi(envConfig.username,envConfig.password)

     });   
export { test, expect };