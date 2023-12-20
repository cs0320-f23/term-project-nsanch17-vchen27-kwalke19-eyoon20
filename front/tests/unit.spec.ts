import { test, expect } from '@playwright/test';

/* Welcome to testing! Will be broken up into unit and integration tests. */

test("Create An Account and Login", async ({ page }) => {

  //Signup
  await page.goto("http://localhost:5173/");

  await page.click('.user-icon');
  await page.click('.popup-item');

  await page.fill('input[placeholder="First Name"]', 'Eric');
  await page.fill('input[placeholder="Last Name"]', 'Yoon');
  await page.fill('input[placeholder="Username"]', 'Eric');

  await page.click('input[placeholder="Last Name"]');
  await page.setInputFiles('input[type="file"].form-input', '/Users/ericyoon/Desktop/BlueDress.png');

  await page.fill('textarea[placeholder="Bio"]', 'Test');
  await page.fill('input[placeholder="Phone Number"]', '1234567890');
  await page.fill('input[placeholder="Email"]', 'eric@brown.edu');
  await page.fill('input[placeholder="Password"]', '1234');

  await page.click('.signup-button');


  //Login
  await page.fill('input[placeholder="Email"]', 'eric@brown.edu');
  await page.fill('input[placeholder="Password"]', '1234'); 
  await page.click('.signup-button');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('html')).toBeVisible();
});


test('Loaded Ivy Exchange!', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('html')).toBeVisible();
});

test("Log Out", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.click(".user-icon");
  await page.click(".popup-item");

  await page.fill('input[placeholder="First Name"]', "John");
  await page.fill('input[placeholder="Last Name"]', "Smith");
  await page.fill('input[placeholder="Username"]', "John");

  await page.click('input[placeholder="Last Name"]');
  await page.setInputFiles(
    'input[type="file"].form-input',
    "/Users/ericyoon/Desktop/BlueDress.png"
  );

  await page.fill('textarea[placeholder="Bio"]', "Test");
  await page.fill('input[placeholder="Phone Number"]', "1234567890");
  await page.fill('input[placeholder="Email"]', "john@brown.edu");
  await page.fill('input[placeholder="Password"]', "1234");

  await page.click(".signup-button");

  await page.fill('input[placeholder="Email"]', "john@brown.edu");
  await page.fill('input[placeholder="Password"]', "1234");
  await page.click(".signup-button");
  await page.waitForLoadState("networkidle");

  //Only visible if logged out
  await page.click(".user-icon");

  await expect(page.locator('html')).toBeVisible();
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



//Create an account, log in, create a listing, log out, and then create another item

test("Create New Listing (with sign up and login)", async ({ page }) => {

  await page.goto("http://localhost:5173/");

  await page.click('.user-icon');
  await page.click('.popup-item');

  await page.fill('input[placeholder="First Name"]', 'Vicky');
  await page.fill('input[placeholder="Last Name"]', 'Chen');
  await page.fill('input[placeholder="Username"]', 'Vicky');

  await page.click('input[placeholder="Last Name"]');
  await page.setInputFiles('input[type="file"].form-input', '/Users/ericyoon/Desktop/BlueDress.png');

  await page.fill('textarea[placeholder="Bio"]', 'Test');
  await page.fill('input[placeholder="Phone Number"]', '1234567890');
  await page.fill('input[placeholder="Email"]', 'vicky@brown.edu');
  await page.fill('input[placeholder="Password"]', '1234');


    await page.waitForLoadState('networkidle');    
    await page.click('.signup-button'),
  

  await page.fill('input[placeholder="Email"]', 'vicky@brown.edu');
  await page.fill('input[placeholder="Password"]', '1234'); 
  await page.screenshot({ path: 'debug-screenshot3.png' });

  await page.click('.signup-button');
  await page.waitForLoadState('networkidle');
  await page.goto("http://localhost:5173/create-new-listing");
  await page.setInputFiles('input[type="file"]', '/Users/ericyoon/Desktop/BlueDress.png');
  await page.locator('input[aria-label="Title of Listing Input"]').fill("Blue Dress");
  await page.screenshot({ path: 'debug-screenshot4.png' });


  await page.locator('input[aria-label="Price Input"]').fill("9");
  await page.locator('input[aria-label="Quantity Input"]').fill("1");
  await page.locator('textarea[aria-label="Description Input"]').fill("A beautiful blue dress in mint condition.");
  await page.locator('button[aria-label="Publish Button"]').click();

  await page.waitForLoadState('networkidle');
  await page.goto("http://localhost:5173/");

  await expect(page.locator('html')).toBeVisible();
});
