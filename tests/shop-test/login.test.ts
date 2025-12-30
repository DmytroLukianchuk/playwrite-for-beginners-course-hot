import { test, expect } from "@playwright/test";

test("should successfully buy buy the product", async ({ page }) => {
  await page.goto("https://shopdemo-alex-hot.koyeb.app/login");
  await page.getByText("Email AddressPassword").click();
  await page
    .getByRole("main")
    .getByRole("textbox", { name: "Please Enter Your Email" })
    .click();
  await page
    .getByRole("main")
    .getByRole("textbox", { name: "Please Enter Your Email" })
    .click();
  await page
    .getByRole("main")
    .getByRole("textbox", { name: "Please Enter Your Email" })
    .click();
  await page
    .getByRole("main")
    .getByRole("textbox", { name: "Please Enter Your Email" })
    .fill("xotabu4@gmail.com");
  await page
    .getByRole("textbox", { name: "Please Enter Your Password" })
    .click();
  await page
    .getByRole("textbox", { name: "Please Enter Your Password" })
    .fill("xotabu4@gmail.com");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByRole("button", { name: "Login" })).not.toBeVisible;
});
