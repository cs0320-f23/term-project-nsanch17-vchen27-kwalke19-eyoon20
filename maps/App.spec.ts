import { test, expect } from "@playwright/test";
import App from "./App";

const url = "http://localhost:5173";

test("successful search", async ({ page }) => {
  await page.goto(url);

  await page.getByLabel("search bar").click();
  await page.getByLabel("search bar").fill("parks");

  await page.getByRole("button", { name: "search-history" }).click();
  await expect(page.getByLabel("search bar")).toHaveValue("");

  await expect(page.getByTestId("search-layer")).toBeVisible();
});

test("Search bar is visible", async ({ page }) => {
  // Navigate to your page
  await page.goto("http://your-app-url");

  // Wait for the component to be rendered
  await page.waitForSelector(".searchbar-container");

  // Check if the search bar input is visible
  const searchInput = await page.$(".search-input");
  expect(searchInput).not.toBeNull();

  // Check if the search button is visible
  const searchButton = await page.$(".search-button");
  expect(searchButton).not.toBeNull();
});

test("Text changes after typing into the search bar", async ({ page }) => {
  // Navigate to your web app
  await page.goto("http://localhost:5173");

  // Type text into the search bar
  const searchText = "Your search text";
  await page.fill(".search-input", searchText);

  // Get the value of the search bar after typing
  const searchBarValue = await page.$eval(".search-input", (input) => {
    // Check if the element is an HTMLInputElement
    if (input instanceof HTMLInputElement) {
      // Access the value property for HTMLInputElement
      return input.value;
    }

    // If it's not an HTMLInputElement, return an empty string or handle accordingly
    return "";
  });

  // Assert that the text has changed
  expect(searchBarValue).toBe(searchText);
});

/**
 * Integration testing of our backend and frontend, we can fetch the GeoJSON
 * data from the backend
 */
test("can fetch data from backend", async () => {
  const url = "http://localhost:3233/redlining";
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);

  expect(result["result"]).toBe("success");
  expect(result["data"]["type"]).toBe("FeatureCollection");
  expect(result["data"]["features"].length).toBe(8878);
});
