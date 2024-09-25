
describe("facebook", () => {
    it("launch the url", async () => {

        // Navigate to Amazon India homepage
        let handle1 = await browser.url("https://www.amazon.in/");

        // Find the search input field and enter the text "shoes for man"
        await browser.$('//input[@placeholder="Search Amazon.in"]').setValue("shoes for man");

        // Click on the search button
        await browser.$("//input[@id='nav-search-submit-button']").click();

        // Open a new window with the specified local URL
        let handle2 = await browser.newWindow("http://localhost:8888/index.php?action=Login&module=Users");

        // Pause for 2 seconds
        await browser.pause(2000);

        // Switch back to the Amazon window
        let handle3 = await browser.switchWindow("https://www.amazon.in/");

        // Pause for 2 seconds
        await browser.pause(2000);

        // Get the current window handle
        let currentHandle = await browser.getWindowHandle();
        console.log(currentHandle);
   
        // Get all window handles
        let allHandles = await browser.getWindowHandles();
        console.log(allHandles);
     
        // Loop through all window handles and print the handle if it matches the current window
        for (const handle of allHandles) {
            if (handle === currentHandle) {
                console.log("Current handle:", handle);
            }
        }
    });
});
