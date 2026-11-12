import { Page , Locator, expect} from '@playwright/test'

export class Dashboard
{
    readonly page :Page
    readonly sidePanelItems : Locator ;
    constructor(page: Page) {
    this.page = page;
    this.sidePanelItems = page.locator('.oxd-main-menu-item');
  }

  async clickSidePanel(menuName: string) {
    const menu = this.page.getByRole('link', {name : menuName,exact:true})
    await expect(menu).toBeVisible()
    await menu.click()
  }

}