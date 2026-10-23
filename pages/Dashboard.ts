import { Page , Locator} from '@playwright/test'

export class Dashboard
{
    readonly page :Page
    readonly sidePanelItems : Locator ;
    constructor(page: Page) {
    this.page = page;
    this.sidePanelItems = page.locator('.oxd-main-menu-item');
  }

  async clickSidePanel(menuName: string) {
    await this.sidePanelItems
      .filter({ hasText: menuName })
      .click();
  }

}