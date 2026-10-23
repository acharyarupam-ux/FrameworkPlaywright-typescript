import {Page, Locator, expect} from '@playwright/test'

// export class CommonActions
// {
//     constructor(private page:Page){}
//     async enterText(pageLocator:Locator,value:string):Promise<void>
//     {
//         await pageLocator.fill(value);
//     }
// }

export async function enterText(page:Page,locator:Locator,text:string)
{
await locator.fill(text)
}