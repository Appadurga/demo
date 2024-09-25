import excel from "exceljs"
class excelfun{
    async readData(path,sheetname,rownum,cellnum)
    {
        let book=new excel.Workbook();
        await book.xlsx.readFile(path);
        let data=book.getWorksheet(sheetname).getRow(rownum).getCell(cellnum).toString()
        return data
    }
    async enterData(path, sheetName, rowNum, cellNum, value) {
        let workbook = new excel.Workbook();
        await workbook.xlsx.readFile(path); // Read the file
        //let worksheet = workbook.getWorksheet(sheetName); // Get the worksheet
        // if (!worksheet) {
           let  worksheet = workbook.addWorksheet(sheetName); // Add a worksheet if it doesn't exist
        // }
        worksheet.getRow(rowNum).getCell(cellNum).value = value.toString(); // Set the cell value
        // Save the changes to the file
        await workbook.xlsx.writeFile(path);
    }
   
}
export default new excelfun()