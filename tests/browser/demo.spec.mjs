import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("catalogue visual baseline", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("visual"), "visual snapshots run only in visual projects");
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Core controls for friendly, focused work." })).toBeVisible();
  await expect(page).toHaveScreenshot(`catalogue-${testInfo.project.name}.png`, { fullPage: true });
});

test("catalogue has no serious or critical accessibility violations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "a11y", "axe runs only in the accessibility project");
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  const blockingViolations = results.violations.filter(({ impact }) => impact === "serious" || impact === "critical");

  expect(blockingViolations).toEqual([]);
});
