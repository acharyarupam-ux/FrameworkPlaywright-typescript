import { test, expect } from '@playwright/test';
import { ApiUtility } from '../utilities/apiutility';
// test.describe("Get Employee Details", () => {
    test("Get Employee Details", async ({request}) => {
        const resp = await request.get('https://dummy.restapiexample.com/api/v1/employees/25'); 
        expect(resp.status()).toBe(200);

        const responseBody = await resp.json();
    })
// });