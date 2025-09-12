import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { getApiResponse } from '../../utils/dataHelper';

test('Login using API data', async ({ page }) => {
    const userData = getApiResponse();

    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login(userData.email, 'admin123');  // Example static password

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});
