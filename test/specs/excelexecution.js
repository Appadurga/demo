import excelfun from "../genericutils/excelutils.js"

describe("Excel Operations", () => {
    it("should fetch and enter values", async () => {
        // Fetch value from Excel
        const value = await excelfun.readData("./test/testData/exeldata.xlsx", "Sheet1", 1, 1);
        console.log("Fetched Value:", value);

        // Enter value into Excel
        await excelfun.enterData("./test/testData/exeldata.xlsx", "Sheet2", 3, 3, "durga");
        console.log("Value entered successfully.");
    });
});
