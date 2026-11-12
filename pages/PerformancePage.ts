import { Page , Locator} from '@playwright/test'
import * as CommonMethod from '../utilities/CommonMethod';

export class PerformancePage
{
    readonly page :Page
    readonly EmpName : Locator ;
    readonly JobTitle : Locator ;
    constructor(page: Page) {
    this.page = page;
    this.EmpName = page.getByPlaceholder('Type for hints...')
    this.JobTitle = page.locator('.oxd-select-text-input')
  }

  async ManageReview() : Promise <void>
  {
    await this.page.getByPlaceholder('Type for hints...').fill("Rupam")
  }
}