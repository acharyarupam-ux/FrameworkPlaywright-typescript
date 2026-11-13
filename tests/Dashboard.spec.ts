// import {test} from '@playwright/test'
// import { Dashboard } from '../pages/Dashboard'
import {test} from '../fixtures/Fixtures.ts'
// import {test, expect} from '../hooks/hooks.ts'

test ('Dashboard Screen' ,async({ page, DashboardPage })=>{
    // const DashboardPage = new Dashboard(page)
    DashboardPage.clickSidePanel('Admin')

});