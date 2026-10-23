import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import LoginData from '../test-data/Logindata.json'
import * as allure from "allure-js-commons";
import {envConfig }from '../config/env.config';

test('Login Scenerio for valid Credentials',async({page})=>{
   await allure.step('open login page',async()=>{
       await page.goto('/')
   })
   const loginP = new LoginPage(page);
   await loginP.LoginUi(envConfig.username,envConfig.password)
   const Dashboard1 = new Dashboard(page)
   Dashboard1.clickSidePanel("Admin")
   page.pause()
});
for(const data of LoginData)
{
test(`Negative Login :${data.Scenario}`,async({page})=>{
   await allure.step('open login page',async()=>{
       await page.goto('/')
   })
  const loginP1 = new LoginPage(page);
  await loginP1.LoginUi(data.username,data.password)
  if(data.Scenario=="Invalid Credentials")
  {
   await loginP1.InvalidCredentials()
  }
  else if(data.Scenario == "empty data")
  {
    await loginP1.RequiredFeild()
  }
  
})
}