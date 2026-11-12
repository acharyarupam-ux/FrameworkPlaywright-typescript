import {test as base , expect} from '@playwright/test'
import { Dashboard } from '../pages/Dashboard'
import { LoginPage } from '../pages/LoginPage'

type MyFixture = {
    loginPage : LoginPage,
    DashboardPage : Dashboard
}
export const test = base.extend<MyFixture>({
    loginPage:async ({page},use)=>{
        const loginPage = new LoginPage(page)
        await use (loginPage)
    },
    DashboardPage:async ({page},use)=>{
        const DashboardPage = new Dashboard(page)
        await use (DashboardPage)
    }
})
export{expect}