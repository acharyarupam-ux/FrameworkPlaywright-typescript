// import {test} from '@playwright/test'
import { PerformancePage} from '../pages/PerformancePage.ts'
import { Dashboard } from '../pages/Dashboard.ts'
import {test, expect} from '../hooks/hooks.ts'

test ('Dashboard Screen' ,async({ page })=>{
    const PPage = new PerformancePage(page)
    const Dasboard = new Dashboard(page)
    await Dasboard.clickSidePanel('Performance')
    await PPage.ManageReview()

})